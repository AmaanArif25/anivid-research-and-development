import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import '../styles/about.css';

// Image Slider Component
const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 20 unique images related to focus areas (no human-related images)
  const images = [
    {
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
      category: "Education",
      title: "Knowledge Growth"
    },
    {
      url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
      category: "Healthcare", 
      title: "Medical Innovation"
    },
    {
      url: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=80",
      category: "Nutrition",
      title: "Healthy Nutrition"
    },
    {
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      category: "Poverty Alleviation",
      title: "Economic Growth"
    },
    {
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      category: "Environmental Sustainability",
      title: "Green Future"
    },
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      category: "Women and Child Development",
      title: "Empowerment"
    },
    {
      url: "https://images.unsplash.com/photo-1559028006-44a26f8c2c32?w=800&q=80",
      category: "Skill Development",
      title: "Learning Skills"
    },
    {
      url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
      category: "Social Awareness",
      title: "Community Support"
    },
    {
      url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      category: "Education",
      title: "Digital Learning"
    },
    {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      category: "Healthcare",
      title: "Health Technology"
    },
    {
      url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
      category: "Nutrition",
      title: "Organic Food"
    },
    {
      url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      category: "Poverty Alleviation",
      title: "Sustainable Development"
    },
    {
      url: "https://images.unsplash.com/photo-1540206395-68808572332f?w=800&q=80",
      category: "Environmental Sustainability",
      title: "Clean Energy"
    },
    {
      url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      category: "Women and Child Development",
      title: "Future Leaders"
    },
    {
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      category: "Skill Development",
      title: "Professional Growth"
    },
    {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      category: "Social Awareness",
      title: "Community Building"
    },
    {
      url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
      category: "Environmental Sustainability",
      title: "Nature Conservation"
    },
    {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      category: "Education",
      title: "Rural Education"
    },
    {
      url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80",
      category: "Healthcare",
      title: "Wellness Programs"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      category: "Nutrition",
      title: "Sustainable Agriculture"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl bg-slate-100">
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-blue-200">
                  {images[currentIndex].category}
                </span>
                <h3 className="text-xl md:text-3xl font-serif italic mt-2">
                  {images[currentIndex].title}
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Sapling: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full bg-white overflow-hidden pb-12">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 px-8 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 mb-12"
        >
          <div className="flex items-center gap-3">
            <motion.span initial={{ width: 0 }} whileInView={{ width: 30 }} className="h-px bg-blue-700" transition={{ duration: 1 }} />
            <span className="text-blue-700 font-bold tracking-[0.4em] uppercase text-[7px]">A Non-Profit Organization</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight tracking-tighter">
            SAPLING Foundation<span className="text-lg md:text-xl lg:text-2xl font-sans font-medium ml-1 md:ml-2 text-slate-400 select-none" title="Trademarked">™</span><br/><span className="italic text-slate-400">Sustainable Action for Poverty, Learning, Inclusion, Nature, and Growth</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-slate-800">Our Mission</h2>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                SAPLING Foundation, founded by Pawankumar Rai, is a non-profit organization registered under Section 8 of the Companies Act, 2013, India, established with a clear vision to nurture inclusive, sustainable, and long-term social change.
              </p>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                True to its name, SAPLING represents the belief that even the smallest initiative, when nurtured with care and purpose, can grow into a powerful force for transformation.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }} 
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center justify-center h-full relative perspective-1000"
          >
            <motion.div 
              className="relative group"
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                z: 50
              }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Deep background imprint shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 rounded-3xl transform scale-125 opacity-40 blur-3xl"></div>
              
              {/* Multiple layered shadows for depth */}
              <div className="absolute inset-2 bg-gradient-to-t from-slate-400/30 to-transparent rounded-2xl transform translate-y-4 translate-x-2 rotate-2 blur-xl"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-slate-300/25 to-transparent rounded-xl transform translate-y-2 translate-x-1 rotate-1 blur-lg"></div>
              
              {/* Main logo container with 3D preserve */}
              <motion.div 
                className="relative z-10 preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background plate effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-3xl shadow-2xl transform translate-z-[-20px]"></div>
                
                {/* Decorative edge highlights */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-60"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-transparent via-slate-200/30 to-transparent"></div>
                
                {/* Logo image with enhanced effects */}
                <motion.img 
                  src="/logo/sapling.jpeg" 
                  alt="SAPLING Foundation Logo" 
                  className="relative z-20 w-52 h-52 md:w-64 md:h-64 object-contain rounded-3xl shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2)) drop-shadow(0 8px 16px rgba(0,0,0,0.15))',
                    transform: 'translateZ(10px)'
                  }}
                  whileHover={{
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.25)) drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                    transform: 'translateZ(20px) scale(1.02)'
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Inner 3D bevel effect */}
                <div className="absolute inset-2 rounded-3xl bg-gradient-to-t from-slate-900/10 to-transparent transform translate-z-[5px]"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/15 to-purple-100/10 transform translate-z-[15px] opacity-70"></div>
                
                {/* Interactive glow on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-400/20 via-transparent to-purple-400/20 opacity-0"
                  whileHover={{ 
                    opacity: 1,
                    scale: 1.05
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              
              {/* Ambient environmental lighting */}
              <motion.div 
                className="absolute -inset-12 bg-gradient-to-r from-blue-300/15 via-purple-300/10 to-pink-300/15 rounded-full blur-3xl opacity-0"
                whileHover={{ 
                  opacity: 1,
                  scale: 1.2
                }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Floating particles effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl overflow-hidden opacity-0"
                whileHover={{ opacity: 1 }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 12}%`
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="border-t border-slate-50 pt-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-blue-700 font-bold tracking-[0.5em] uppercase text-[7px] mb-2 block">Our Belief</span>
              <h2 className="text-3xl font-serif italic text-slate-900">Holistic Approach to Social Development</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="prose prose-lg max-w-none text-center"
            >
              <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
                SAPLING represents Sustainable Action for Poverty, Learning, Inclusion, Nature, and Growth, a holistic approach to social development that nurtures individuals, communities, and the environment together.
              </p>

              <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
                The acronym reflects the Foundation's belief that lasting change comes from addressing social, educational, economic, and environmental challenges in an integrated and compassionate manner.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Focus Areas Section */}
        <div className="border-t border-slate-50 pt-16 mt-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-blue-700 font-bold tracking-[0.5em] uppercase text-[7px] mb-2 block">Our Commitment</span>
              <h2 className="text-3xl font-serif italic text-slate-900">Focus Areas</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Education",
                "Healthcare", 
                "Nutrition",
                "Poverty Alleviation",
                "Environmental Sustainability",
                "Women and Child Development",
                "Skill Development",
                "Social Awareness"
              ].map((area, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02
                  }}
                  className="bg-white border border-slate-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <h3 className="text-lg font-serif italic text-slate-800 mb-2">{area}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Image Slider Section */}
        <div className="border-t border-slate-50 pt-16 mt-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-blue-700 font-bold tracking-[0.5em] uppercase text-[7px] mb-2 block">Our Impact</span>
              <h2 className="text-3xl font-serif italic text-slate-900">Transforming Lives Across Communities</h2>
            </motion.div>

            <ImageSlider />
          </div>
        </div>

        {/* Approach Section */}
        <div className="border-t border-slate-50 pt-16 mt-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-blue-700 font-bold tracking-[0.5em] uppercase text-[7px] mb-2 block">Our Method</span>
              <h2 className="text-3xl font-serif italic text-slate-900">Community-Driven Approach</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
                SAPLING Foundation believes that meaningful change begins at the grassroots level. Through community-driven programs, awareness campaigns, capacity-building initiatives, and collaborations with institutions, government bodies, and industry partners, we aim to create measurable and lasting impact.
              </p>

              <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
                Our approach emphasizes dignity, empowerment, and self-reliance rather than short-term relief. Guided by values of integrity, compassion, transparency, and inclusivity, SAPLING Foundation works toward building a society where every individual, regardless of background, has the opportunity to live with dignity, health, and hope.
              </p>

              <p className="text-base text-slate-600 font-light leading-relaxed">
                With a vision for change and a commitment to action, SAPLING Foundation strives to plant the seeds today for a stronger, more equitable tomorrow.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-slate-50 pt-16 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border border-blue-100"
            >
              <h2 className="text-2xl font-serif italic text-slate-900 mb-4">Support Our Noble Cause</h2>
              <p className="text-base text-slate-600 font-light leading-relaxed mb-8">
                To donate for Noble cause.. Contact.....
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-bold uppercase tracking-[0.3em] text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Background */}
      <section className="py-12 md:py-16 bg-slate-50 text-center relative overflow-hidden">
        <motion.div animate={{ opacity: [0.01, 0.02, 0.01] }} transition={{ duration: 10, repeat: Infinity }} className="absolute inset-0 flex items-center justify-center font-serif text-[15vw] md:text-[12vw] text-slate-900/5 pointer-events-none select-none">
          SAPLING FOUNDATION
        </motion.div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <h2 className="text-lg md:text-xl lg:text-2xl font-serif italic text-slate-600 leading-relaxed">
            "Planting seeds today for a stronger, more equitable tomorrow through sustainable action and inclusive growth."
          </h2>
          <div className="mt-6 h-px w-12 bg-blue-700/30 mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default Sapling;
