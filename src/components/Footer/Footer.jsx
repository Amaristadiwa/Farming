import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-green-800 font-bold text-2xl">🌾</span>
              </div>
              <span className="text-green-800 font-bold text-2xl" style={{ fontStyle: 'italic' }}>grimo</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus. In vitae sapien viverra est Duo ei ullum inani senserit.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 border border-green-700 hover:bg-green-700 rounded-lg flex items-center justify-center transition group">
                <Facebook className="w-5 h-5 text-green-700 group-hover:text-white" />
              </button>
              <button className="w-10 h-10 border border-green-700 hover:bg-green-700 rounded-lg flex items-center justify-center transition group">
                <Twitter className="w-5 h-5 text-green-700 group-hover:text-white" />
              </button>
              <button className="w-10 h-10 border border-green-700 hover:bg-green-700 rounded-lg flex items-center justify-center transition group">
                <Linkedin className="w-5 h-5 text-green-700 group-hover:text-white" />
              </button>
              <button className="w-10 h-10 border border-green-700 hover:bg-green-700 rounded-lg flex items-center justify-center transition group">
                <Instagram className="w-5 h-5 text-green-700 group-hover:text-white" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-gray-800 font-bold text-xl mb-6">
              Professional & modern, a theme designed to help your business stand out from the rest.
            </h3>
          </div>

          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6">Useful Link</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition text-sm">Company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-700 transition text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6">Working Time</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-600">Mon - Fri: 9:00am - 5.00pm</p>
              <p className="text-gray-600">Saturday: 10.00am - 6.00pm</p>
              <p className="text-gray-600">Sunday Closed</p>
            </div>
            <h3 className="text-gray-800 font-bold text-lg mt-8 mb-4">Our Address</h3>
            <p className="text-gray-600 text-sm">Old Westbury 256, New York 11201, United States</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-green-700 transition">Terms & Conditions</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-600 hover:text-green-700 transition">Privacy Policy</a>
          </div>
          <p className="text-gray-600 text-sm">
            Copyright © 2024 <span className="text-green-700 font-semibold">Agrimo</span>, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
