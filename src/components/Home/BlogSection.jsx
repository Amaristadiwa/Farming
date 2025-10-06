import React from "react";
import { Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogSection() {
  const posts = [
    {
      title: "Most technology is used in our agriculture",
      date: "NOV 28, 2025",
      author: "Admin",
      category: "Agriculture",
      image:
        "https://images.pexels.com/photos/4503274/pexels-photo-4503274.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Which type of farming is used in agriculture",
      date: "NOV 28, 2025",
      author: "Admin",
      category: "Farming",
      image:
        "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "The Farmers Smartest Devices for 2025",
      date: "NOV 28, 2025",
      author: "Admin",
      category: "Technology",
      image:
        "https://images.pexels.com/photos/5231117/pexels-photo-5231117.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-yellow-400"></div>
              <span className="text-yellow-600 font-semibold">
                News & Articles
              </span>
            </div>
            <h2 className="text-green-800 text-4xl md:text-5xl font-bold">
              Latest posts & articles
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button className="w-12 h-12 border-2 border-green-800/20 hover:bg-yellow-400 hover:border-yellow-400 rounded-full flex items-center justify-center transition text-green-800">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 border-2 border-green-800/20 hover:bg-yellow-400 hover:border-yellow-400 rounded-full flex items-center justify-center transition text-green-800">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-green-800 px-4 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-green-800 text-xl font-bold mb-4 leading-tight group-hover:text-yellow-600 transition">
                  {post.title}
                </h3>
                <button className="text-green-800 font-semibold flex items-center gap-2 hover:text-yellow-600 transition">
                  Read More
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
          ))}
        </div>
      </div>
    </section>
  );
}

