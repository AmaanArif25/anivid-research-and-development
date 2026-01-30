import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface InteractiveBackgroundProps {
  children: React.ReactNode;
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cursor spring animation
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        cursorX.set(x);
        cursorY.set(y);
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [cursorX, cursorY]);

  // Floating geometric elements
  const geometricElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
    animationDuration: Math.random() * 20 + 10,
    animationDelay: Math.random() * 5
  }));

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Dynamic Wave Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#1e40af" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          
          {/* Multiple wave layers */}
          {[1, 2, 3].map((layer) => (
            <motion.path
              key={layer}
              d={`M0,${100 + layer * 50} Q${25 + layer * 10},${80 + layer * 30} ${50 + layer * 15},${100 + layer * 40} T${100 + layer * 20},${100 + layer * 50} L${100 + layer * 20},300 L0,300 Z`}
              fill="url(#wave-gradient)"
              animate={{
                d: [
                  `M0,${100 + layer * 50} Q${25 + layer * 10},${80 + layer * 30} ${50 + layer * 15},${100 + layer * 40} T${100 + layer * 20},${100 + layer * 50} L${100 + layer * 20},300 L0,300 Z`,
                  `M0,${120 + layer * 40} Q${35 + layer * 15},${60 + layer * 35} ${65 + layer * 10},${120 + layer * 30} T${120 + layer * 15},${120 + layer * 40} L${120 + layer * 15},300 L0,300 Z`,
                  `M0,${80 + layer * 60} Q${15 + layer * 20},${100 + layer * 25} ${35 + layer * 20},${80 + layer * 50} T${80 + layer * 25},${80 + layer * 60} L${80 + layer * 25},300 L0,300 Z`,
                  `M0,${100 + layer * 50} Q${25 + layer * 10},${80 + layer * 30} ${50 + layer * 15},${100 + layer * 40} T${100 + layer * 20},${100 + layer * 50} L${100 + layer * 20},300 L0,300 Z`
                ]
              }}
              transition={{
                duration: 8 + layer * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ opacity: 0.4 - layer * 0.05 }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {geometricElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -20, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: element.animationDuration,
              delay: element.animationDelay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {element.shape === 'circle' && (
              <motion.div
                className="w-8 h-8 bg-blue-500/20 rounded-full border border-blue-400/30"
                whileHover={{ scale: 1.2, backgroundColor: "#3b82f640" }}
              />
            )}
            {element.shape === 'square' && (
              <motion.div
                className="w-6 h-6 bg-blue-400/20 border border-blue-300/30"
                whileHover={{ scale: 1.2, rotate: 45, backgroundColor: "#60a5fa40" }}
              />
            )}
            {element.shape === 'triangle' && (
              <motion.div
                className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-blue-400/20"
                style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.3))' }}
                whileHover={{ scale: 1.2, borderBottomColor: "#60a5fa40" }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Interactive Cursor Effect */}
      {isHovered && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        >
          {/* Main cursor */}
          <motion.div
            className="w-4 h-4 bg-blue-500/40 rounded-full border border-blue-400/50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Cursor trail */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-4 h-4 bg-blue-400/30 rounded-full border border-blue-300/40"
              style={{
                scale: 1 + i * 0.5,
                opacity: 0.4 - i * 0.1,
              }}
              animate={{
                scale: [1 + i * 0.5, 2 + i * 0.3, 1 + i * 0.5],
                opacity: [0.4 - i * 0.1, 0.2 - i * 0.05, 0.4 - i * 0.1],
              }}
              transition={{
                duration: 1.5 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Mouse-following gradient spotlight */}
      <motion.div
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default InteractiveBackground;
