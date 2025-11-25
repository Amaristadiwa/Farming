import React from "react";

export default function PartnerLogo() {
  const partners = [
    { name: "Partner 1", logo: "src/images/partner 1.png" },
    { name: "Partner 2", logo: "src/images/partner 2.png" },
    { name: "Partner 3", logo: "src/images/partner 3.png" },
    { name: "Partner 4", logo: "src/images/partner 4.png" },
    { name: "Partner 5", logo: "src/images/partner 5.png" },
    { name: "Partner 6", logo: "src/images/partner 6.png" },
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
