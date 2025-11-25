import { Phone, Mail } from 'lucide-react';

export default function InfoBar({ tags, phone, email }) {
  return (
    <div className="bg-[#d4d968] py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-6 text-sm font-medium uppercase tracking-wider">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-2">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-sm">{phone}</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-2">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-sm">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
