import React from "react";
import TokenInfo from "../components/TokenInfo";
import TradingViewChart from "../components/TradingViewChart";
import Trending from "../components/Trending";
import TokenTab from "../components/TokenTab";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const TokenPage = () => {
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/api/tokens/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoinInfo(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch info:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-4xl p-4">
      <span className="animate-spin text-blue-500">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
        </svg>
      </span>
      Loading...
      </div>
    );
  }

  if (!coinInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
        <div className="text-red-500 text-xl font-semibold">Failed to load token information.</div>
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
      <TokenTab coinInfo={coinInfo} />
      <div className="flex flex-col md:flex-row gap-6">
        <TokenInfo coinInfo={coinInfo} />
        <TradingViewChart symbol={`${coinInfo.symbol.toUpperCase()}USDT`} />
        <Trending coinInfo={coinInfo} />
      </div>
    </div>
  );
};

export default TokenPage;
