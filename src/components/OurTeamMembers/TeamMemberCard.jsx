import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TeamMemberCard({ member }) {
  return (
    <Link
      to={`/team/${member.id}`}
      className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <button className="absolute bottom-6 right-6 bg-yellow-400 rounded-full p-3 group-hover:bg-green-800 transition-colors duration-300">
        <ArrowRight className="w-5 h-5 text-green-800 group-hover:text-white transition-colors" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
        <p className="text-yellow-400 text-sm font-semibold mb-1">{member.role}</p>
        <h3 className="text-white text-xl font-bold">{member.name}</h3>
      </div>
    </Link>
  );
}
