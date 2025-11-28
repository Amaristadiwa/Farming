import React from "react";
import partner1 from "../../assets/partner_1.png";
import partner2 from "../../assets/partner_2.png";
import partner3 from "../../assets/partner_3.png";
import partner4 from "../../assets/partner_4.png";
import partner5 from "../../assets/partner_5.png";
import partner6 from "../../assets/partner_6.png";

export default function PartnerLogo() {
  const partners = [
    { name: "Partner 1", logo: partner1 },
    { name: "Partner 2", logo: partner2 },
    { name: "Partner 3", logo: partner3 },
    { name: "Partner 4", logo: partner4 },
    { name: "Partner 5", logo: partner5 },
    { name: "Partner 6", logo: partner6 },
  ];

  // duplicate array so it scrolls seamlessly
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="relative w-full">
        <div className="flex animate-scroll">
          {scrollingPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] px-6 grayscale hover:grayscale-0 transition opacity-60 hover:opacity-100"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

