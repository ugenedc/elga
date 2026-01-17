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

// Floating light orb component for magical atmosphere
function FloatingOrb({ delay, duration, size, left, top }: { 
  delay: number; 
  duration: number; 
  size: number; 
  left: string; 
  top: string; 
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        top,
        background: 'radial-gradient(circle, rgba(201,169,98,0.15) 0%, transparent 70%)',
        filter: 'blur(2px)',
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const heights = {
    full: 'min-h-screen',
    large: 'min-h-[85vh]',
    medium: 'min-h-[70vh]',
  };

  return (
    <section
      ref={ref}
      className={`relative ${heights[height]} left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen flex items-center justify-center overflow-hidden bg-volcanic-black`}
    >
      {/* Background Image with Ken Burns effect */}
      {image && (
        <motion.div 
          style={{ y, scale }} 
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src={image}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Top vignette for navigation */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-volcanic-black/70 via-volcanic-black/30 to-transparent z-[5]" />

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-volcanic-black/50 to-transparent" />

      {/* Overlay - Subtle colored multiply gradient */}
      {overlay === 'gradient' && (
        <>
          {/* Deep teal/ocean multiply layer - adds richness */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#1E4D5C]/20 via-[#1a3a3a]/10 to-[#1E4D5C]/25"
            style={{ mixBlendMode: 'multiply' }}
          />
          {/* Radial vignette from edges */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, rgba(26,26,26,0.3) 100%)',
            }}
          />
        </>
      )}
      {overlay === 'dark' && (
        <div className="absolute inset-0 bg-volcanic-black/40" />
      )}

      {/* Floating orbs for magical atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb delay={0} duration={8} size={150} left="10%" top="20%" />
        <FloatingOrb delay={2} duration={10} size={100} left="80%" top="30%" />
        <FloatingOrb delay={4} duration={12} size={80} left="20%" top="70%" />
        <FloatingOrb delay={1} duration={9} size={120} left="70%" top="60%" />
        <FloatingOrb delay={3} duration={11} size={60} left="50%" top="15%" />
      </div>

      {/* Subtle film grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Sacred Geometry Frame with glow */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Top corners */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-8 left-8 w-16 h-16 md:w-24 md:h-24 border-t border-l border-sacred-gold/40"
          style={{ boxShadow: '0 0 20px rgba(201,169,98,0.1)' }}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24 border-t border-r border-sacred-gold/40"
          style={{ boxShadow: '0 0 20px rgba(201,169,98,0.1)' }}
        />
        {/* Bottom corners */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-8 left-8 w-16 h-16 md:w-24 md:h-24 border-b border-l border-sacred-gold/40"
          style={{ boxShadow: '0 0 20px rgba(201,169,98,0.1)' }}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 right-8 w-16 h-16 md:w-24 md:h-24 border-b border-r border-sacred-gold/40"
          style={{ boxShadow: '0 0 20px rgba(201,169,98,0.1)' }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-elga text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            text-rice-cream mb-6 max-w-5xl mx-auto leading-[1.1]"
          style={{
            textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 0 60px rgba(0,0,0,0.3)',
          }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-rice-cream/90 max-w-2xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 1px 10px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.3)',
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
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <div 
              className="w-7 h-11 rounded-full border-2 border-sacred-gold/60 flex justify-center pt-2"
              style={{ boxShadow: '0 0 20px rgba(201,169,98,0.2)' }}
            >
              <motion.div
                animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2.5 bg-sacred-gold rounded-full"
                style={{ boxShadow: '0 0 10px rgba(201,169,98,0.5)' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
