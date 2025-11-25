import Navbar from "../components/Navbar/Navbar"; 
import Hero from '../components/Contact/Hero';
import ContactCard from '../components/Contact/ContactCard';
import ContactForms from '../components/Contact/ContactForms';
import PartnerLogo from '../components/Contact/PartnerLogo';
import Map from '../components/Contact/Map';
import Footer from '../components/Footer/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
       <Navbar />
      <Hero
        title="Contact Us"
        breadcrumb="AGERBIO > CONTACT US"
        backgroundImage="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactCard
            icon={Mail}
            title="Mail us 24/7"
            details={[
              'pbmail@agden.com',
              'pbexadmin@gifts.com'
            ]}
          />
          <ContactCard
            icon={Phone}
            title="Call us 24/7"
            details={[
              'Phone: (+55) 654 - 545 - 5418',
              'Mobile: (+01) 654 - 545 - 1235'
            ]}
          />
          <ContactCard
            icon={MapPin}
            title="Our Locations"
            details={[
              '4821 Ride Top, Ancil St, Alaska',
              '997998, USA main city'
            ]}
          />
        </div>

        <div className=" gap-12 mb-16">
        <div className="h-full">

         
          </div>
          <ContactForms />
        </div>
      </div>

      <PartnerLogo />

      <div className="">
        <Map />
      </div>

      <Footer />
    </div>
  );
}
