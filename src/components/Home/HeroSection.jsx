import { ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] bg-cover bg-center" style={{
      backgroundImage: "url('src/images/asdfg.jpg')",
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent"></div>

      <div className="relative container mx-auto px-4 h-full flex items-center pt-24">
        <div className="max-w-3xl">
          <div className="inline-block border border-white/50 px-6 py-2 rounded-full mb-8">
            <p className="text-white text-sm font-medium uppercase tracking-wide">Believe in Quality!</p>
          </div>

         <h1
  className="text-white font-medium mb-6"
  style={{
    fontFamily: "'Signika', sans-serif",
    fontWeight: 500,
    fontSize: "90px",
    lineHeight: "100px",
    letterSpacing: "0",
    verticalAlign: "middle",
  }}
>
  Quality Trust: <br />
  Direct to the Farm
</h1>


          <p className="text-white/90 text-lg mb-10 max-w-xl leading-relaxed">
            We all need a little space to grow. Give yourself the space you need to find your inner you.
          </p>

          <button className="bg-white hover:bg-yellow-400 text-green-800 font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition group">
            Contact Us
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
