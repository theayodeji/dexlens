import React from "react";
import TokenInfo from "../components/TokenInfo";
import TradingViewChart from "../components/TradingViewChart";
import Trending from "../components/Trending";
import TokenTab from "../components/TokenTab";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchTokenById } from '../lib/api';

const TokenPage = () => {
  const { id } = useParams();
  const [coinInfo, setCoinInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    fetchTokenById(id)
      .then((data) => {
        setCoinInfo(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch info:", err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <LoadingSpinner />
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
