import { ArrowUpRight } from 'lucide-react';

export default function ContactCard({ icon: Icon, title, details, iconBgColor = 'bg-yellow-400' }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className={`${iconBgColor} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
        <Icon className="w-7 h-7 text-gray-800" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600 text-sm">{detail}</p>
        ))}
      </div>
      <button className="mt-6 text-gray-800 hover:text-gray-600 transition-colors">
        <ArrowUpRight className="w-5 h-5" />
      </button>
    </div>
  );
}
