import React from 'react';
import Hero from '../components/History/Hero';
import AboutSection from './components/History/About';
import MarqueeSection from './components/History/MarqueeSection';
import TimelineSection from './components/History/TimelineSection';
import Footer from './components/Footer/Footer';

export default function OurHistory() {
  return (
    <div className="min-h-screen bg-white">
     
      <Hero />
      <AboutSection />
      <MarqueeSection />
      <TimelineSection />
      <Footer />
    </div>
  );
}
