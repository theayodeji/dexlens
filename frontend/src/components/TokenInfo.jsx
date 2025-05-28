import React from 'react';
import CurrencyConverter from './CurrencyConverter';
import { formatLargeNumber } from '../lib/utils';

const TokenInfo = ({ coinInfo }) => {
  if (!coinInfo) return null;

  return (
    <div className="sm:border-r sm:border-gray-300 pt-8 md:px-2 flex-1 min-w-[220px]">
      <h2 className="text-lg font-semibold mb-4">Token Information</h2>
      <ul className="space-y-2 text-sm sm:text-base mb-6">
        <li className="flex justify-between">
          <span className="text-gray-500">Market Cap:</span>
          <span className="font-semibold text-gray-800">
            {coinInfo.market_cap ? `$${formatLargeNumber(coinInfo.market_cap)}` : '—'}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-500">24h Volume:</span>
          <span className="font-semibold text-gray-800">
            {coinInfo.total_volume ? `$${formatLargeNumber(coinInfo.total_volume)}` : '—'}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-500">Circulating Supply:</span>
          <span className="font-semibold text-gray-800">
            {coinInfo.circulating_supply
              ? `${formatLargeNumber(coinInfo.circulating_supply)} ${coinInfo.symbol?.toUpperCase() || ''}`
              : '—'}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-500">Max Supply:</span>
          <span className="font-semibold text-gray-800">
            {coinInfo.max_supply
              ? `${formatLargeNumber(coinInfo.max_supply)} ${coinInfo.symbol?.toUpperCase() || ''}`
              : '—'}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-500">All-Time High:</span>
          <span className="font-semibold text-gray-800">
            {coinInfo.ath ? `$${formatLargeNumber(coinInfo.ath)}` : '—'}
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-500">All-Time Low:</span>
          <span className="font-semibold text-gray-800">
            {coinInfo.atl ? `$${formatLargeNumber(coinInfo.atl)}` : '—'}
          </span>
        </li>
      </ul>
      <CurrencyConverter price={coinInfo.current_price} symbol={coinInfo.symbol} />
    </div>
  );
};

export default TokenInfo;
