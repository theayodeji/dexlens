// Controller to handle token-related logic

import axios from "axios";

let coinsCache = []; // Cache for market data
let coinsListCache = []; // Cache for full coins list

// Function to refresh market data and coins list
const refreshCoinData = async () => {
  try {
    // Fetch top 250 coins by market cap
    const marketRes = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 250,
        page: 1,
      },
    });
    coinsCache = marketRes.data;

    // Fetch full coins list
    const listRes = await axios.get('https://api.coingecko.com/api/v3/coins/list');
    coinsListCache = listRes.data;
  } catch (e) {
    console.error('Error refreshing coin data:', e.message);
  }
};

// Refresh every 20 minutes
setInterval(refreshCoinData, 20 * 60 * 1000);
refreshCoinData(); // Initial load

// Get all tokens
export const getAllTokens = async (req, res) => {
  const { page = 1, per_page = 50 } = req.query;

  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page,
        page,
        sparkline: false,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching tokens:', error);
    res.status(500).json({ error: 'Failed to fetch tokens' });
  }
};

// Get a token by ID
export const getTokenById = async (req, res) => {
  const { id } = req.params;

  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd&ids=${id}`);
  res.status(200).json(response.data[0]); 
};

// Search tokens by query
export const searchTokens = async (req, res) => {
  const { query } = req.params;
  const lowered = query.toLowerCase().trim();

  if (!lowered) {
    return res.json([]);
  }

  const matchedCoins = coinsListCache
    .filter((coin) =>
      coin.name.toLowerCase().includes(lowered) ||
      coin.symbol.toLowerCase().includes(lowered)
    )
    .slice(0, 50);

  const results = [];
  const missingIds = [];

  matchedCoins.forEach((coin) => {
    const cachedCoin = coinsCache.find((c) => c.id === coin.id);
    if (cachedCoin) {
      results.push(cachedCoin);
    } else {
      missingIds.push(coin.id);
    }
  });

  if (missingIds.length > 0) {
    try {
      const fetchedData = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: missingIds.join(','),
        },
      });
      results.push(...fetchedData.data);
    } catch (e) {
      console.error('Error fetching missing market data:', e.message);
    }
  }

  const scoredResults = results.map((coin) => {
    const id = coin.id.toLowerCase();
    const symbol = coin.symbol.toLowerCase();
    
    let matchType = '';
    let baseScore = 0;

    // Determine match type and base score
    if (symbol === lowered) {
      matchType = 'exact_symbol';
      baseScore = 1000;
    } else if (id === lowered) {
      matchType = 'exact_name';
      baseScore = 900;
    } else if (symbol.startsWith(lowered)) {
      matchType = 'symbol_prefix';
      baseScore = 800;
    } else if (id.startsWith(lowered)) {
      matchType = 'name_prefix';
      baseScore = 700;
    } else if (symbol.includes(lowered)) {
      matchType = 'symbol_contains';
      baseScore = 600;
    } else if (id.includes(lowered)) {
      matchType = 'name_contains';
      baseScore = 500;
    }

    // Market cap influence varies by match type
    let marketCapMultiplier;
    switch (matchType) {
      case 'exact_symbol':
      case 'exact_name':
        marketCapMultiplier = 0.5; // Less influence for exact matches
        break;
      case 'symbol_prefix':
      case 'name_prefix':
        marketCapMultiplier = 1.0; // Moderate influence
        break;
      default:
        marketCapMultiplier = 1.5; // Higher influence for partial matches
    }

    let marketCapScore = 0;
    if (coin.market_cap && coin.market_cap > 0) {
      marketCapScore = Math.log10(coin.market_cap) * 100 * marketCapMultiplier;
    }

    const finalScore = baseScore + marketCapScore;

    return { ...coin, score: finalScore };
  });

  scoredResults.sort((a, b) => b.score - a.score);
  
  res.json(scoredResults.slice(0, 15));
};
