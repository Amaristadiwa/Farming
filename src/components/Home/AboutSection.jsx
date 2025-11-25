import { Leaf } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="src\images\bbf039044044b2e7b8fbee60796133ec7b3a4031.jpg"
              alt="Farmer"
              className="rounded-3xl w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-12 right-12 bg-yellow-400 p-8 rounded-3xl max-w-[280px]">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-green-800 text-2xl">✱</span>
                <span className="text-green-800 text-6xl font-bold">435</span>
                <span className="text-green-800 text-3xl font-bold">+</span>
              </div>
              <div className="text-green-800 font-medium text-lg">Growth Tons' of Harvest</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-5 h-5 text-green-700" />
              <span className="text-green-700 font-medium text-sm">Who We Are</span>
            </div>

            <h2 className="text-gray-800 text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Currently we are growing and selling organic food
            </h2>

            <p className="text-gray-600 mb-12 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="mb-4">
                  <svg className="w-12 h-12 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="7" height="18" />
                    <rect x="14" y="3" width="7" height="9" />
                  </svg>
                </div>
                <h3 className="text-gray-800 text-xl font-bold mb-3">Eco Farms Worldwide</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  There are many variations of passages of lorem ipsum available majority have suffered.
                </p>
              </div>

              <div>
                <div className="mb-4">
                  <svg className="w-12 h-12 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12h4l3 9 4-18 3 9h4" />
                  </svg>
                </div>
                <h3 className="text-gray-800 text-xl font-bold mb-3">Special Equipment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  There are many variations of passages of lorem ipsum available majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}