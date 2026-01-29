import React from 'react';
import { motion } from 'framer-motion';

const TeamPanther: React.FC = () => {
  const models = [
    {
      name: "PantherVision AI v2.1",
      desc: "Computer vision engineered to interpret colorimetric shifts on biosensors with unmatched accuracy, accounting for real-world environmental noise.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      stats: "99.4% Confidence",
      tag: "Vision Model"
    },
    {
      name: "NeuralSense Engine",
      desc: "Cloud-based analytics aggregating sensor data via NFC, providing predictive patient health trends through decentralized neural networks.",
      img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1200",
      stats: "Real-time Processing",
      tag: "Analytical Engine"
    }
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-8 md:px-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/logo/Team Panther, Anivid-1.png" 
            alt="Team PANTHER Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-50/95" />
        </div>
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="relative z-10 text-center text-white mb-20"
        >
          <div className="inline-block px-4 py-1 border border-blue-400 text-blue-200 text-[8px] font-bold uppercase tracking-[0.4em] mb-6 bg-white/10 backdrop-blur-sm">AI Service Tool</div>
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
              <img src="/logo/Team Panther, Anivid-2.png" alt="Team PANTHER" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">Team PANTHER</h1>
          </div>
          <p className="text-lg text-blue-100 font-light max-w-xl mx-auto italic">Advanced AI Driven Tools for Research and Smart Diagnostics.</p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-8 md:px-24 max-w-7xl mx-auto text-center bg-slate-50">
        <div className="space-y-24">
          {models.map((model, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center text-left`}
            >
              <div className="w-full lg:w-1/2">
                <motion.div whileHover={{ rotateY: idx % 2 === 0 ? 5 : -5 }} className="relative aspect-video bg-white p-2 shadow-lg rounded border border-slate-100 overflow-hidden">
                  <img src={model.img} alt={model.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000" />
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <span className="text-blue-700 font-bold uppercase tracking-widest text-[9px]">{model.tag}</span>
                  <h3 className="text-3xl font-serif text-slate-800 italic leading-tight mt-2">{model.name}</h3>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-1">{model.stats}</p>
                </div>
                <p className="text-base text-slate-600 font-light leading-relaxed">{model.desc}</p>
                <div className="pt-4">
                  <button className="bg-slate-900 text-white px-8 py-3.5 text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-blue-700 transition-all shadow-md">
                    Access Service
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPanther;