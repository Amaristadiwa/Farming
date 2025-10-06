import { Sprout, Carrot, Wheat, Leaf } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      icon: Sprout,
      title: 'Agriculture Products',
      description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
    },
    {
      icon: Wheat,
      title: 'Quality Products',
      description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
    },
    {
      icon: Carrot,
      title: 'Fresh Vegetables',
      description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
    },
    {
      icon: Leaf,
      title: 'Pure & Organic',
      description: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Leaf className="w-5 h-5 text-green-700" />
            <span className="text-green-700 font-medium text-sm">Grow Naturally</span>
          </div>
          <h2 className="text-gray-800 text-4xl md:text-5xl font-bold mb-16">
            Choose What's Perfect<br />
            For Your Field
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          <div className="lg:w-1/3 space-y-12">
            {products.slice(0, 2).map((product, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <product.icon className="w-8 h-8 text-green-800" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-gray-800 text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3 flex items-center justify-center">
            <img
              src="src/images/maize.png"
              alt="Fresh Corn"
              className="w-full max-w-md h-auto"
            />
          </div>

          <div className="lg:w-1/3 space-y-12">
            {products.slice(2, 4).map((product, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <product.icon className="w-8 h-8 text-green-800" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-gray-800 text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
