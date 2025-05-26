import { useEffect, useRef } from 'react';

function TradingViewChart({ symbol }) {
  const chartContainerRef = useRef();

  useEffect(() => {
    if (!window.TradingView) return;

    new window.TradingView.widget({
      autosize: true,
      symbol, // e.g. "BINANCE:ETHUSDT"
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      container_id: chartContainerRef.current.id,
    });
  }, [symbol]);

  return <div id="tradingview_chart" ref={chartContainerRef} className='flex-[2] min-h-[50vh] lg:h-[500px] pt-4'/>;
}

export default TradingViewChart;
