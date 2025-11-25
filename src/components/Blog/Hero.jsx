export default function Hero() {
  return (
    <div className="relative h-80 bg-gradient-to-r from-green-900 to-green-800">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Blog Sortable Col 3
        </h1>
        <div className="flex items-center space-x-2 text-white text-sm">
          <a href="#" className="hover:text-yellow-400">AGRIMO</a>
          <span>/</span>
          <span className="text-yellow-400">BLOG SORTABLE COL 3</span>
        </div>
      </div>
    </div>
  );
}
