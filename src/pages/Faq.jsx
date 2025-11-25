import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/FQA/Hero";
import FAQSection from "../components/FQA/FQASection";
import Footer from "../components/Footer/Footer";

const generalQuestions = [
  {
    id: "1",
    question: "What is Agricultural Biotechnology?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: "2",
    question: "Can the products be applied during rainy season?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: "3",
    question: "What vegetables can I grow in my hothouse?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

const otherQuestions = [
  {
    id: "4",
    question: "What is modern agriculture?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: "5",
    question: "What are the 2 main types of farming?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: "6",
    question: "What are the different types of greenhouse?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

const contactQuestions = [
  {
    id: "7",
    question:
      "What are the ideal temperature and humidity conditions for strawberry farming?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: "8",
    question:
      "What are the common diseases and pests that affect strawberry plants?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: "9",
    question: "What are the government initiatives in the agriculture sector?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: "10",
    question: "How can we adapt agriculture to the impacts of climate change?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    id: "11",
    question:
      "What can be done to reduce greenhouse gas emissions from agriculture?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50">
       <Navbar />
      <Hero title="FAQ" breadcrumb={["Agrimo", "FAQ"]} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <FAQSection
            title="General Questions"
            subtitle="Most Asked"
            faqs={generalQuestions}
          />
          <FAQSection
            title="Other Questions"
            subtitle="People Also Ask"
            faqs={otherQuestions}
          />
        </div>

        <FAQSection
          title="Happy to Answer All Your Questions"
          subtitle="Contact Us Now"
          faqs={contactQuestions}
          variant="green"
        />
      </main>

      <Footer />
    </div>
  );
}
