import React from "react";

export default function BannerSection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-green-800 font-bold text-2xl">A</span>
            </div>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 leading-tight">
            We're popular leader in
            <br />
            agriculture market globally
          </h2>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition">
            Discover More
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
