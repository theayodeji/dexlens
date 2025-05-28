import React from 'react'
const SubscriptionCTA = () => {
  return (
    <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
      <h3 className="text-sm font-semibold text-gray-900 mb-2">Stay Updated</h3>
      <p className="text-xs text-gray-600 mb-3">Get real-time crypto market alerts and breaking news.</p>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200">
        Subscribe to Alerts
      </button>
    </div>
  );
};

export default SubscriptionCTA;