import { ArrowRight, CheckCircle2 } from 'lucide-react';
import happyFarmers from '../../assets/fac523f62a67634ba7d3d4a2906f19cf498f0573.jpg';


export default function AboutSection() {
  const features = [
    { id: 1, text: 'Garlic Farming', color: 'yellow' },
    { id: 2, text: 'Fertilizer Distribution', color: 'yellow' },
    { id: 3, text: 'Lavender Farming', color: 'yellow' },
    { id: 4, text: 'Poultry Farming', color: 'yellow' },
    { id: 5, text: 'Gourmet Mushrooms', color: 'yellow' },
    { id: 6, text: 'Organic Fertilizer', color: 'yellow' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
           <img
  src={happyFarmers}
  alt="Happy farmers"
  className="w-full h-full object-cover"
/>

          </div>

          <div>
            <div className="text-green-700 text-sm font-semibold mb-2">About Us</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We're Best Agriculture & Organic Farms
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don't look even.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <button className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition flex items-center gap-2">
              Know About
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}