'use client';

import { useTranslations } from '@/lib/translations';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  NavBar,
  Footer,
  Hero,
  Badge,
  FeatureCard,
  CTASection,
  SectionReveal,
  GeometricDivider,
  StaggerContainer,
  StaggerItem,
} from '@/components';

export default function ApproachPage() {
  const t = useTranslations('approach');

  return (
    <main className="bg-rice-cream">
      <NavBar />

      {/* Hero */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="/images/generated/hero-rice-terraces.png"
        height="large"
      />

      {/* What Makes Us Different */}
      <section className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge>{t('difference.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6">
                {t('difference.title')}
              </h2>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {(t.raw('difference.points') as Array<{ title: string; description: string }>).map((point, index) => (
              <StaggerItem key={index}>
                <div className="h-full bg-rice-white border border-sand-light p-8 hover:border-sacred-gold transition-colors duration-300 group">
                  <div className="w-16 h-16 rounded-full bg-sacred-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <DifferenceIcon index={index} />
                  </div>
                  <h3 className="font-heading text-2xl text-volcanic-black mb-4">
                    {point.title}
                  </h3>
                  <p className="text-temple-stone leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <GeometricDivider variant="sacred" />

      {/* Collection Section */}
      <section className="section-padding bg-volcanic-black text-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <Badge variant="dark">{t('collection.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-6 mb-6">
                {t('collection.title')}
              </h2>
              <p className="text-lg text-rice-cream/70 leading-relaxed mb-8">
                {t('collection.description')}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {(t.raw('collection.features') as string[]).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-2 h-2 bg-sacred-gold rounded-full flex-shrink-0" />
                    <span className="text-rice-cream/80 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2} direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/generated/collection-team.png"
                  alt="Collection team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-4 border border-sacred-gold/30 pointer-events-none" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Processing Section */}
      <section className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal direction="right" className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/generated/processing-facility.png"
                  alt="Processing facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-4 border border-sacred-gold/30 pointer-events-none" />
              </div>
            </SectionReveal>

            <SectionReveal className="order-1 lg:order-2">
              <Badge>{t('processing.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6 mb-6">
                {t('processing.title')}
              </h2>
              <p className="text-lg text-temple-stone leading-relaxed mb-8">
                {t('processing.description')}
              </p>

              <div className="space-y-4">
                {(t.raw('processing.features') as string[]).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 bg-volcanic-black/5 p-4 border-l-2 border-sacred-gold/50 hover:border-sacred-gold transition-colors duration-300"
                  >
                    <span className="text-sacred-gold font-heading text-xl">0{index + 1}</span>
                    <span className="text-volcanic-black">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <GeometricDivider variant="wave" />

      {/* Circular Economy Section */}
      <section className="section-padding bg-jungle-deep text-rice-cream relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <circle cx="200" cy="200" r="150" fill="none" stroke="#C9A962" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="100" fill="none" stroke="#C9A962" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="50" fill="none" stroke="#C9A962" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="container-elga relative">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge variant="dark">{t('circular.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-6 mb-6">
                {t('circular.title')}
              </h2>
              <p className="text-lg text-rice-cream/70 max-w-2xl mx-auto">
                {t('circular.description')}
              </p>
            </SectionReveal>
          </div>

          {/* Circular Economy Diagram */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-24 h-24 rounded-full bg-sacred-gold flex items-center justify-center"
              >
                <svg className="w-12 h-12 text-volcanic-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22C12 22 4 16 4 10C4 6 8 2 12 2C16 2 20 6 20 10C20 16 12 22 12 22Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </motion.div>
            </div>

            {/* Outcomes */}
            <StaggerContainer className="grid md:grid-cols-3 gap-8 py-16">
              {(t.raw('circular.outcomes') as Array<{ title: string; description: string }>).map((outcome, index) => (
                <StaggerItem key={index}>
                  <div className="text-center bg-rice-cream/10 backdrop-blur-sm border border-rice-cream/20 p-8 hover:border-sacred-gold/50 transition-colors duration-300">
                    <CircularIcon index={index} />
                    <h3 className="font-heading text-2xl text-sacred-gold mt-6 mb-3">
                      {outcome.title}
                    </h3>
                    <p className="text-rice-cream/70">
                      {outcome.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to See Our Impact?"
        description="Discover how our approach is creating measurable change across Bali."
        primaryCTA={{
          label: 'View Our Impact',
          href: '/impact',
        }}
        secondaryCTA={{
          label: 'Join the Movement',
          href: '/get-involved',
        }}
        variant="pattern"
      />

      <Footer />
    </main>
  );
}

function DifferenceIcon({ index }: { index: number }) {
  const icons = [
    // Balinese-owned
    <svg key="owned" className="w-8 h-8 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6V12L16 14" />
    </svg>,
    // End-to-end
    <svg key="e2e" className="w-8 h-8 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12H20M4 12L8 8M4 12L8 16M20 12L16 8M20 12L16 16" />
    </svg>,
    // Restoration
    <svg key="restore" className="w-8 h-8 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22C12 22 4 16 4 10C4 6 8 2 12 2C16 2 20 6 20 10C20 16 12 22 12 22Z" />
      <path d="M12 8V14M12 14L9 11M12 14L15 11" />
    </svg>,
  ];
  return icons[index] || icons[0];
}

function CircularIcon({ index }: { index: number }) {
  const icons = [
    // Compost
    <div key="compost" className="w-16 h-16 mx-auto rounded-full bg-sacred-gold/20 flex items-center justify-center">
      <svg className="w-8 h-8 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C12 22 4 14 4 9C4 5.5 7.5 2 12 2C16.5 2 20 5.5 20 9C20 14 12 22 12 22Z" />
        <path d="M12 2C12 2 12 10 12 14" />
        <path d="M8 7C8 7 10 9 12 9C14 9 16 7 16 7" />
      </svg>
    </div>,
    // Plastics
    <div key="plastics" className="w-16 h-16 mx-auto rounded-full bg-sacred-gold/20 flex items-center justify-center">
      <svg className="w-8 h-8 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15 8H9L12 2Z" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <path d="M9 20H15" />
      </svg>
    </div>,
    // Data
    <div key="data" className="w-16 h-16 mx-auto rounded-full bg-sacred-gold/20 flex items-center justify-center">
      <svg className="w-8 h-8 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9H21" />
        <path d="M9 21V9" />
      </svg>
    </div>,
  ];
  return icons[index] || icons[0];
}
