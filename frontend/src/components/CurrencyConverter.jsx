import React, { useState } from 'react';
import { convertBTCtoUSD, convertUSDtoBTC } from '../lib/utils';

const CurrencyConverter = () => {
  const [btcValue, setBtcValue] = useState('');
  const [usdValue, setUsdValue] = useState('');

  const handleBTCChange = (e) => {
    const btc = e.target.value;
    setBtcValue(btc);
    setUsdValue(btc ? convertBTCtoUSD(parseFloat(btc)) : '');
  };

  const handleUSDChange = (e) => {
    const usd = e.target.value;
    setUsdValue(usd);
    setBtcValue(usd ? convertUSDtoBTC(parseFloat(usd)) : '');
  };

  return (
    <div className="px-2 mt-3">
      <h2 className="text-lg font-semibold mb-4">BTC to USD Converter</h2>
      <div className="flex flex-col space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">BTC</label>
          <input
            type="number"
            value={btcValue}
            onChange={handleBTCChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter BTC amount"
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