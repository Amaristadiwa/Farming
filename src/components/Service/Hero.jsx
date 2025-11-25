import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[400px] bg-gradient-to-r from-green-900 to-green-700">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920')"
        }}
      />

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-md">
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Services"
              className="w-full px-6 py-4 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          
          </div>

          <h1 className="text-5xl font-bold text-white mb-4">Services</h1>
          <div className="flex items-center space-x-2 text-white/80 text-sm">
            <a href="#" className="hover:text-yellow-400 transition">AGRIMO</a>
            <span>›</span>
            <span>SERVICES</span>
          </div>
        </div>
      </div>
    </section>
  );
}