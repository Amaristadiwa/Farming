import React from 'react';

export default function ContactForm() {
  return (
    <div className="w-full min-h-screen bg-[#FAF9F2] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden w-full max-w-6xl">
        {/* Left Image */}
        <div className="h-full w-full">
          <img
            src="../src/assets/746e64b0bc71c612550c5832005fe523d01fe6a2.jpg"
            alt="Farmer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="p-10 flex flex-col justify-center">
          <button className="text-sm text-gray-600 border border-gray-300 rounded-full px-4 py-1 w-fit mb-4">
            Get In Contact Us
          </button>

          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
            Have any Questions? <br /> Get in Touch!
          </h1>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none"
              />
            </div>

            <textarea
              placeholder="Message"
              rows="4"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none"
            ></textarea>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit">
              Send Message
              <span className="text-xl">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}




