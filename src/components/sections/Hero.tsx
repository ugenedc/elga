'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  overlay?: 'dark' | 'gradient' | 'none';
  height?: 'full' | 'large' | 'medium';
  children?: ReactNode;
  scrollIndicator?: boolean;
}

export default function Hero({
  title,
  subtitle,
  image,
  overlay = 'gradient',
  height = 'full',
  children,
  scrollIndicator = false,
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const heights = {
    full: 'min-h-screen',
    large: 'min-h-[85vh]',
    medium: 'min-h-[70vh]',
  };

  const overlays = {
    dark: 'bg-volcanic-black/40',
    gradient: '', // Using custom vibrant overlay instead
    none: '',
  };

  return (
    <section
      ref={ref}
      className={`relative ${heights[height]} left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen flex items-center justify-center overflow-hidden bg-volcanic-black`}
    >
      {/* Background Image */}
      {image && (
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      )}

      {/* Overlay - Vibrant teal gradient with multiply blend */}
      {overlay === 'gradient' && (
        <>
          {/* Deep teal multiply layer for richness */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#1a3a3a]/30 via-transparent to-[#1a3a3a]/40"
            style={{ mixBlendMode: 'multiply' }}
          />
          {/* Soft vignette for text contrast - very subtle */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-volcanic-black/30" />
          {/* Top and bottom text safety gradients */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-volcanic-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-volcanic-black/40 to-transparent" />
        </>
      )}
      {overlay === 'dark' && (
        <div className={`absolute inset-0 ${overlays[overlay]}`} />
      )}

      {/* Sacred Geometry Frame */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top corners */}
        <div className="absolute top-8 left-8 w-16 h-16 md:w-24 md:h-24 border-t border-l border-sacred-gold/30" />
        <div className="absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24 border-t border-r border-sacred-gold/30" />
        {/* Bottom corners */}
        <div className="absolute bottom-8 left-8 w-16 h-16 md:w-24 md:h-24 border-b border-l border-sacred-gold/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 md:w-24 md:h-24 border-b border-r border-sacred-gold/30" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-elga text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            text-rice-cream mb-6 max-w-5xl mx-auto leading-[1.1]"
          style={{ 
            textShadow: '0 2px 8px rgba(0,0,0,0.7), 0 4px 20px rgba(0,0,0,0.5), 0 8px 40px rgba(0,0,0,0.4)' 
          }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-rice-cream max-w-2xl mx-auto leading-relaxed"
            style={{ 
              textShadow: '0 1px 4px rgba(0,0,0,0.8), 0 2px 12px rgba(0,0,0,0.6), 0 4px 24px rgba(0,0,0,0.4)' 
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      {scrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-6 h-10 rounded-full border border-sacred-gold/50 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-sacred-gold rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
