'use client';

import { useTranslations } from '@/lib/translations';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  NavBar,
  Footer,
  Hero,
  Badge,
  Button,
  StatCard,
  FeatureCard,
  CTASection,
  SectionReveal,
  GeometricDivider,
  StaggerContainer,
  StaggerItem,
} from '@/components';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main className="bg-rice-cream w-full min-w-full overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="/images/generated/hero-bali-coast.png"
        scrollIndicator
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/get-involved" variant="primary" size="lg">
            {t('hero.cta')}
          </Button>
        </div>
      </Hero>

      {/* Vision Section */}
      <section className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Philosophy */}
            <SectionReveal>
              <Badge>{t('vision.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6 mb-6">
                {t('vision.title')}
              </h2>
              <p className="text-lg text-temple-stone leading-relaxed mb-8">
                {t('vision.description')}
              </p>

              {/* Tri Hita Karana */}
              <div className="bg-volcanic-black/5 p-6 md:p-8 border border-sand-light">
                <h3 className="font-heading text-xl text-volcanic-black mb-2">
                  {t('vision.philosophy.title')}
                </h3>
                <p className="text-temple-stone mb-6">
                  {t('vision.philosophy.description')}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {(['parahyangan', 'pawongan', 'palemahan'] as const).map((principle) => (
                    <div key={principle} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sacred-gold/10 flex items-center justify-center">
                        <TriHitaKaranaIcon type={principle} />
                      </div>
                      <h4 className="font-heading text-sm text-volcanic-black mb-1">
                        {t(`vision.philosophy.${principle}.title`)}
                      </h4>
                      <p className="text-xs text-temple-stone">
                        {t(`vision.philosophy.${principle}.description`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* Right: Image */}
            <SectionReveal delay={0.2} direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/generated/temple-offerings.png"
                  alt="Balinese offerings"
                  fill
                  className="object-cover"
                />
                {/* Sacred frame overlay */}
                <div className="absolute inset-4 border border-sacred-gold/30 pointer-events-none" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <GeometricDivider variant="sacred" />

      {/* Partnership Section */}
      <section className="section-padding bg-volcanic-black text-rice-cream overflow-hidden">
        <div className="container-elga">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge variant="dark">{t('partnership.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-6 mb-6">
                {t('partnership.title')}
              </h2>
              <p className="text-lg text-rice-cream/70 max-w-2xl mx-auto">
                {t('partnership.description')}
              </p>
            </SectionReveal>
          </div>

          {/* Partnership Circles */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-0.5">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full h-full bg-gradient-to-r from-sacred-gold/50 via-sacred-gold to-sacred-gold/50"
              />
            </div>

            {/* Balinese Ownership */}
            <SectionReveal direction="right">
              <div className="bg-rice-cream/5 border border-rice-cream/10 p-8 md:p-10 relative overflow-hidden group hover:border-sacred-gold/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sacred-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-heading text-2xl md:text-3xl text-sacred-gold mb-6">
                  {t('partnership.balinese.title')}
                </h3>
                <ul className="space-y-4">
                  {(t.raw('partnership.balinese.points') as string[]).map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-sacred-gold rounded-full flex-shrink-0" />
                      <span className="text-rice-cream/80">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            {/* Australian Alliance */}
            <SectionReveal direction="left">
              <div className="bg-rice-cream/5 border border-rice-cream/10 p-8 md:p-10 relative overflow-hidden group hover:border-sacred-gold/30 transition-colors duration-500">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-jungle-deep/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                <h3 className="font-heading text-2xl md:text-3xl text-sacred-gold mb-6">
                  {t('partnership.australian.title')}
                </h3>
                <ul className="space-y-4">
                  {(t.raw('partnership.australian.points') as string[]).map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 w-1.5 h-1.5 bg-sacred-gold rounded-full flex-shrink-0" />
                      <span className="text-rice-cream/80">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Impact Preview Section */}
      <section className="section-padding bg-rice-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="pattern-offerings w-full h-full" />
        </div>

        <div className="container-elga relative">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge>{t('impact.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6">
                {t('impact.title')}
              </h2>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {(['diverted', 'plastic', 'organic', 'jobs'] as const).map((stat) => (
              <StaggerItem key={stat}>
                <StatCard
                  value={t(`impact.stats.${stat}.value`)}
                  unit={t(`impact.stats.${stat}.unit`)}
                  label={t(`impact.stats.${stat}.label`)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        primaryCTA={{
          label: t('cta.primary'),
          href: '/get-involved',
        }}
        secondaryCTA={{
          label: t('cta.secondary'),
          href: '/approach',
        }}
        variant="pattern"
      />

      <Footer />
    </main>
  );
}

function TriHitaKaranaIcon({ type }: { type: 'parahyangan' | 'pawongan' | 'palemahan' }) {
  const icons = {
    parahyangan: (
      <svg className="w-6 h-6 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L14.5 9H21L15.5 13.5L17.5 21L12 17L6.5 21L8.5 13.5L3 9H9.5L12 2Z" />
      </svg>
    ),
    pawongan: (
      <svg className="w-6 h-6 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20" />
      </svg>
    ),
    palemahan: (
      <svg className="w-6 h-6 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22C12 22 4 16 4 10C4 6 8 2 12 2C16 2 20 6 20 10C20 16 12 22 12 22Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  };
  return icons[type];
}
