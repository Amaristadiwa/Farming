import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Darrell Smith',
      role: 'Farmer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random words.',
      rating: 5,
    },
    {
      name: 'Marvin McKinney',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random words.',
      rating: 5,
    },
    {
      name: 'Devon Lane',
      role: 'Manager',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random words.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-green-800 text-4xl md:text-5xl font-bold">
            What our customers say
          </h2>

          <div className="hidden md:flex gap-2">
            <button className="w-12 h-12 border-2 border-green-800/20 hover:bg-yellow-400 hover:border-yellow-400 rounded-full flex items-center justify-center transition text-green-800">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 border-2 border-green-800/20 hover:bg-yellow-400 hover:border-yellow-400 rounded-full flex items-center justify-center transition text-green-800">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="text-yellow-400 text-6xl leading-none mb-4">"</div>

              <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>

              <div className="flex items-center gap-4 border-t pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-green-800 font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}