import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Hero from '../components/Service/Hero';
import ServicesGrid from '../components/Service/ServiceGrid';
import CategoryBar from '../components/Service/CategoryBar';
import Footer from '../components/Footer/Footer';

export default function Service() {
  return (
    <div className="min-h-screen bg-white">
    <Navbar />
      <Hero />
      <ServicesGrid />
      <CategoryBar />
      <Footer />
    </div>
  );
}
