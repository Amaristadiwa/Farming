import React from 'react';
import { Sprout, Truck, Calendar, Leaf, ArrowRight } from 'lucide-react';
import { Hero } from '../components/About/hero';
import { StatsCard } from '../components/About/StatsCard';
import { FeatureCard } from '../components/About/FeatureCard';
import { ServiceCard } from '../components/About/ServiceCard';
import { TimelineItem } from '../components/About/Timelineltem';
import { TestimonialCard } from '../components/About/Testimonialcard';
import { IconFeature } from '../components/About/IconFeature';
import { NavBar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <NavBar />

        <Hero
          title="About Us"
          subtitle="Home → About"
          backgroundImage="https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg?auto=compress&cs=tinysrgb&w=1200"
        />

        <div className="grid grid-cols-2 gap-12 my-16">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6231733/pexels-photo-6231733.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Farmer"
              className="rounded-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-8 left-8">
              <StatsCard number="435+" label="Organic Farm" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-sm text-green-700 font-semibold mb-2">WELCOME</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Currently we are growing and selling organic food
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Land is the most important foundation for the property, where all dreams become reality. Making your dreams come true is a challenging task for anyone.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <FeatureCard
                icon={Sprout}
                title="Eco Farms Worldwide"
                description="There are many variations of passages of available but the majority have suffered."
              />
              <FeatureCard
                icon={Truck}
                title="Special Equipment"
                description="There are many variations of passages of available but the majority have suffered."
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-green-50 py-12 rounded-2xl mb-16">
          <div className="flex items-center justify-center gap-8 overflow-hidden">
            {['Agriculture', 'Farming', 'Organic', 'Vegetables'].map((word) => (
              <React.Fragment key={word}>
                <Leaf className="w-8 h-8 text-green-600" />
                <span className="text-4xl font-bold text-gray-200">{word}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sprout className="w-5 h-5 text-green-700" />
            <div className="text-sm text-gray-600 font-medium">Who We Are</div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900">Best Agriculture Services</h2>
        </div>

        <div className="grid grid-cols-4 gap-12 mb-16 relative">
          <ServiceCard
            image="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Harvest Concepts"
            category="Fertilizer"
          />
          <ServiceCard
            image="https://images.pexels.com/photos/2910241/pexels-photo-2910241.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Farming Products"
            category="Fruits"
          />
          <ServiceCard
            image="https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Soil fertilization"
            category="Fertilizer"
          />
          <ServiceCard
            image="https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Fresh vegetables"
            category="Fruits"
          />
        </div>

        <div className="flex justify-center gap-2 mb-16">
          <button className="w-3 h-3 rounded-full bg-yellow-400"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        </div>

        <div className="bg-green-700 rounded-2xl p-12 grid grid-cols-2 gap-12 mb-16">
          <div>
            <div className="text-sm text-green-300 font-semibold mb-2">COMPANY BENEFITS</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Agriculture matters to the future of development
            </h2>
            <img
              src="https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Farmers"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <button className="mt-6 bg-yellow-400 text-gray-900 p-4 rounded-full hover:bg-yellow-300 transition-colors">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div>
            <p className="text-white mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form by injected humour or randomised.
            </p>

            <div className="space-y-4">
              <IconFeature
                icon={Calendar}
                number="01"
                title="Schedule Your Farmer"
                description="There are many variations of the passages of available but the majority."
              />
              <IconFeature
                icon={Sprout}
                number="02"
                title="Get Professional"
                description="Lorem ipsum dolor sit amet consectetur, but majority have suffered alteration."
              />
              <IconFeature
                icon={Leaf}
                number="03"
                title="Meet Our Expert"
                description="There are many variations of passages of available but the majority."
              />
              <IconFeature
                icon={Truck}
                number="04"
                title="Have Got a Visit"
                description="There are many variations of passages of available but the majority."
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-sm text-green-700 font-semibold mb-2">OUR HISTORY</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Farming have been since 1866</h2>

          <p className="text-gray-600 mb-12 max-w-2xl">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words.
          </p>

          <div className="grid grid-cols-4 gap-8">
            <TimelineItem
              year="1897"
              title="Open my Farm"
              description="There are many variations of passages of lorem Ipsum available."
            />
            <TimelineItem
              year="1995"
              title="Farm Remodellization"
              description="There are many variations of passages of lorem Ipsum available."
            />
            <TimelineItem
              year="2000"
              title="Grandparents Formed"
              description="There are many variations of passages of lorem Ipsum available."
            />
            <TimelineItem
              year="1940"
              title="Start of Agriculture"
              description="There are many variations of passages of lorem Ipsum available."
            />
          </div>
        </div>

        <div
          className="bg-green-800 rounded-2xl p-12 mb-16 bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1200)' }}
        >
          <div className="absolute inset-0 bg-green-900/80"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-400 rounded-full p-6">
                <Leaf className="w-12 h-12 text-gray-900" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  We're popular leader in agriculture market globally
                </h2>
              </div>
            </div>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              Discover More <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">What our customers say</h2>

          <div className="grid grid-cols-3 gap-8">
            <TestimonialCard
              rating={5}
              text="This seems to be exceptional. They are very expert in what they do. Thank you for your work. I will recommend it to all my essential friends."
              author="Daniel Craig"
              role="Customer"
              avatar="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
            />
            <TestimonialCard
              rating={5}
              text="This seems to be exceptional. They are very expert in what they do. Thank you for your work. I will recommend it to all my essential friends."
              author="Anarelo Amit"
              role="Customer"
              avatar="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
            />
            <TestimonialCard
              rating={5}
              text="This seems to be exceptional. They are very expert in what they do. Thank you for your work. I will recommend it to all my essential friends."
              author="Jenny Smith"
              role="Customer"
              avatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
            />
          </div>
        </div>

        <div className="bg-yellow-300 rounded-2xl py-8 px-12 mb-8">
          <div className="text-center">
            <p className="text-gray-700 italic text-lg">
              "Professional & modern, a theme designed to help your business stand out from the rest."
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
