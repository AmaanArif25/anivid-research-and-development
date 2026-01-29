import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white footer-responsive">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start mb-12">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-serif font-bold italic leading-tight">ANIVID Research and Development Private Limited</h3>
            <p className="text-slate-400 font-light leading-relaxed text-xs md:text-sm text-justify-pro">
              Innovating Biosensors for a Healthier, Safer World. Bridging laboratory science and real-world impact through biotechnology.
            </p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[9px] uppercase font-bold tracking-[0.2em] text-slate-200">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-light">
              <a href="#/" className="hover:text-white transition-colors">Home</a>
              <a href="#/about" className="hover:text-white transition-colors">About</a>
              <a href="#/services" className="hover:text-white transition-colors">Services</a>
              <a href="#/team-panther" className="hover:text-white transition-colors">Team PANTHER</a>
              <a href="#/pluke" className="hover:text-white transition-colors">PlüKè™</a>
              <a href="#/sapling" className="hover:text-white transition-colors">SAPLING Foundation™</a>
              <a href="#/blog" className="hover:text-white transition-colors">Quantum Thoughts™</a>
              <a href="#/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[9px] uppercase font-bold tracking-[0.2em] text-slate-200 text-center md:text-left">Contact</h4>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a href="mailto:raipawan03@gmail.com" className="flex items-center gap-2 text-xs text-slate-400 font-light hover:text-white transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="break-all">raipawan03@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/pawankumar-rai-phd-1b05b0a5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-slate-400 font-light hover:text-white transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 md:pt-8 border-t border-slate-800 flex flex-col justify-center items-center gap-4">
          <p className="text-[9px] md:text-[10px] text-slate-500 font-light text-center">
            © 2026 ANIVID Research and Development Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;