import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialCard = ({ rating, text, author, role, avatar }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <div className="text-4xl text-green-700 mb-3">"</div>
      <p className="text-gray-700 text-sm mb-6 leading-relaxed">{text}</p>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};
