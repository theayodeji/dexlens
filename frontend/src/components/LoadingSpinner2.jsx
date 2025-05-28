import React from 'react';

const LoadingSpinner2 = () => {
  return (
    <div className="w-full h-2/3 flex items-center justify-center">
      <div className="flex space-x-2">
        <div
          className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: '0.1s' }}
        ></div>
        <div
          className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: '0.2s' }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner2;
