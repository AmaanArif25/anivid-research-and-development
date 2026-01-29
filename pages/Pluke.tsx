
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: "PLUKE Collection 01",
    caption: "Botanical Innovation",
    description: "Premium botanical formulation with advanced bio-active ingredients for professional skincare.",
    image: "/pluke/PLUKE_page-0001.jpg"
  },
  {
    name: "PLUKE Collection 02", 
    caption: "Natural Elegance",
    description: "Sophisticated blend of plant extracts and cutting-edge biotechnology for radiant skin.",
    image: "/pluke/PLUKE_page-0002.jpg"
  },
  {
    name: "PLUKE Collection 03",
    caption: "Pure Botanicals",
    description: "Concentrated natural ingredients formulated to deliver visible results and lasting benefits.",
    image: "/pluke/PLUKE_page-0003.jpg"
  },
  {
    name: "PLUKE Collection 04",
    caption: "Advanced Formula",
    description: "Scientifically developed skincare solutions combining nature's best with modern innovation.",
    image: "/pluke/PLUKE_page-0004.jpg"
  },
  {
    name: "PLUKE Collection 05",
    caption: "Luxury Care",
    description: "Premium skincare experience with meticulously selected botanical ingredients and extracts.",
    image: "/pluke/PLUKE_page-0005.jpg"
  },
  {
    name: "PLUKE Collection 06",
    caption: "Professional Grade",
    description: "Clinically-inspired formulations designed for professional skincare applications.",
    image: "/pluke/PLUKE_page-0006.jpg"
  },
  {
    name: "PLUKE Collection 07",
    caption: "Essential Care",
    description: "Fundamental skincare solutions with potent botanical complexes for daily use.",
    image: "/pluke/PLUKE_page-0007.jpg"
  },
  {
    name: "PLUKE Collection 08",
    caption: "Targeted Treatment",
    description: "Specialized formulations addressing specific skincare concerns with precision.",
    image: "/pluke/PLUKE_page-0008.jpg"
  },
  {
    name: "PLUKE Collection 09",
    caption: "Complete System",
    description: "Comprehensive skincare regimen designed for optimal results and skin health.",
    image: "/pluke/PLUKE_page-0009.jpg"
  },
  {
    name: "PLUKE Collection 10",
    caption: "Premium Selection",
    description: "Exclusive botanical formulations representing the pinnacle of skincare innovation.",
    image: "/pluke/PLUKE_page-0010.jpg"
  },
  {
    name: "PLUKE Collection 11",
    caption: "Advanced Science",
    description: "Cutting-edge skincare technology enhanced with powerful botanical ingredients.",
    image: "/pluke/PLUKE_page-0011.jpg"
  },
  {
    name: "PLUKE Collection 12",
    caption: "Ultimate Care",
    description: "The complete skincare solution combining the best of nature and scientific innovation.",
    image: "/pluke/PLUKE_page-0012.jpg"
  }
];

const ProductItem: React.FC<{ name: string; caption: string; image: string }> = ({ name, caption, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded shadow-lg mb-4 bg-white">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/10 transition-colors duration-700" />
        </div>
        <div className="space-y-1">
          <span className="text-[6px] md:text-[7px] font-bold uppercase tracking-widest text-amber-800 block">{caption}</span>
          <h3 className="text-sm md:text-base font-serif text-slate-900 italic leading-tight">{name}</h3>
        </div>
      </motion.div>

      {/* Modal for full image view */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={image} 
              alt={name} 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Pluke: React.FC = () => {
  return (
    <div className="w-full bg-[#fcfaf7] overflow-hidden">
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center px-6 md:px-12 lg:px-24">
        {/* Background Decorative Text */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none flex items-center justify-center">
           <motion.div 
             animate={{ scale: [1, 1.02, 1], opacity: [0.01, 0.02, 0.01] }} 
             transition={{ duration: 15, repeat: Infinity }} 
             className="w-full h-full flex items-center justify-center"
           >
             <h1 className="text-[25vw] sm:text-[30vw] font-serif font-black text-slate-950 tracking-tighter whitespace-nowrap">PLÜKÈ</h1>
           </motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex items-center justify-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }} 
            className="space-y-6 md:space-y-8 text-center"
          >
            <div className="space-y-4">
              <span className="text-amber-800 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] italic block">A Science-Backed Beauty</span>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-amber-200 shadow-lg">
                  <img src="/logo/Pluke_logo.png" alt="Pluke" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-tight tracking-tighter">
                    PlüKè
                    <span className="text-lg md:text-xl lg:text-2xl font-sans font-medium ml-1 md:ml-2 text-slate-400 select-none" title="Trademarked">™</span>
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              PlüKè is a science-backed personal care and wellness brand by ANIVID Research and Development Private Limited, combining biotechnology, biosensor research, and skin science to deliver honest, effective, and evidence-driven products. Brand by <span className="text-slate-900 font-medium">ANIVID Research and Development Private Limited</span>.
            </p>
            <div className="pt-4 md:pt-6">
              <a 
                href="https://pluke.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-block bg-slate-950 text-white px-10 py-4 md:px-12 md:py-5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-amber-900 transition-all shadow-xl group text-center"
              >
                Visit Pluke.in
                <motion.span 
                  className="inline-block ml-4"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                >
                  →
                </motion.span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 md:mb-24 text-center">
             <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.6em] text-slate-400 mb-4 block">Innovation Approach</span>
             <h2 className="text-3xl md:text-5xl font-serif text-slate-900 italic tracking-tight">Products & Solutions</h2>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {products.map((product, idx) => (
              <ProductItem 
                key={idx}
                name={product.name}
                caption={product.caption}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 border-t border-slate-100 bg-[#fcfaf7] text-center px-6">
         <div className="max-w-2xl mx-auto">
            <h4 className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-6 md:mb-8">Official Domain</h4>
            <a 
              href="https://pluke.in" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl md:text-5xl font-serif text-slate-900 hover:text-amber-800 transition-colors block break-words"
            >
              www.pluke.in
            </a>
         </div>
      </section>
    </div>
  );
};

export default Pluke;
