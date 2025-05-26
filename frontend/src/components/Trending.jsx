import React from 'react';
import TrendingItem from './TrendingItem';
import { IoMdArrowDropright } from 'react-icons/io';

const Trending = () => {
  const trendingTokens = [
    { number: 1, ticker: 'BTC', price: '107,500', percentageChange: 2.7, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png' },
    { number: 2, ticker: 'ETH', price: '2,200', percentageChange: -0.8, image: 'https://www.citypng.com/public/uploads/preview/ethereum-eth-round-logo-icon-png-701751694969815akblwl2552.png' },
    { number: 3, ticker: 'BNB', price: '320', percentageChange: 0.5, image: 'https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png' },
    { number: 4, ticker: 'SOL', price: '95', percentageChange: 2.1 , image: 'https://images.seeklogo.com/logo-png/42/2/solana-sol-logo-png_seeklogo-423095.png'},
  ];

  return (
    <div className="border-l border-gray-300 p-4 pt-8 flex-[0.7] min-w-[220px] hidden lg:block">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Trending</h2>
        <a
          href="/all-tokens"
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          <IoMdArrowDropright className='inline'/>
          See All
        </a>
      </div>
      <ul className="space-y-2">
        {trendingTokens.map((token) => (
          <TrendingItem key={token.number} {...token} />
        ))}
      </ul>
    </div>
  );
};

export default Trending;
