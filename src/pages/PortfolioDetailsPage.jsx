import { ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar"; 
import Hero from '../components/Portfolio/Hero';
import Footer from '../components/Footer/Footer';
import heroImage from "../assets/heroImage.jpg"; 
import image1 from "../assets/image1.jpg";      
import image2 from "../assets/image2.jpg";       
import image3 from "../assets/image3.jpg"; 
import image4 from "../assets/image4.jpg"; 

import image5 from "../assets/image5.jpg"; 
import image6 from "../assets/image6.jpg"; 



export default function PortfolioDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const portfolioDetails = {
  1: {
    title: 'Agriculture Farming',
    mainImage: heroImage,  // ✅ local main image
    client: 'Michael Daniel',
    team: 'Roselyn Lome, Richard Edward',
    category: 'Harvest',
    description: 'Better Agriculture for Better Future',
    details: 'They offer adaptability, high nutritional value, and can yield higher yields with minimal agronomical inputs, continued up to historically necessary levels in merchandise, and can therefore, significant potential for sustainable agriculture and provide nutritional and income security for small and marginal farmers in dry and rainfed semi-arid regions.',
    images: [
      image1,  // ✅ local images
      image2
    ],
    benefits: [
      'Instantly connects with an Agronomist to remediate',
      'Keep Yourself Current and on top of Latest Farming Trends',
      'Make the earth cleaner, make the earth greener.'
    ]
  },

  2: {
    title: 'Tomato Farming',
    mainImage: image3,  // ✅ local main image
    client: 'Sarah Mitchell',
    team: 'James Brown, Lisa Wong',
    category: 'Organic',
    description: 'Premium Tomato Cultivation',
    details: 'Advanced farming techniques for optimal tomato growth and yield. Our approach combines traditional farming wisdom with modern technology to produce the highest quality tomatoes.',
    images: [
      image4,  // ✅ local images
      image3
    ],
    benefits: [
      'Industry-leading cultivation techniques',
      'Certified organic farming practices',
      'Sustainable water management systems'
    ]
  },

  3: {
    title: 'Cherry Tomato Production',
    mainImage: image5,  // ✅ local main image
    client: 'Tom Harris',
    team: 'Emma Davis, Mark Johnson',
    category: 'Organic',
    description: 'Specialty Cherry Tomato Growing',
    details: 'Specialized growing methods for premium cherry tomatoes. We focus on quality over quantity, ensuring every tomato meets our high standards.',
    images: [
      image5,  // ✅ local images
      image6
    ],
    benefits: [
      'Premium quality assurance',
      'Direct-to-consumer distribution network',
      'Fair trade certification'
    ]
  }
  };

  const details = portfolioDetails[parseInt(id || '1')] || portfolioDetails[1];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero
        title={details.title}
        breadcrumbs={[
          { label: 'AGRIMO' },
          { label: 'PORTFOLIO' },
          { label: details.title.toUpperCase() }
        ]}
        backgroundImage={details.mainImage}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <img
                src={details.mainImage}
                alt={details.title}
                className="w-full h-96 object-cover rounded-2xl mb-8"
              />
              <h2 className="text-4xl font-bold mb-6">{details.description}</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {details.details}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Everything on our farm is grown</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                They offer adaptability, high nutritional value, and can yield higher yields with minimal agronomical inputs, continued up to historically necessary levels in merchandise, and can therefore, significant potential for sustainable agriculture and provide nutritional and income security.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {details.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Our Key Benefits</h3>
              <div className="space-y-4">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {['01', '02', '03'].map((num, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-light text-gray-300 mb-4">{num}</div>
                  <h4 className="text-lg font-bold mb-3">
                    {index === 0 && 'Schedule Your Experience'}
                    {index === 1 && 'Get Professional Advice'}
                    {index === 2 && 'Meet Our Expert People'}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Consult an expert to discuss your farming requirements and get tailored solutions for your specific needs.
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-12">
              <p className="text-center text-lg font-medium text-gray-700 mb-4">
                "When you listen to yourself, everything come naturally. It come from in, like a kind of will to do something. Try to be sensitive. That is just a few clicks away"
              </p>
              <p className="text-center text-sm font-bold text-gray-600">- KATHERINE CHRIST</p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-b">
              <div>
                <p className="text-sm text-gray-600 mb-2">Related Tags</p>
                <p className="text-xl font-bold">Ecological Farming</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-2">Also See</p>
                <p className="text-xl font-bold">Fresh And Natural</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-2xl sticky top-20">
              <div className="mb-8">
                <p className="text-xs text-gray-600 mb-1">CLIENT</p>
                <p className="text-lg font-bold">{details.client}</p>
              </div>

              <div className="mb-8">
                <p className="text-xs text-gray-600 mb-2">TEAM</p>
                {details.team.split(', ').map((member, index) => (
                  <p key={index} className="text-sm text-gray-700">{member}</p>
                ))}
              </div>

              <div>
                <p className="text-xs text-gray-600 mb-1">CATEGORY</p>
                <p className="text-lg font-bold">{details.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer
        description="Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus. In vitae sapien viverra est Duo ei ullum mani senseri."
        usefulLinks={[
          { label: 'Company', href: '#' },
          { label: 'About', href: '#' },
          { label: 'Contact', href: '#' }
        ]}
        workingHours={[
          { day: 'Mon - Fri', hours: '9.00am - 5.00pm' },
          { day: 'Saturday', hours: '10.00am - 6.00pm' },
          { day: 'Sunday', hours: 'Closed' }
        ]}
        address="Old Westbury 256, New York 11201, United States"
        copyright="Copyright © 2024 Agrimo. All Rights Reserved"
      />
    </div>
  );
}
