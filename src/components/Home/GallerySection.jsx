export default function GallerySection() {
  const images = [
    'https://images.pexels.com/photos/4505163/pexels-photo-4505163.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/4503289/pexels-photo-4503289.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/4503285/pexels-photo-4503285.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-3xl group h-80">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
