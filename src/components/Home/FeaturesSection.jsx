import { Users, Leaf, ShoppingBag, Award } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: 'Professional Farmers',
      description: 'There are many variations of passages of available but the majority have suffered.',
    },
    {
      icon: Leaf,
      title: 'Fresh Vegetables',
      description: 'There are many variations of passages of available but the majority have suffered.',
    },
    {
      icon: ShoppingBag,
      title: 'Agriculture Products',
      description: 'There are many variations of passages of available but the majority have suffered.',
    },
    {
      icon: Award,
      title: '100% Guaranteed',
      description: 'There are many variations of passages of available but the majority have suffered.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-green-800" />
              </div>
              <h3 className="text-green-800 font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}