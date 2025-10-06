export default function CategoryBar() {
  const categories = ['FARMERS', 'ORGANIC', 'FOODS', 'PRODUCT'];

  return (
    <div className="bg-yellow-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-start gap-8">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="text-green-900 font-semibold text-sm hover:text-green-700 transition"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}