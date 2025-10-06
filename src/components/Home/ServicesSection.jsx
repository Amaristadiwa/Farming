import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'General Concepts',
      description: 'There are many variations of passages of lorem ipsum available.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Farming Products',
      description: 'There are many variations of passages of lorem ipsum available.',
      image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Soil Fertilization',
      description: 'There are many variations of passages of lorem ipsum available.',
      image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section className="py-20 bg-green-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-yellow-400"></div>
              <span className="text-yellow-400 font-semibold">What We're Offering</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              Best Agriculture Services
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button className="w-12 h-12 border-2 border-white/30 hover:bg-yellow-400 hover:border-yellow-400 rounded-full flex items-center justify-center transition text-white">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 border-2 border-white/30 hover:bg-yellow-400 hover:border-yellow-400 rounded-full flex items-center justify-center transition text-white">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden group hover:shadow-2xl transition">
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-green-800 text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <button className="w-12 h-12 bg-yellow-400 hover:bg-green-800 rounded-full flex items-center justify-center transition group">
                  <svg className="w-6 h-6 text-green-800 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}