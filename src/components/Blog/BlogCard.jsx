import { Calendar, User, ArrowUpRight } from 'lucide-react';

export default function BlogCard({ image, category, title, date, author }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />

        <div className="absolute top-4 left-4">
          <span className="bg-white px-4 py-1 rounded-full text-xs font-semibold text-gray-700 uppercase">
            {category}
          </span>
        </div>

        <button className="absolute bottom-4 right-4 bg-yellow-400 hover:bg-yellow-500 p-3 rounded-full transition-colors duration-200">
          <ArrowUpRight size={20} className="text-gray-900" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{author}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 hover:text-green-700 transition-colors cursor-pointer">
          {title}
        </h3>
      </div>
    </div>
  );
}
