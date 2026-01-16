'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface GeometricDividerProps {
  variant?: 'sacred' | 'temple' | 'wave';
  className?: string;
}

export default function GeometricDivider({
  variant = 'sacred',
  className = '',
}: GeometricDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const renderPattern = () => {
    switch (variant) {
      case 'sacred':
        return (
          <div className="flex items-center justify-center gap-4 w-full">
            {/* Left line */}
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sacred-gold/30 to-sacred-gold/30" />
            
            {/* Left dot */}
            <div className="w-1.5 h-1.5 rounded-full bg-sacred-gold/40" />
            
            {/* Center ornament */}
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-sacred-gold/40 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-sacred-gold/60" />
              </div>
            </div>
            
            {/* Right dot */}
            <div className="w-1.5 h-1.5 rounded-full bg-sacred-gold/40" />
            
            {/* Right line */}
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-sacred-gold/30 to-sacred-gold/30" />
          </div>
        );
      case 'temple':
        return (
          <div className="flex items-center justify-center gap-3 w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-sacred-gold/30" />
            <div className="w-2 h-2 rotate-45 border border-sacred-gold/50" />
            <div className="w-3 h-3 rotate-45 bg-sacred-gold/30" />
            <div className="w-2 h-2 rotate-45 border border-sacred-gold/50" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-sacred-gold/30" />
          </div>
        );
      case 'wave':
        return (
          <div className="flex items-center justify-center w-full">
            <svg className="w-full max-w-2xl h-8" viewBox="0 0 400 30" preserveAspectRatio="xMidYMid meet">
              <path
                d="M0,15 Q50,5 100,15 T200,15 T300,15 T400,15"
                fill="none"
                stroke="#C9A962"
                strokeWidth="1"
                opacity="0.4"
              />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={`py-8 overflow-hidden ${className}`}
    >
      {renderPattern()}
    </motion.div>
  );
}
