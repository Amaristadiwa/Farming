import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ServiceCard = ({ image, title, category }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="absolute -top-4 -right-4 bg-yellow-300 rounded-full p-4 z-10 shadow-md">
          <ArrowUpRight className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
        </div>
        <div className="w-72 h-72 rounded-full overflow-hidden border-[10px] border-green-700 shadow-xl">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
        <div className="w-2 h-2 bg-green-700 rounded-full"></div>
        <span className="uppercase tracking-wider font-medium">{category}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
  );
};
