
import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

const Counter = ({ value, label }: { value: number; label: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2.5,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      ease: [0.16, 1, 0.3, 1]
    });
    return () => controls.stop();
  }, [value]);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 group">
      <div className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-900 tracking-tighter leading-none group-hover:text-blue-700 transition-colors duration-500">
        {displayValue}<span className="text-lg md:text-xl text-slate-300">%</span>
      </div>
      <div className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-4 text-center">{label}</div>
    </div>
  );
};

const ProductItem: React.FC<{ title: string; caption: string; img: string }> = ({ title, caption, img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ y: -10 }}
        className="group relative cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="aspect-[4/5] overflow-hidden rounded shadow-lg border border-slate-100 mb-4 md:mb-6 relative bg-slate-50">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
        </div>
        <div className="space-y-1 md:space-y-2">
          <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-blue-700">{caption}</span>
          <h3 className="text-lg md:text-xl font-serif text-slate-800 italic">{title}</h3>
        </div>
      </motion.div>

      {/* Modal for full image view */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={img} 
              alt={title} 
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

const Services: React.FC = () => {
  const products = [
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0001.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0002.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0003.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0004.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0005.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0006.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0007.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0008.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0009.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0010.jpg" },
    { title: "", caption: "", img: "/service/All Flyers_22112025_updated_page-0011.jpg" }
  ];

  return (
    <div className="w-full bg-white selection:bg-blue-50">
      {/* Stats Section */}
      <section className="py-6 md:py-10 border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center gap-4 md:gap-8">
          <Counter value={98} label="Accuracy" />
          <Counter value={95} label="Clinical Validation" />
          <div className="col-span-2 md:col-span-1">
            <Counter value={99} label="Reliability" />
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-8 md:py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12 text-center lg:text-left">
          <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] text-blue-700 mb-3 block">Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-slate-900">Our Products</h2>
          <p className="text-sm md:text-base text-slate-500 font-light mt-4 max-w-xl mx-auto lg:mx-0">
            ANIVID offers end-to-end biosensor Research and Development services, from concept and prototyping to validation and scale-up, for academic, industrial, and government partners.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((p, i) => (
            <ProductItem key={i} title={p.title} caption={p.caption} img={p.img} />
          ))}
        </div>
      </section>

      {/* Main Capability Section */}
      <section className="py-6 md:py-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Our Focus Areas Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-900 italic">Our Focus Areas</h2>
            <div className="space-y-4">
              {[
                "Rapid disease diagnostics",
                "Food adulteration and contamination detection",
                "Smart, NFC-enabled biosensing platforms",
                "Affordable healthcare solutions for rural and underserved populations"
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: 2
                  }}
                  className="group relative"
                >
                  <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-500 preserve-3d">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    <p className="text-slate-700 font-light text-sm md:text-base relative z-10 group-hover:text-blue-700 transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ANIVID's Core Strength Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-900 italic">ANIVID's Core Strength</h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm"
            >
              <p className="text-slate-600 font-light text-sm md:text-base mb-6">
                ANIVID's core strength lies in its proprietary biosensor platforms, combining:
              </p>
              <div className="space-y-3">
                {[
                  "Paper-based chromogenic sensing chemistry",
                  "Multi-analyte detection systems",
                  "NFC-enabled data transfer",
                  "Image-based signal interpretation",
                  "Digital dashboards for real-time analysis"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{
                      x: 10,
                      scale: 1.01
                    }}
                    className="group relative overflow-hidden rounded-md"
                  >
                    <div className="bg-gradient-to-r from-slate-50 to-white border-l-2 border-transparent group-hover:border-blue-600 transition-all duration-300 py-3 px-4">
                      <p className="text-slate-600 font-light text-sm md:text-base group-hover:text-blue-700 transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-slate-500 font-light text-sm md:text-base italic mt-6 pt-4 border-t border-slate-100"
              >
                These technologies enable rapid, reliable, and user-friendly diagnostics without the need for complex laboratory equipment.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
