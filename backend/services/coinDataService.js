import axios from 'axios';

let coinsCache = []; // Cached market data
let coinsListCache = []; // Cached full coins list

export const refreshCoinData = async () => {
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

    // Optional: log sizes for visibility
    console.log(`Coin data refreshed: markets=${coinsCache.length}, list=${coinsListCache.length}`);
  } catch (e) {
    console.error('Error refreshing coin data:', e.message);
  }
};

export const startCoinDataScheduler = (intervalMs = 5 * 60 * 1000) => {
  // Initial load
  refreshCoinData();
  // Schedule periodic refresh
  setInterval(refreshCoinData, intervalMs);
};

export const getCoinsCache = () => coinsCache;
export const getCoinsListCache = () => coinsListCache;
