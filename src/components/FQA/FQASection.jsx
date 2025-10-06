import React from "react";
import FAQItem from "./FAQItem";

export default function FAQSection({ title, subtitle, faqs, variant = "white" }) {
  return (
    <div className="mb-16">
      <div className="mb-6">
        <p className="text-green-700 font-medium mb-2">{subtitle}</p>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>

      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.id}
            number={`0${index + 1}`}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={index === 0}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}
