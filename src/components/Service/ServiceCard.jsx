import { ArrowUpRight } from 'lucide-react';
import maskShape from '../assets/Mask Group.png';

export default function ServiceCard({ image, category, title, description }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div
          className="absolute inset-0"
          style={{
            maskImage: `url(${maskShape})`,
            maskSize: 'cover',
            maskPosition: 'center',
            WebkitMaskImage: `url(${maskShape})`,
            WebkitMaskSize: 'cover',
            WebkitMaskPosition: 'center',
          }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="p-6">
        <div className="text-yellow-600 text-xs font-semibold uppercase tracking-wider mb-2">
          {category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-6">{description}</p>

        <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 group">
          <ArrowUpRight className="w-5 h-5 text-green-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
