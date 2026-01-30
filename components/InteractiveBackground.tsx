import React, { useEffect, useRef, useState } from 'react';

interface InteractiveBackgroundProps {
  children: React.ReactNode;
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      
      // Create dispersing particles on mouse move
      if (Math.random() > 0.9) { // 10% chance to create particle
        const newParticle = {
          id: Date.now() + Math.random(),
          x: x,
          y: y
        };
        
        setParticles(prev => [...prev, newParticle]);
        
        // Remove particle after animation
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, 1000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {/* Wave Background Elements */}
      <div className="wave-background">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      {/* Floating Elements */}
      <div className="floating-element circle" style={{ top: '10%', left: '10%' }} />
      <div className="floating-element square" style={{ top: '20%', right: '15%' }} />
      <div className="floating-element triangle" style={{ bottom: '30%', left: '20%' }} />
      <div className="floating-element circle" style={{ bottom: '15%', right: '10%' }} />
      <div className="floating-element square" style={{ top: '50%', left: '5%' }} />
      <div className="floating-element triangle" style={{ top: '70%', right: '25%' }} />

      {/* Cursor Proximity Glow */}
      <div 
        className="cursor-proximity-zone"
        style={{
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
        }}
      >
        <div className="proximity-glow" />
      </div>

      {/* Dispersing Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="dispersing-element active"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="dispersing-particle"
              style={{
                '--tx': `${(Math.random() - 0.5) * 100}px`,
                '--ty': `${(Math.random() - 0.5) * 100}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      ))}

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default InteractiveBackground;
