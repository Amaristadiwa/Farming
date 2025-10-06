import React from "react";

export default function Hero({ title, breadcrumb }) {
  return (
    <div className="relative h-64 bg-gradient-to-r from-green-900 to-green-700 overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        <div className="flex items-center gap-2 text-white text-sm">
          {breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className={
                  index === breadcrumb.length - 1
                    ? "text-white"
                    : "text-white/80"
                }
              >
                {item.toUpperCase()}
              </span>
              {index < breadcrumb.length - 1 && (
                <span className="text-white/60">›</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
