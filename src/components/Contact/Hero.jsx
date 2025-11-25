export default function Hero({ title, breadcrumb, backgroundImage }) {
  return (
    <div
      className="relative h-64 bg-cover bg-center rounded-3xl mx-8 mt-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
      <div className="relative h-full flex flex-col justify-center px-12">
        <h1 className="text-white text-5xl font-bold mb-2">{title}</h1>
        <p className="text-white/90 text-sm uppercase tracking-wide">{breadcrumb}</p>
      </div>
    </div>
  );
}
