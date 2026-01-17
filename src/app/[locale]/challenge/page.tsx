'use client';

import { useTranslations } from '@/lib/translations';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  NavBar,
  Footer,
  Hero,
  Badge,
  Button,
  FeatureCard,
  CTASection,
  SectionReveal,
  GeometricDivider,
  StaggerContainer,
  StaggerItem,
} from '@/components';

export default function ChallengePage() {
  const t = useTranslations('challenge');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  return (
    <main className="bg-rice-cream">
      <NavBar />

      {/* Hero */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="/images/generated/restored-river.jpg"
        height="large"
      />

      {/* Crisis Section */}
      <section className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <Badge>{t('crisis.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6 mb-6">
                {t('crisis.title')}
              </h2>
              <p className="text-lg text-temple-stone leading-relaxed mb-8">
                {t('crisis.description')}
              </p>

              {/* Waste Amount Visualization */}
              <div className="bg-volcanic-black p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="pattern-offerings w-full h-full" />
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <span className="font-heading text-5xl md:text-7xl text-gradient-gold">
                    1.6-1.8
                  </span>
                  <span className="block text-sacred-gold text-xl md:text-2xl mt-2">
                    million tonnes
                  </span>
                  <span className="block text-rice-cream/60 text-sm mt-2">
                    of waste generated annually in Bali
                  </span>
                </motion.div>
              </div>
            </SectionReveal>

            {/* Drivers Grid */}
            <SectionReveal delay={0.2}>
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {(['population', 'tourism', 'consumption', 'responsibility'] as const).map((driver) => (
                  <StaggerItem key={driver}>
                    <div className="bg-rice-white border border-sand-light p-6 hover:border-sacred-gold transition-colors duration-300">
                      <h4 className="font-heading text-xl md:text-2xl text-volcanic-black mb-2">
                        {t(`crisis.drivers.${driver}.title`)}
                      </h4>
                      <p className="text-sm text-temple-stone">
                        {t(`crisis.drivers.${driver}.description`)}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SectionReveal>
          </div>
        </div>
      </section>

      <GeometricDivider variant="temple" />

      {/* Infrastructure Section */}
      <section className="section-padding bg-volcanic-black text-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <SectionReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
                <Image
                  src="/images/generated/processing-facility.jpg"
                  alt="Processing facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-volcanic-black/50 to-transparent" />
              </div>
            </SectionReveal>

            <div className="order-1 lg:order-2">
              <SectionReveal>
                <Badge variant="dark">{t('infrastructure.badge')}</Badge>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-6 mb-6">
                  {t('infrastructure.title')}
                </h2>
                <p className="text-lg text-rice-cream/70 leading-relaxed mb-8">
                  {t('infrastructure.description')}
                </p>
              </SectionReveal>

              <StaggerContainer className="space-y-4">
                {(t.raw('infrastructure.issues') as string[]).map((issue, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 bg-rice-cream/5 p-4 border-l-2 border-sacred-gold/50 hover:border-sacred-gold transition-colors duration-300"
                    >
                      <span className="text-sacred-gold font-heading text-xl">0{index + 1}</span>
                      <span className="text-rice-cream/80">{issue}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="section-padding bg-rice-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="pattern-offerings w-full h-full" />
        </div>

        <div className="container-elga relative">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge>{t('consequences.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6 mb-6">
                {t('consequences.title')}
              </h2>
              <p className="text-lg text-temple-stone max-w-2xl mx-auto">
                {t('consequences.description')}
              </p>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t.raw('consequences.points') as Array<{ title: string; description: string }>).map((point, index) => (
              <StaggerItem key={index}>
                <FeatureCard
                  icon={<ConsequenceIcon index={index} />}
                  title={point.title}
                  description={point.description}
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
          label: t('cta.button'),
          href: `/${locale}/approach`,
        }}
        backgroundImage="/images/generated/clean-beach-sunset.jpg"
      />

      <Footer />
    </main>
  );
}

function ConsequenceIcon({ index }: { index: number }) {
  const icons = [
    // Rivers and Oceans
    <svg key="rivers" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12C2 12 5 8 12 8C19 8 22 12 22 12" />
      <path d="M2 18C2 18 5 14 12 14C19 14 22 18 22 18" />
      <path d="M12 3V8" />
    </svg>,
    // Marine Life
    <svg key="marine" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 12C2 12 5 6 12 6C19 6 22 12 22 12C22 12 19 18 12 18C5 18 2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>,
    // Sacred Spaces
    <svg key="sacred" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L16 8H8L12 2Z" />
      <path d="M8 8H16V22H8V8Z" />
      <path d="M10 14H14" />
    </svg>,
    // Community Health
    <svg key="health" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21C12 21 4 15 4 9C4 5 8 2 12 6C16 2 20 5 20 9C20 15 12 21 12 21Z" />
    </svg>,
  ];
  return icons[index] || icons[0];
}
