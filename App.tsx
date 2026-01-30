
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import './styles/global.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TeamPanther from './pages/TeamPanther';
import Pluke from './pages/Pluke';
import Sapling from './pages/Sapling';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <main className="flex-grow">
          {children}
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <InteractiveBackground>
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/team-panther" element={<PageWrapper><TeamPanther /></PageWrapper>} />
          <Route path="/pluke" element={<PageWrapper><Pluke /></PageWrapper>} />
          <Route path="/sapling" element={<PageWrapper><Sapling /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </InteractiveBackground>
    </Router>
  );
};

export default App;
