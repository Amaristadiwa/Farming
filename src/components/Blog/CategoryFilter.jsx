export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full transition-all duration-200 ${
            activeCategory === category
              ? 'bg-green-800 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
