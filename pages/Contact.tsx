
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen selection:bg-blue-50">
      {/* Cinematic Header Section */}
      <section className="relative pt-32 pb-20 px-8 md:px-24 overflow-hidden border-b border-slate-50">
        {/* Subtle background text for visual depth */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.02 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-black pointer-events-none select-none whitespace-nowrap"
        >
          INQUIRIES
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="space-y-4">
              <span className="text-blue-700 text-[9px] font-bold uppercase tracking-[0.5em] block">Get in Touch</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-tight tracking-tighter italic">
                Collaboration <span className="text-slate-300 not-italic">Requests</span>
              </h1>
            </div>
            <p className="text-slate-500 font-light leading-relaxed text-base md:text-lg max-w-sm mx-auto lg:mx-0 lg:mb-4 italic">
              Global collaborations, research partnerships, and institutional investment inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Contact Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1 }} 
            className="lg:col-span-5 space-y-12"
          >
            {/* Direct Correspondence */}
            <div className="space-y-6">
              <h4 className="text-[8px] uppercase font-bold tracking-[0.4em] text-slate-400 mb-4 flex items-center gap-4">
                Direct Correspondence <span className="h-px w-8 bg-slate-100 group-hover:w-12 group-hover:bg-blue-700 transition-all duration-500" />
              </h4>
              <div className="space-y-2">
                <a href="mailto:anivid.research@gmail.com" className="text-xl md:text-2xl font-serif italic text-slate-800 hover:text-blue-700 transition-colors duration-500 block">
                   anivid.research@gmail.com
                </a>
                <a href="mailto:anivid.manufacturing@yahoo.com" className="text-xl md:text-2xl font-serif italic text-slate-800 hover:text-blue-700 transition-colors duration-500 block">
                   anivid.manufacturing@yahoo.com
                </a>
                <p className="text-slate-400 text-[10px] font-light uppercase tracking-widest">General & Research Inquiries</p>
              </div>
            </div>

            {/* Live Location */}
            <div className="space-y-6">
              <h4 className="text-[8px] uppercase font-bold tracking-[0.4em] text-slate-400 mb-4 flex items-center gap-4">
                Live Location <span className="h-px w-8 bg-slate-100 group-hover:w-12 group-hover:bg-blue-700 transition-all duration-500" />
              </h4>
              <div className="w-full aspect-square rounded-sm overflow-hidden border border-slate-100 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.378635398344!2d83.1435630742513!3d26.76442286668798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399127b083b03f6b%3A0x4446f87c6792a549!2sANIVID%20Research%20and%20Development%20Private%20Limited!5e0!3m2!1sen!2sin!4v1706207431818!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="font-serif not-italic text-slate-600 text-sm">
                H.No., C4, Block-G, Awas Vikas 1, Santkabir Nagar-272175, U.P, India
              </p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }} 
            className="lg:col-span-7"
          >
            <div className="bg-white border border-slate-50 rounded-lg p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 preserve-3d h-full">
              <div className="mb-8">
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-blue-700 block">Collaboration Requests</span>
                <h3 className="text-2xl md:text-3xl font-serif italic text-slate-800 mt-2">Let's Innovate Together</h3>
                <div className="w-8 h-px bg-blue-700 mt-4" />
              </div>

              <div className="space-y-6 mb-8">
                <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                  Thank you for your interest in collaborating with ANIVID Research and Development Private Limited.
                </p>
                
                <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                  We are actively seeking academic, industrial, clinical, and international partners for co-developing innovative, sustainable, and inclusive healthcare and food safety technologies.
                </p>

                <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                  Kindly fill out the following form to help us understand your interests, expertise, and potential areas of collaboration.
                </p>

                <p className="text-slate-500 font-light text-sm italic">
                  Our team will get back to you shortly after reviewing the information.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-center"
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfo0mf4LXExNMjfjAkFy_gKFKETFkLEfT07NMwPw73xdASRBw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 group"
                >
                  <span className="font-bold uppercase tracking-[0.2em] text-sm">Open Collaboration Form</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 text-center">
                  * Indicates required question • Powered by Google Forms
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-16 px-8 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-blue-700 font-bold tracking-[0.5em] uppercase text-[7px] mb-2 block">Partnerships</span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-slate-900">Collaborations</h2>
        </motion.div>

        <div className="space-y-16">
          {/* Indian Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-serif italic text-slate-800 mb-8 text-center">Collaborations: India</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {[
                { name: "Partner 1", logo: "/collaboration/unnamed.png" },
                { name: "Partner 2", logo: "/collaboration/unnamed (1).png" },
                { name: "Partner 3", logo: "/collaboration/unnamed (2).png" }
              ].map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5
                  }}
                  className="group relative"
                >
                  <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-2xl transition-all duration-500 preserve-3d flex items-center justify-center h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 p-2"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* International Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-serif italic text-slate-800 mb-8 text-center">Collaborations: Abroad</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              {[
                { name: "International Partner 1", logo: "/collaboration/Screenshot 2026-01-26 004220.png" },
                { name: "International Partner 2", logo: "/collaboration/Screenshot 2026-01-26 004213.png" },
                { name: "International Partner 3", logo: "/collaboration/download.png" },
                { name: "International Partner 4", logo: "/collaboration/download (1).png" }
              ].map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5
                  }}
                  className="group relative"
                >
                  <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-2xl transition-all duration-500 preserve-3d flex items-center justify-center h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10 p-2"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Listed by Top Firms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              y: -5,
              scale: 1.02
            }}
            className="text-center"
          >
            <div className="bg-white border border-slate-100 rounded-lg p-10 shadow-sm hover:shadow-2xl transition-all duration-500 preserve-3d relative overflow-hidden">
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-full opacity-50" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-400">Recognition</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif italic text-slate-900 mb-4">
                  Listed by Top Firms
                </h3>
                <div className="w-12 h-px bg-slate-200 mx-auto mb-6" />
                <p className="text-slate-600 font-light text-sm md:text-base max-w-md mx-auto leading-relaxed">
                  Recognized by leading organizations for innovation and excellence in biosensor technology
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
