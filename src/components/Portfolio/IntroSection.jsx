export default function IntroSection({ title, subtitle }) {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
