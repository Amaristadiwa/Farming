export default function Hero({ title, breadcrumbs, backgroundImage }) {
  return (
    <div
      className="relative h-64 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <span>&gt;</span>}
              <span className={index === breadcrumbs.length - 1 ? 'opacity-100' : 'opacity-80'}>
                {crumb.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
