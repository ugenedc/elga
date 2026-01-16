'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'dark';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-sacred-gold/10 text-sacred-gold border-sacred-gold/20',
    dark: 'bg-volcanic-black/80 text-sacred-gold border-sacred-gold/30',
  };

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        inline-flex items-center gap-2 px-4 py-2
        text-xs font-semibold tracking-widest uppercase
        border ${variants[variant]} ${className}
      `}
    >
      <span className="w-1.5 h-1.5 bg-sacred-gold rounded-full animate-pulse" />
      {children}
    </motion.span>
  );
}
