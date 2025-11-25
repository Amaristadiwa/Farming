import React from 'react';
import { useState } from "react";
import { Sprout, Truck, Calendar, Leaf, ArrowRight } from 'lucide-react';
import Hero from '../components/About/hero';
import StatsCard from '../components/About/StatsCard';
import FeatureCard from '../components/About/FeatureCard';
import ServiceCard from '../components/About/ServiceCard';
import TimelineItem from '../components/About/Timelineltem';
import TestimonialCard from '../components/About/TestimonialCard';
import IconFeature from '../components/About/IconFeature';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import serv1 from '../assets/serv 1.jpg';
import serv2 from '../assets/serv 2.jpg';
import serv3 from '../assets/serv 3.jpg';
import serv4 from '../assets/serv 4.jpg';
import serv5 from '../assets/serv 5.jpg';
import serv6 from '../assets/serv 6.jpg';
import serv7 from '../assets/serv 7.jpg';
import serv8 from '../assets/serv 8.jpg';
import serv9 from '../assets/serv 9.jpg';
import serv10 from '../assets/serv 10.jpg';
import serv11 from '../assets/serv 11.jpg';
import serv12 from '../assets/serv 12.jpg';

function About() {
  const words = ["Agriculture", "Farming", "Organic", "Vegetables", "Fresh Food"];

  const [activeSlide, setActiveSlide] = useState(0);

  const servicesData = [
    [
      { image: serv1, title: "Harvest Concepts", category: "Fertilizer" },
      { image: serv2, title: "Farming Products", category: "Fruits" },
      { image: serv3, title: "Soil fertilization", category: "Fertilizer" },
      { image: serv4, title: "Fresh vegetables", category: "Fruits" },
    ],
    [
      { image: serv5, title: "Organic Seeds", category: "Seeds" },
      { image: serv6, title: "Irrigation Setup", category: "Water" },
      { image: serv7, title: "Farm Tools", category: "Equipment" },
      { image: serv8, title: "Livestock Feed", category: "Animal Care" },
    ],
    [
      { image: serv9, title: "Greenhouses", category: "Farming" },
      { image: serv10, title: "Agri Consultancy", category: "Services" },
      { image: serv11, title: "Compost Solutions", category: "Fertilizer" },
      { image: serv12, title: "Farm Machinery", category: "Equipment" },
    ],
  ];



  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <NavBar />

        <Hero
          title="About Us"
          subtitle="Home → About"
          backgroundImage="../src/images/56d2d3996939328860a9427715a3d02d7fdc38f5.jpg"
        />
        <div className="grid grid-cols-2 gap-12 my-16">
          <div className="relative">
            <img
              src="../src/images/bbf039044044b2e7b8fbee60796133ec7b3a4031.jpg"
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

    
        <section className="py-12 bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl mb-16 overflow-hidden border border-green-100">
          <div className="flex items-center animate-scroll whitespace-nowrap">
            {[...Array(3)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center">
                {words.map((word, index) => (
                  <div key={`${groupIndex}-${index}`} className="flex items-center">
                    <Leaf className="w-10 h-10 text-green-700" />
                    <span
                      className="text-6xl md:text-7xl font-bold text-transparent px-8"
                      style={{
                        WebkitTextStroke: "1px #9ca3af",
                        fontWeight: 700,
                      }}
                    >
                      {word}
                    </span>
                    <span className="text-green-700 text-4xl px-4">✱</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
          `}</style>
        </section>

      <section>
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sprout className="w-5 h-5 text-green-700" />
          <div className="text-sm text-gray-600 font-medium">Who We Are</div>
        </div>
        <h2 className="text-5xl font-bold text-gray-900">Best Agriculture Services</h2>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-4 gap-12 mb-16 relative">
        {servicesData[activeSlide].map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            category={service.category}
          />
        ))}
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center gap-2 mb-16">
        {servicesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeSlide === index ? "bg-yellow-400" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>

{/* Company Benefits */}
<div
  className="relative rounded-2xl p-12 grid grid-cols-2 gap-12 mb-16 bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage:
      "url('../src/images/6ac5b4dbd5aad3b155da75cbafefdeb1083363eb.png')",
  }}
>
  {/* Soft green overlay */}
  <div className="absolute inset-0 bg-green-800/70 mix-blend-multiply rounded-2xl"></div>

  {/* Content */}
  <div className="relative z-10">
    <div className="text-sm text-green-200 font-semibold mb-2">
      COMPANY BENEFITS
    </div>
    <h2 className="text-4xl font-bold text-white mb-6">
      Agriculture matters to the future of development
    </h2>
    <img
      src="../src/images/1da4a8461f43255e5cd02a6b142104ebba1a681f.jpg"
      alt="Farmers"
      className="rounded-2xl w-full h-64 object-cover"
    />
    <button className="mt-6 bg-yellow-400 text-gray-900 p-4 rounded-full hover:bg-yellow-300 transition-colors">
      <ArrowRight className="w-6 h-6" />
    </button>
  </div>

  <div className="relative z-10">
    <p className="text-white/90 mb-8 leading-relaxed">
      There are many variations of passages of Lorem Ipsum available, but
      majority have suffered alteration in some form by injected humour or
      randomised.
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


        {/* Our History */}
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

        {/* Call to Action */}
        <div
          className="bg-green-800 rounded-2xl p-12 mb-16 bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage:
              'url(../src/images/6ac5b4dbd5aad3b155da75cbafefdeb1083363eb.png)',
          }}
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

        {/* Testimonials */}
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

        {/* Footer CTA */}
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
}

export default About;


