'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'dark' | 'outlined';
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = 'default',
}: FeatureCardProps) {
  const variants = {
    default: {
      bg: 'bg-rice-white',
      border: 'border-sand-light hover:border-sacred-gold',
      title: 'text-volcanic-black',
      desc: 'text-temple-stone',
      icon: 'text-sacred-gold bg-sacred-gold/10',
    },
    dark: {
      bg: 'bg-volcanic-black/40 backdrop-blur-sm',
      border: 'border-rice-cream/10 hover:border-sacred-gold/50',
      title: 'text-rice-cream',
      desc: 'text-rice-cream/60',
      icon: 'text-sacred-gold bg-sacred-gold/10',
    },
    outlined: {
      bg: 'bg-transparent',
      border: 'border-temple-stone/30 hover:border-sacred-gold',
      title: 'text-volcanic-black',
      desc: 'text-temple-stone',
      icon: 'text-sacred-gold bg-transparent border border-sacred-gold/30',
    },
  };

  const style = variants[variant];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`
        ${style.bg} ${style.border}
        border p-6 md:p-8
        transition-all duration-400
        group
      `}
    >
      {icon && (
        <div
          className={`
            w-12 h-12 rounded-full ${style.icon}
            flex items-center justify-center mb-5
            transition-transform duration-300 group-hover:scale-110
          `}
        >
          {icon}
        </div>
      )}
      <h3 className={`font-heading text-xl md:text-2xl mb-3 ${style.title}`}>
        {title}
      </h3>
      <p className={`leading-relaxed ${style.desc}`}>{description}</p>
    </motion.div>
  );
}
