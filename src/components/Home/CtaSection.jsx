import { Leaf, Award } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="src\images\e3a4b505969c511f04f6db863fc26b803f881806.jpg"
              alt="Farmer"
              className="rounded-3xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="bg-yellow-400 rounded-3xl p-12">
            <h2 className="text-green-800 text-4xl font-bold mb-6 leading-tight">
              Healthy life with fresh products
            </h2>
            <p className="text-green-800/80 mb-8">
              There are many variations of passages of lorem ipsum available but the majority have suffered.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-3">
                  <Leaf className="w-6 h-6 text-green-800" />
                </div>
                <h3 className="text-green-800 font-bold text-lg mb-2">Eco Friendly</h3>
                <p className="text-gray-600 text-sm">There are many variations of passages.</p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-green-800" />
                </div>
                <h3 className="text-green-800 font-bold text-lg mb-2">Natural Products</h3>
                <p className="text-gray-600 text-sm">There are many variations of passages.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-12">
          <h2 className="text-green-800 text-3xl font-bold mb-6">
            Farming have been since 1866
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-green-800 text-5xl font-bold mb-2">1967</div>
              <h4 className="text-green-800 font-bold mb-2">Open our farm</h4>
              <p className="text-gray-600 text-sm">There are many variations of pass ages of lorem ipsum.</p>
            </div>
            <div className="text-center">
              <div className="text-green-800 text-5xl font-bold mb-2">1993</div>
              <h4 className="text-green-800 font-bold mb-2">Farm Mondernization</h4>
              <p className="text-gray-600 text-sm">There are many variations of pass ages of lorem ipsum.</p>
            </div>
            <div className="text-center">
              <div className="text-green-800 text-5xl font-bold mb-2">2008</div>
              <h4 className="text-green-800 font-bold mb-2">Certifications Earned</h4>
              <p className="text-gray-600 text-sm">There are many variations of pass ages of lorem ipsum.</p>
            </div>
            <div className="text-center">
              <div className="text-green-800 text-5xl font-bold mb-2">2020</div>
              <h4 className="text-green-800 font-bold mb-2">Start of Agriculture</h4>
              <p className="text-gray-600 text-sm">There are many variations of pass ages of lorem ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}