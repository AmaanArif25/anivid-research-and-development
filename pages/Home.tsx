
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 800], [0, 100]);
  const yBg = useTransform(scrollY, [0, 1000], [0, -60]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="w-full bg-white selection:bg-blue-100 overflow-x-hidden">
      {/* Cinematic Hero */}
      <section className="relative hero-min-height flex items-center justify-center overflow-hidden section">
        <div className="container max-w-5xl mx-auto">
          <motion.div 
            style={{ y: yText, opacity }}
            className="z-10 text-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="h-px bg-blue-700 w-8 md:w-10 lg:w-12 mx-auto mb-6 md:mb-8 origin-center"
              transition={{ duration: 1.5, ease: "circOut" }}
            />
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.1] tracking-tight mb-6 md:mb-8"
            >
              Innovating Diagnostics. <br/>
              <span className="italic text-slate-400">Empowering Healthcare.</span> <br/>
              Protecting Lives.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-base text-slate-600 font-light leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12"
            >
              <span className="font-semibold text-slate-900">ANIVID Research and Development Private Limited</span> is a research-driven biotechnology company dedicated to pioneering next-generation biosensors and point-of-care diagnostic technologies. Founded on the vision of  <span className="font-medium text-slate-900">Pawankumar Rai</span> ANIVID integrates science, engineering, and digital innovation to create affordable, rapid, and accessible diagnostic solutions for healthcare and consumer safety.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
            >
              <Link to="/services" className="px-8 py-3.5 bg-slate-900 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-blue-700 transition-all shadow-md text-center">
                Explore Tech
              </Link>
              <Link to="/contact" className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] border-b border-slate-900 pb-1 hover:text-blue-700 hover:border-blue-700 transition-all">
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Subtle Background Elements */}
          <motion.div style={{ y: yBg }} animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ repeat: Infinity, duration: 15 }} className="absolute top-1/4 -right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-50/40 rounded-full blur-[40px] sm:blur-[60px] md:blur-[80px] -z-0" />
        </div>
      </section>

      {/* Focus Section */}
      <section className="section border-t border-slate-50">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6">
              <span className="block text-lg font-serif italic text-blue-700 mb-4">"Scientist by thought. Entrepreneur by action. Storyteller by soul"</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight tracking-tight">Who We Are</h2>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                ANIVID is focused on developing paper-based chromogenic biosensors, NFC-enabled smart diagnostic devices, and digital health-integrated solutions that bridge the gap between laboratory diagnostics and real-world point-of-care applications—especially in resource-limited settings.
              </p>
              <div className="pt-4">
                <Link to="/about" className="inline-block px-8 py-3.5 border border-slate-200 text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-slate-50 transition-all">
                  About Founder
                </Link>
              </div>
            </motion.div>
            
            <div className="relative perspective-2000 flex items-center justify-center">
              <motion.div whileHover={{ rotateY: -8, rotateX: 4, scale: 1.02 }} className="img-container-responsive rounded shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                <img src="/1762695391144.jpg" className="img-responsive" alt="Research" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
