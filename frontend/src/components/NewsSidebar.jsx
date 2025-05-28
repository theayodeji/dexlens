import NewsHeader from "./NewsHeader";
import NewsList from "./NewsList";
import SubscriptionCTA from "./SubscriptionCTA";

const NewsSidebar = () => {
  const newsItems = [
    {
      id: 1,
      title: "Bitcoin Reaches New All-Time High as Institutional Adoption Surges",
      summary: "Major corporations continue to add BTC to their treasury reserves, driving unprecedented demand.",
      timestamp: "2 hours ago",
      trend: "up",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Ethereum Layer 2 Solutions See Record Transaction Volume",
      summary: "Arbitrum and Optimism process over 5M transactions daily as gas fees remain low.",
      timestamp: "4 hours ago",
      trend: "up",
      readTime: "2 min read"
    },
  ];

  return (
    <div className="md:w-80 bg-white text-gray-900 p-6 h-screen overflow-y-auto rounded-md shadow-md w-full mt-[80vh] md:mt-0 md:sticky top-5">
      <NewsHeader />
      <NewsList items={newsItems} />
      <SubscriptionCTA />
    </div>
  );
};

export default NewsSidebar;