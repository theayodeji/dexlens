import { Clock, TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
import React from 'react';

const NewsItem = ({ item }) => {
  return (
    <div className="group relative bg-gray-50 hover:bg-blue-50 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10 border border-gray-200 hover:border-blue-300">
      <div className="absolute left-0 top-4 bottom-4 w-1 bg-blue-600 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          {item.trend === 'up' ? (
            <TrendingUp className="w-3 h-3 text-green-400" />
          ) : (
            <TrendingDown className="w-3 h-3 text-red-400" />
          )}
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
      </div>
      
      <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
        {item.title}
      </h3>
      
      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
        {item.summary}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{item.timestamp}</span>
          </div>
          <span>{item.readTime}</span>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default NewsItem;