'use client';

import { motion } from 'framer-motion';
import CountUp from '../animations/CountUp';

interface StatCardProps {
  value: string | number;
  unit?: string;
  label: string;
  variant?: 'default' | 'dark';
}

export default function StatCard({ value, unit, label, variant = 'default' }: StatCardProps) {
  const isNumber = typeof value === 'number' || !isNaN(Number(value.toString().replace(/[^0-9]/g, '')));
  const numericValue = typeof value === 'number' ? value : parseInt(value.toString().replace(/[^0-9]/g, ''), 10);
  const hasPlus = typeof value === 'string' && value.includes('+');

  const variants = {
    default: {
      bg: 'bg-rice-white',
      border: 'border-sand-light hover:border-sacred-gold',
      value: 'text-volcanic-black',
      unit: 'text-sacred-gold',
      label: 'text-temple-stone',
    },
    dark: {
      bg: 'bg-volcanic-black/40',
      border: 'border-rice-cream/10 hover:border-sacred-gold/50',
      value: 'text-rice-cream',
      unit: 'text-sacred-gold',
      label: 'text-rice-cream/60',
    },
  };

  const style = variants[variant];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`
        ${style.bg} ${style.border}
        border p-6 md:p-8 text-center
        transition-all duration-400
      `}
    >
      <div className={`font-heading text-4xl md:text-5xl lg:text-6xl mb-2 ${style.value}`}>
        {isNumber ? (
          <CountUp target={numericValue} suffix={hasPlus ? '+' : ''} />
        ) : (
          value
        )}
        {unit && <span className={`text-2xl md:text-3xl ml-1 ${style.unit}`}>{unit}</span>}
      </div>
      <p className={`text-sm md:text-base ${style.label}`}>{label}</p>
    </motion.div>
  );
}
