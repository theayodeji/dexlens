import React, { useState } from 'react';
import { convertCointoUSD, convertUSDtoCoin} from '../lib/utils';

const CurrencyConverter = ({price, symbol}) => {
  const [coinValue, setCoinValue] = useState('');
  const [usdValue, setUsdValue] = useState('');

  const handleCoinChange = (e) => {
    const coin = e.target.value;
    setCoinValue(coin);
    setUsdValue(coin ? convertCointoUSD(parseFloat(coin), price) : '');
  };

  const handleUSDChange = (e) => {
    const usd = e.target.value;
    setUsdValue(usd);
    setCoinValue(usd ? convertUSDtoCoin(parseFloat(usd), price) : '');
  };

  return (
    <div className="px-2 mt-3">
      <h2 className="text-lg font-semibold mb-4">{symbol.toUpperCase()} to USD Converter</h2>
      <div className="flex flex-col space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{symbol.toUpperCase()}</label>
          <input
            type="number"
            value={coinValue}
            onChange={handleCoinChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder={`Enter ${symbol.toUpperCase()} amount`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">USD</label>
          <input
            type="number"
            value={usdValue}
            onChange={handleUSDChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter USD amount"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;