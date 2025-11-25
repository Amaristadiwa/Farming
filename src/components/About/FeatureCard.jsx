const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6 text-green-700" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
