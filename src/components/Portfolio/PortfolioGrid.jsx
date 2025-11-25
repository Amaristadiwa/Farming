import { useNavigate } from 'react-router-dom';

export default function PortfolioGrid({ items }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
          >
            <img
              src={item.imageUrl}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
