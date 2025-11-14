import React from "react";
import TokenInfo from "../components/TokenInfo";
import TradingViewChart from "../components/TradingViewChart";
import Trending from "../components/Trending";
import TokenTab from "../components/TokenTab";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import useTokenQuery from "../hooks/useTokenQuery";

const TokenPage = () => {
  const { id } = useParams();

  const {
    token,
    isLoadingToken,
    tokenError,
  } = useTokenQuery(id);


  if (isLoadingToken) {
    return (
      <LoadingSpinner />
    );
  }

  if (tokenError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
        <div className="text-red-500 text-xl font-semibold">Failed to load token information.</div>
        <div className="text-red-500 text-md font-semibold">{tokenError}</div>
        <a
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go Home
        </a>
      </div>
    );
  }

  return (
    <div className="p-4 ">
      <TokenTab coinInfo={token} />
      <div className="flex flex-col md:flex-row gap-6">
        <TokenInfo coinInfo={token} />
        <TradingViewChart symbol={`${token.symbol.toUpperCase()}USDT`} />
        <Trending coinInfo={token} />
      </div>
    </div>
  );
};

export default TokenPage;
