import React from 'react';

const timelineData = [
  {
    year: '1987',
    title: 'Open my Farm',
    description:
      'Conuptat consequatur magnt minuul lasto oos consectetur simillique minus culpa odio temporibus.',
  },
  {
    year: '1995',
    title: 'Farm Remodelacion',
    description:
      'Majority have suffered alteration in some form by injected humor culpa odio temporibus.',
  },
  {
    year: '2000',
    title: 'Grainfarmers Formed',
    description:
      'Always parties but trying ale shewing of moment minus Velit natione hic corporis ventafis odit.',
  },
  {
    year: '1910',
    title: 'Start of Agriculture',
    description:
      'Consequatur magnt Conuptat minuul lasto oos consectetur simillique minus culpa odio temporibus.',
  },
];

export default function TimelineSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-green-700 text-sm font-semibold mb-2">Our History</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Farming have been since 1866
            </h2>
            <p className="text-gray-600 max-w-md">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don't look even.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative">
              <div className="text-7xl font-bold text-gray-200 mb-4 tracking-tight">
                {item.year}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
