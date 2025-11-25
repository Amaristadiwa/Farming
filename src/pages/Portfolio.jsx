import Hero from '../components/Portfolio/Hero';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid';
import InfoBar from '../components/Portfolio/InfoBar';
import IntroSection from '../components/Portfolio/IntroSection';
import Footer from '../components/Footer/Footer';
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import heroImage from "../assets/heroImage.jpg";
import Navbar from '../components/Navbar/Navbar';





const portfolioItems = [
  { id: 1, imageUrl: image1, alt: "Image 1" },
  { id: 2, imageUrl: image2, alt: "Image 2" },
  { id: 3, imageUrl: image3, alt: "Image 3" },
  { id: 4, imageUrl: image4, alt: "Image 4" },
  { id: 5, imageUrl: image5, alt: "Image 5" },
  { id: 6, imageUrl: image6, alt: "Image 6" },
  { id: 7, imageUrl: image7, alt: "Image 7" },
  { id: 8, imageUrl: image8, alt: "Image 8" },
];
                                           



export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
         <Navbar />
    <Hero
  title="Portfolio Grid Col 4"
  breadcrumbs={[
    { label: 'AGRIMO' },
    { label: 'PORTFOLIO GRID COL 4' }
  ]}
  backgroundImage={heroImage} 
/>


      <PortfolioGrid items={portfolioItems} />

      <InfoBar
        tags={['FARMERS', 'ORGANIC', 'FOODS', 'PRODUCT']}
        phone="+1(212) 255-511"
        email="nurelly@bnimalstech.com"
      />

      <IntroSection
        title="Professional & modern, a theme designed to help your business stand out from the rest."
        subtitle=""
      />

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
