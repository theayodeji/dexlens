import React from 'react';
import CurrencyConverter from './CurrencyConverter';

const TokenInfo = () => (
  <div className="sm:border-r sm:border-gray-300 pt-8 md:px-2 flex-1 min-w-[220px]">
    <h2 className="text-lg font-semibold mb-4">Token Information</h2>
    <ul className="space-y-2 text-sm sm:text-base mb-6">
      <li className="flex justify-between">
        <span className="text-gray-500">Market Cap:</span>
        <span className="font-semibold text-gray-800">$2.11T</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-500">24h Volume:</span>
        <span className="font-semibold text-gray-800">$54.7B</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-500">Circulating Supply:</span>
        <span className="font-semibold text-gray-800">19.86M BTC</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-500">Max Supply:</span>
        <span className="font-semibold text-gray-800">21M BTC</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-500">All-Time High:</span>
        <span className="font-semibold text-gray-800">$109,114</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-500">All-Time Low:</span>
        <span className="font-semibold text-gray-800">$67.81</span>
      </li>
      <li className="flex justify-between">
        <span className="text-gray-500">Max Supply:</span>
        <span className="font-semibold text-gray-800">21M BTC</span>
      </li>
    </ul>
    <CurrencyConverter price="107,500" />
  </div>
);

export default TokenInfo;
