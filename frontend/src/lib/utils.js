export const convertBTCtoUSD = (btc, rate = 107500) => {
  return (btc * rate).toFixed(2);
};

export const convertUSDtoBTC = (usd, rate = 107500) => {
  return (usd / rate).toFixed(8);
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};