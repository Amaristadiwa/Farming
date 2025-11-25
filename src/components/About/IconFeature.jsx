import React from 'react';
import { Video as LucideIcon } from 'lucide-react';

const IconFeature = ({ icon: Icon, number, title, description }) => {
  return (
    <div className="flex gap-4 items-start bg-white rounded-lg p-4">
      <div className="flex-shrink-0 bg-green-100 rounded-lg p-3">
        <Icon className="w-6 h-6 text-green-700" />
      </div>
      <div className="flex-1">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-3xl font-bold text-gray-900">{number}</span>
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default IconFeature;

