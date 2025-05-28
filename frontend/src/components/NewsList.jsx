import React from 'react';
import NewsItem from './NewsItem';

export const NewsList = ({ items }) => {
  return (
    <div className="space-y-4 flex flex-col">
      {items.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsList;