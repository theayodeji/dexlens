import React from 'react';

const TrendingItem = ({ number, ticker, price, percentageChange, image }) => (
  <li className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0">
    <div className="flex items-center gap-2">
      <span className="text-gray-500 font-semibold">{number}.</span>
      <img
        src={image}
        alt={ticker}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div>
        <p className="font-bold text-gray-800">{ticker}</p>
        <p className="text-xs text-gray-500">${price}</p>
      </div>
    </div>
    <span className={`font-semibold ${percentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {percentageChange >= 0 ? '+' : ''}{percentageChange}%
    </span>
  </li>
);

export default TrendingItem;
