import React, { useState } from "react";
import { Search, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../src/images/logo.png";

export default function Navbar() {
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-green-900/95 via-green-800/80 to-green-700/70 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Grimo Logo" className="w-16 h-16 object-contain" />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 relative">
          <Link
            to="/"
            className="text-white hover:text-yellow-400 transition px-4 py-2 font-medium text-sm uppercase"
          >
            Home
          </Link>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button className="text-white hover:text-yellow-400 transition px-4 py-2 font-medium text-sm uppercase flex items-center gap-1">
              Pages
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            </button>

            {pagesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50">
                <Link
                  to="/team-members"
                  className="block px-4 py-2 text-green-900 hover:bg-green-100 rounded-lg"
                >
                  Our Team Members
                </Link>
                <Link
                  to="/history"
                  className="block px-4 py-2 text-green-900 hover:bg-green-100 rounded-lg"
                >
                  Our History
                </Link>
                <Link
                  to="/faq"
                  className="block px-4 py-2 text-green-900 hover:bg-green-100 rounded-lg"
                >
                  FAQ
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-green-900 hover:bg-green-100 rounded-lg"
                >
                  About
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/services"
            className="text-white hover:text-yellow-400 transition px-4 py-2 font-medium text-sm uppercase"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="text-white hover:text-yellow-400 transition px-4 py-2 font-medium text-sm uppercase"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="text-white hover:text-yellow-400 transition px-4 py-2 font-medium text-sm uppercase"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-400 transition px-4 py-2 font-medium text-sm uppercase"
          >
            Contact Us
          </Link>
        </div>

        {/* Right Side: Phone + Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3">
            <Phone className="w-5 h-5 text-white" />
            <div className="text-white">
              <div className="text-xs opacity-80">Call us Now</div>
              <div className="font-semibold text-sm">+123(456)7890</div>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/20 hover:bg-yellow-400 rounded-full flex items-center justify-center transition backdrop-blur-sm">
            <Search className="w-5 h-5 text-white" />
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-semibold px-6 py-3 rounded-full transition text-sm flex items-center gap-2">
            Get In Touch
            <svg
              className="w-4 h-4"
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
    </nav>
  );
}


