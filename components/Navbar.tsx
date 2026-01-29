
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team PANTHER', path: '/team-panther' },
    { name: 'PlüKè', path: '/pluke' },
    { name: 'SAPLING Foundation', path: '/sapling' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 h-16 md:h-20 flex items-center justify-between nav-responsive transition-all duration-300">
        <div className="flex items-center gap-2 sm:gap-3 relative z-[70]">
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2" onClick={closeMenu}>
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
              <img src="/logo/ANIVID logo.jpg" alt="ANIVID Research and Development Private Limited" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-bold tracking-tight text-slate-800 leading-tight">
                ANIVID
              </span>
              <span className="text-xs sm:text-sm md:text-sm lg:text-sm font-serif italic text-slate-400 leading-tight hidden sm:block">
                Research and Development Private Limited
              </span>
              <span className="text-xs font-serif italic text-slate-400 leading-tight sm:hidden">
                R&D Pvt Ltd
              </span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative group py-2"
            >
              <span className={`text-xs xl:text-sm font-medium tracking-wide transition-colors duration-300 whitespace-nowrap ${
                location.pathname === item.path ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'
              }`}>
                {item.name}
              </span>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-700"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Tablet Navigation - Simplified */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative group py-2"
            >
              <span className={`text-xs font-medium tracking-wide transition-colors duration-300 whitespace-nowrap ${
                location.pathname === item.path ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'
              }`}>
                {item.name.length > 10 ? item.name.substring(0, 8) + '...' : item.name}
              </span>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-700"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Improved */}
        <div className="flex items-center gap-2 md:hidden relative z-[70]">
          <button 
            className="text-slate-800 p-2 focus:outline-none focus-ring rounded-lg flex flex-col justify-center items-center gap-1.5 w-9 h-9 sm:w-10 sm:h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 sm:w-6 bg-slate-900 block"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 sm:w-6 bg-slate-900 block"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 sm:w-6 bg-slate-900 block"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop with deeper blur to prevent content clash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-white/60 backdrop-blur-2xl z-50 md:hidden"
            />
            
            {/* Sidebar with clean layout and better responsive design */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="fixed inset-y-0 right-0 w-[75%] sm:w-72 md:w-80 bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.08)] z-[60] flex flex-col pt-20 px-6 sm:px-8 md:px-10 border-l border-slate-50 overflow-y-auto"
            >
              <div className="flex flex-col gap-6 py-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.03 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-lg sm:text-xl md:text-2xl font-serif italic transition-colors block py-2 ${
                        location.pathname === item.path ? 'text-blue-700 font-semibold' : 'text-slate-800 hover:text-blue-700'
                      }`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-auto mb-12 border-t border-slate-100 pt-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-4">Inquiries</p>
                <div className="space-y-3">
                  <a href="mailto:raipawan03@gmail.com" className="text-slate-800 text-sm sm:text-base font-serif italic block hover:text-blue-700 transition-colors">
                    raipawan03@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/pawankumar-rai-phd-1b05b0a5/" target="_blank" rel="noopener noreferrer" className="text-slate-800 text-sm sm:text-base font-serif italic block hover:text-blue-700 transition-colors">
                    LinkedIn Profile
                  </a>
                  <p className="text-[8px] uppercase tracking-widest text-slate-300 mt-4">Registered HQ: India</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
