import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 800], [0, 100]);
  const yBg = useTransform(scrollY, [0, 1000], [0, -60]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Gallery images for slider
  const galleryImages = [
    '/gallery/1p.jpeg',
    '/gallery/2p.jpeg',
    '/gallery/3p.jpeg',
    '/gallery/4p.jpeg',
    '/gallery/5p.jpeg',
    '/gallery/6p.jpeg'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryImages.length]);
  
  // Manual navigation
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const nextImage = () => {
    goToImage(currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1);
  };
  
  const prevImage = () => {
    goToImage(currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1);
  };

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
              Pioneering Progress in Biosensor.<br/>
              Innovating Diagnostics.<br/>
              <span className="italic text-slate-400">Empowering Healthcare.</span> <br/>
              Protecting Lives.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-base text-slate-600 font-light leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12"
            >
              <span className="font-semibold text-slate-900">ANIVID Research and Development Private Limited</span> is a research-driven biotechnology company dedicated to pioneering next-generation biosensors and point-of-care diagnostic technologies. Founded on the vision of  <span className="font-medium text-slate-900">Pawankumar Rai</span>, ANIVID integrates science, engineering, and digital innovation to create affordable, rapid, and accessible diagnostic solutions for healthcare and consumer safety.
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
          {/* Centered Content Section */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight tracking-tight mb-6">Who We Are</h2>
              <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-8">
                ANIVID is focused on developing paper-based chromogenic biosensors, NFC-enabled smart diagnostic devices, and digital health-integrated solutions that bridge the gap between laboratory diagnostics and real-world point-of-care applications especially in resource-limited settings.
              </p>
              <div className="pt-4">
                <Link to="/about" className="inline-block px-8 py-3.5 border border-slate-200 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-slate-50 transition-all">
                  About Founder
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Interactive 3D Image Slider */}
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] perspective-2000">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ 
                    duration: 1.5, 
                    ease: [0.25, 1, 0.5, 1],
                    opacity: { duration: 1 }
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        y: -5
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      }}
                      className="relative w-full h-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
                    >
                      <img
                        src={galleryImages[currentImageIndex]}
                        alt={`Gallery image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a default image if the current one fails
                          const target = e.target as HTMLImageElement;
                          target.src = '/1762695391144.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-slate-700 group-hover:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-slate-700 group-hover:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Auto-play indicator */}
              <div className="absolute top-6 right-6 z-20">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                  aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
                >
                  {isAutoPlaying ? (
                    <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
