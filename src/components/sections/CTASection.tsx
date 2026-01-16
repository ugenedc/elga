'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import SectionReveal from '../animations/SectionReveal';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  variant?: 'dark' | 'light' | 'pattern';
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  variant = 'dark',
}: CTASectionProps) {
  const variants = {
    dark: 'bg-volcanic-deep text-rice-cream',
    light: 'bg-rice-cream text-volcanic-black',
    pattern: 'bg-volcanic-black text-rice-cream',
  };

  return (
    <section className={`relative overflow-hidden ${variants[variant]}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-volcanic-black/60" />
        </div>
      )}

      {/* Pattern Background */}
      {variant === 'pattern' && (
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-temple-gate w-full h-full" />
        </div>
      )}

      {/* Content */}
      <div className="relative container-elga section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              {title}
            </h2>
          </SectionReveal>

          {description && (
            <SectionReveal delay={0.1}>
              <p
                className={`text-lg mb-10 ${
                  variant === 'light' ? 'text-temple-stone' : 'text-rice-cream/70'
                }`}
              >
                {description}
              </p>
            </SectionReveal>
          )}

          <SectionReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Button href={primaryCTA.href} variant="primary" size="lg">
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="secondary" size="lg">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-32 h-32 border-t border-l border-sacred-gold/20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-sacred-gold/20"
      />
    </section>
  );
}
