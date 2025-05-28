import { Link } from 'react-router-dom';
import { formatLargeNumber } from '../lib/utils';

const TokenCard = ({ token }) => {
  return (
    <Link to={`/tokens/${token.id}`} className="block">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
        <div className="flex items-center gap-4 col-span-1">
          {token.image ? (
            <img src={token.image} alt={token.name || token.symbol} className="w-10 h-10" />
          ) : (
            <div className="w-10 h-10 bg-gray-200 rounded" />
          )}
          <div className="flex">
            <p className="font-semibold text-sm md:text-base w-max">
              {token.symbol ? token.symbol.toUpperCase() : 'N/A'}
            </p>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline">
              {token.market_cap_rank ? `#${token.market_cap_rank}` : '#-'}
            </span>
          </div>
        </div>
        <div className="text-center col-span-1">
          <p className="font-medium text-gray-800 text-end md:text-center">
            {typeof token.current_price === 'number'
              ? `$${formatLargeNumber(token.current_price)}`
              : 'N/A'}
          </p>
        </div>
        <div className="hidden md:block text-center col-span-1">
          <p
            className={`text-sm ${
              typeof token.price_change_percentage_24h === 'number'
                ? token.price_change_percentage_24h >= 0
                  ? 'text-green-500'
                  : 'text-red-500'
                : 'text-gray-400'
            }`}
          >
            {typeof token.price_change_percentage_24h === 'number'
              ? `${token.price_change_percentage_24h.toFixed(2)}%`
              : 'N/A'}
          </p>
        </div>
        <div className="hidden md:block text-right col-span-1">
          <p className="text-sm text-gray-500">
            {typeof token.market_cap === 'number'
              ? `$${formatLargeNumber(token.market_cap)}`
              : 'N/A'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TokenCard;
