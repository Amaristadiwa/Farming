import React from 'react';

export const TimelineItem = ({ year, title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="text-6xl font-bold text-gray-200 mb-4">{year}</div>
      <div className="w-12 h-1 bg-green-600 mb-4"></div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};
