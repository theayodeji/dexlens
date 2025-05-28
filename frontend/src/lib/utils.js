export const convertCointoUSD = (btc, rate) => {
  return (btc * rate).toFixed(2);
};

export const convertUSDtoCoin = (usd, rate) => {
  return (usd / rate).toFixed(8);
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

export const formatLargeNumber = (number) => {
  if (number >= 1e12) {
    return (number / 1e12).toFixed(2) + 'T';
  } else if (number >= 1e9) {
    return (number / 1e9).toFixed(2) + 'B';
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(2) + 'M';
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(2) + 'K';
  }
  return number.toString();
};

export const dummyTokens = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    current_price: 45000,
    price_change_percentage_24h: 2.5,
    market_cap_rank: 1,
    market_cap: 850000000000,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    current_price: 3200,
    price_change_percentage_24h: -1.2,
    market_cap_rank: 2,
    market_cap: 150000000000,
  }
]
