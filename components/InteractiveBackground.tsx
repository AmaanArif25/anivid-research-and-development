import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveBackgroundProps {
  children: React.ReactNode;
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ children }) => {
  // Floating geometric elements
  const geometricElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 30,
    x: Math.random() * 100,
    y: Math.random() * 100,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
    animationDuration: Math.random() * 25 + 15,
    animationDelay: Math.random() * 8
  }));

  return (
    <div className="relative overflow-hidden">
      {/* Dynamic Wave Background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#1e40af" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#93bbfc" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.28" />
              <stop offset="50%" stopColor="#93bbfc" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.28" />
            </linearGradient>
          </defs>
          
          {/* Multiple wave layers with different gradients */}
          {[1, 2, 3].map((layer) => (
            <motion.path
              key={layer}
              d={`M0,${100 + layer * 50} Q${25 + layer * 10},${80 + layer * 30} ${50 + layer * 15},${100 + layer * 40} T${100 + layer * 20},${100 + layer * 50} L${100 + layer * 20},300 L0,300 Z`}
              fill={`url(#wave-gradient-${layer})`}
              animate={{
                d: [
                  `M0,${100 + layer * 50} Q${25 + layer * 10},${80 + layer * 30} ${50 + layer * 15},${100 + layer * 40} T${100 + layer * 20},${100 + layer * 50} L${100 + layer * 20},300 L0,300 Z`,
                  `M0,${120 + layer * 40} Q${35 + layer * 15},${60 + layer * 35} ${65 + layer * 10},${120 + layer * 30} T${120 + layer * 15},${120 + layer * 40} L${120 + layer * 15},300 L0,300 Z`,
                  `M0,${80 + layer * 60} Q${15 + layer * 20},${100 + layer * 25} ${35 + layer * 20},${80 + layer * 50} T${80 + layer * 25},${80 + layer * 60} L${80 + layer * 25},300 L0,300 Z`,
                  `M0,${100 + layer * 50} Q${25 + layer * 10},${80 + layer * 30} ${50 + layer * 15},${100 + layer * 40} T${100 + layer * 20},${100 + layer * 50} L${100 + layer * 20},300 L0,300 Z`
                ]
              }}
              transition={{
                duration: 10 + layer * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ opacity: 0.8 - layer * 0.1 }}
            />
          ))}
          
          {/* Additional decorative wave patterns */}
          <motion.path
            d="M0,150 Q100,100 200,150 T400,150 L400,300 L0,300 Z"
            fill="url(#wave-gradient-1)"
            animate={{
              d: [
                "M0,150 Q100,100 200,150 T400,150 L400,300 L0,300 Z",
                "M0,180 Q100,130 200,180 T400,180 L400,300 L0,300 Z",
                "M0,120 Q100,70 200,120 T400,120 L400,300 L0,300 Z",
                "M0,150 Q100,100 200,150 T400,150 L400,300 L0,300 Z"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ opacity: 0.5 }}
          />
        </svg>
      </div>

      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {geometricElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              x: [0, 40, -40, 0],
              y: [0, -30, 30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 0.9, 1],
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
                className="rounded-full"
                style={{
                  width: `${element.size}px`,
                  height: `${element.size}px`,
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(96, 165, 250, 0.3) 50%, rgba(219, 234, 254, 0.2) 100%)',
                  border: '2px solid rgba(59, 130, 246, 0.5)',
                  boxShadow: '0 0 25px rgba(59, 130, 246, 0.3)',
                }}
              />
            )}
            {element.shape === 'square' && (
              <motion.div
                style={{
                  width: `${element.size * 0.8}px`,
                  height: `${element.size * 0.8}px`,
                  background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.35) 0%, rgba(59, 130, 246, 0.25) 100%)',
                  border: '2px solid rgba(96, 165, 250, 0.5)',
                  boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
                }}
              />
            )}
            {element.shape === 'triangle' && (
              <motion.div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${element.size/2}px solid transparent`,
                  borderRight: `${element.size/2}px solid transparent`,
                  borderBottom: `${element.size}px solid rgba(59, 130, 246, 0.35)`,
                  filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))',
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Additional floating particles */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default InteractiveBackground;
