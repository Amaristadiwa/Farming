import React from "react";

import Navbar from "../components/Navbar/Navbar"; 
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import AboutSection from "../components/Home/AboutSection";
import ScrollingText from "../components/Home/ScrollingTextSection";
import ServicesSection from "../components/Home/ServicesSection";
import ProductsSection from "../components/Home/ProductsSection";
import GallerySection from "../components/Home/GallerySection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import PartnersSection from "../components/Home/PartnersSection";
import CtaSection from "../components/Home/CtaSection";
import BannerSection from "../components/Home/BannerSection";
import BlogSection from "../components/Home/BlogSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ScrollingText />
      <ServicesSection />
      <ProductsSection />
      <GallerySection />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
      <BannerSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

