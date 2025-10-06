import React from 'react';

export const StatsCard = ({ number, label, bgColor = 'bg-yellow-300' }) => {
  return (
    <div className={`${bgColor} rounded-xl p-6 inline-block`}>
      <div className="text-5xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-sm text-gray-700">{label}</div>
    </div>
  );
};
