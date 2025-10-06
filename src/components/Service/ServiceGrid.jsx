import ServiceCard from './ServiceCard';

const services = [
  {
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AGRICULTURE',
    title: 'Harvest Concepts',
    description: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    image: 'https://images.pexels.com/photos/6146977/pexels-photo-6146977.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AGRICULTURE',
    title: 'Farming Products',
    description: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AGRICULTURE',
    title: 'Soil Fertilization',
    description: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'FRESH',
    title: 'Fresh Vegetables',
    description: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AGRICULTURE',
    title: 'Dairy Production',
    description: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'VEGETABLE',
    title: 'Product Supplies',
    description: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    image: 'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'FRUITS',
    title: 'Natural Carrots',
    description: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    image: 'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'VEGETABLE',
    title: 'Nutrition Solutions',
    description: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    image: 'https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'FRUITS • VEGETABLE',
    title: 'Organic Vegetables',
    description: 'Farming and animal husbandry and discuss with farmers and scientists.'
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}