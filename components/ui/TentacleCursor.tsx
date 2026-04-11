import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TentacleCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isChatPage = location.pathname.includes('/chat');
  
  // Configuration for the tentacle
  const SEGMENT_COUNT = 25;
  const segments = useRef(Array.from({ length: SEGMENT_COUNT }, () => ({ x: 0, y: 0 })));
  const mousePosRef = useRef({ x: -100, y: -100 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatPage) {
      setIsVisible(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      
      if (!isVisible) {
        segments.current = segments.current.map(() => ({ x: e.clientX, y: e.clientY }));
        setIsVisible(true);
      }

      const target = e.target as HTMLElement;
      const isHoverable = target.closest('button, a, input, [data-hoverable="true"], .cursor-pointer');
      setIsHovering(!!isHoverable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, isChatPage]);

  // Animation Loop for Physics
  useEffect(() => {
    if (isChatPage) return;
    
    let animationFrameId: number;

    const animate = () => {
      // Move head to mouse
      let targetX = mousePosRef.current.x;
      let targetY = mousePosRef.current.y;

      if (headRef.current) {
        const scale = headRef.current.dataset.hovering === 'true' ? 1.5 : 1;
        headRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(${scale})`;
      }

      // Update each segment
      segments.current.forEach((segment, i) => {
        // Physics: Follow the leader (or mouse for the first one)
        // The speed factor (0.15) determines the "weight" or drag of the tentacle
        const dx = targetX - segment.x;
        const dy = targetY - segment.y;
        
        // Ease function
        segment.x += dx * 0.25;
        segment.y += dy * 0.25;

        // Set the target for the NEXT segment to be the CURRENT segment's new position
        targetX = segment.x;
        targetY = segment.y;

        // Direct DOM manipulation for maximum performance (bypassing React render cycle)
        const el = document.getElementById(`tentacle-seg-${i}`);
        if (el) {
          el.style.transform = `translate3d(${segment.x}px, ${segment.y}px, 0)`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isChatPage]);

  if (typeof window === 'undefined' || isChatPage) return null;

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          body, body * {
            cursor: none !important;
          }
        }
      `}</style>
      <div 
        ref={cursorRef} 
        className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
      {/* The Head (Target Reticle) */}
      <div 
        ref={headRef}
        data-hovering={isHovering}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-accent rounded-full transition-all duration-200 ease-out"
        style={{ 
          transform: `translate3d(${mousePosRef.current.x}px, ${mousePosRef.current.y}px, 0) scale(${isHovering ? 1.5 : 1})`,
          backgroundColor: isHovering ? 'rgba(0, 208, 245, 0.1)' : 'transparent',
          borderColor: isHovering ? '#00D0F5' : 'rgba(0, 208, 245, 0.5)'
        }}
      >
         <div className="absolute inset-0 bg-accent rounded-full opacity-20 animate-ping" />
      </div>

      {/* The Tentacle Body Segments */}
      {segments.current.map((_, i) => {
        // Calculate size based on index (tapering tail)
        const size = Math.max(2, 12 - (i * 0.4)); 
        const opacity = Math.max(0.1, 1 - (i / SEGMENT_COUNT));
        const color = i % 2 === 0 ? '#00D0F5' : '#084A8E'; // Alternating Corporate Colors

        return (
          <div
            key={i}
            id={`tentacle-seg-${i}`}
            className="fixed top-0 left-0 rounded-full shadow-[0_0_5px_rgba(0,208,245,0.5)] will-change-transform"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginLeft: `-${size / 2}px`, // Center anchor
              marginTop: `-${size / 2}px`,
              opacity: opacity * 0.8,
              backgroundColor: color,
              zIndex: SEGMENT_COUNT - i // Head on top
            }}
          />
        );
      })}
      </div>
    </>
  );
};

export default TentacleCursor;