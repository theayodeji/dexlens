// client/components/TokenList.jsx
import TokenCard from './TokenCard';

const TokenList = ({ tokens }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center p-4 bg-gray-100 rounded-lg font-semibold">
        <div className="col-span-1">Name</div>
        <div className="col-span-1 text-end md:text-center">Price</div>
        <div className="hidden md:block col-span-1 text-center">24h Change</div>
        <div className="hidden md:block col-span-1 text-right">Market Cap</div>
      </div>
      <ul className="space-y-4">
        {tokens.map((token) => (
          <li key={token.id}>
            <TokenCard token={token} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenList;
