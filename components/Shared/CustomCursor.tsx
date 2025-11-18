'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  // Only show on desktop (non-touch devices)
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Wedding Rings Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          rotate: isHovering ? [0, 180, 360] : [0, 90, 180, 270, 360],
        }}
        transition={{ 
          scale: { duration: 0.2 },
          rotate: { 
            duration: isHovering ? 0.5 : 3,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Main Diamond/Sparkle - 4-pointed star */}
          {/* Top point */}
          <path
            d="M 16 4 L 18 10 L 16 12 L 14 10 Z"
            fill="rgba(236, 72, 153, 0.9)"
            stroke="rgba(236, 72, 153, 1)"
            strokeWidth="1.5"
          />
          
          {/* Right point */}
          <path
            d="M 28 16 L 22 18 L 20 16 L 22 14 Z"
            fill="rgba(245, 158, 11, 0.9)"
            stroke="rgba(245, 158, 11, 1)"
            strokeWidth="1.5"
          />
          
          {/* Bottom point */}
          <path
            d="M 16 28 L 18 22 L 16 20 L 14 22 Z"
            fill="rgba(236, 72, 153, 0.9)"
            stroke="rgba(236, 72, 153, 1)"
            strokeWidth="1.5"
          />
          
          {/* Left point */}
          <path
            d="M 4 16 L 10 18 L 12 16 L 10 14 Z"
            fill="rgba(245, 158, 11, 0.9)"
            stroke="rgba(245, 158, 11, 1)"
            strokeWidth="1.5"
          />
          
          {/* Center diamond */}
          <path
            d="M 16 12 L 20 16 L 16 20 L 12 16 Z"
            fill="rgba(255, 255, 255, 0.8)"
            stroke="rgba(236, 72, 153, 0.9)"
            strokeWidth="1.5"
          />
          
          {/* Small sparkles around */}
          {/* Top small sparkle */}
          <circle
            cx="16"
            cy="6"
            r="1.5"
            fill="rgba(245, 158, 11, 0.9)"
          />
          
          {/* Right small sparkle */}
          <circle
            cx="26"
            cy="16"
            r="1.5"
            fill="rgba(236, 72, 153, 0.9)"
          />
          
          {/* Bottom small sparkle */}
          <circle
            cx="16"
            cy="26"
            r="1.5"
            fill="rgba(245, 158, 11, 0.9)"
          />
          
          {/* Left small sparkle */}
          <circle
            cx="6"
            cy="16"
            r="1.5"
            fill="rgba(236, 72, 153, 0.9)"
          />
        </svg>
      </motion.div>
    </>
  );
}

