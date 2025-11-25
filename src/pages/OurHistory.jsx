import React from 'react';
import Navbar from "../components/Navbar/Navbar"; 
import Hero from '../components/History/Hero';
import About from '../components/History/About';
import MarqueeSection from '../components/History/MarqueeSection';
import TimelineSection from '../components/History/TimelineSection';
import Footer from '../components/Footer/Footer';

export default function OurHistory() {
  return (
    <div className="min-h-screen bg-white">
     <Navbar />
      <Hero />
      <About />
      <MarqueeSection />
      <TimelineSection />
      <Footer />
    </div>
  );
}
