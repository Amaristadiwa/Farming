export default function Hero() {
  return (
    <section className="relative h-80 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-green-900/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our History</h1>
        <div className="flex items-center gap-2 text-white text-sm">
          <span>AGRIMO</span>
          <span>/</span>
          <span className="text-gray-300">OUR HISTORY</span>
        </div>
      </div>
    </section>
  );
}