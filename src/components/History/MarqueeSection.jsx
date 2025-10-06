import React from 'react';

export default function MarqueeSection() {
  const items = ['Agriculture', 'Farming', 'Organic', 'Vegetables'];

  return (
    <section className="bg-green-800 py-8 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="inline-flex items-center mx-8">
            <span className="text-yellow-400 text-4xl mr-4">*</span>
            <span className="text-5xl font-bold text-green-700 stroke-text">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
