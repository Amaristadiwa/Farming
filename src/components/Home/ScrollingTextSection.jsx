export default function ScrollingText() {
  const words = ['Agriculture', 'Farming', 'Organic', 'Vegetables', 'Fresh Food'];

  return (
    <section className="py-8 bg-white border-y border-gray-200 overflow-hidden">
      <div className="flex items-center animate-scroll whitespace-nowrap">
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center">
            {words.map((word, index) => (
              <div key={`${groupIndex}-${index}`} className="flex items-center">
                <span className="text-6xl md:text-7xl font-bold text-transparent px-8" style={{
                  WebkitTextStroke: '1px #e5e7eb',
                  fontWeight: 700,
                }}>
                  {word}
                </span>
                <span className="text-green-700 text-4xl px-4">✱</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}