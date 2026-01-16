'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  NavBar,
  Footer,
  Hero,
  Badge,
  StatCard,
  CTASection,
  SectionReveal,
  GeometricDivider,
  StaggerContainer,
  StaggerItem,
} from '@/components';

export default function ImpactPage() {
  const t = useTranslations('impact');
  const homeT = useTranslations('home');

  return (
    <main className="bg-rice-cream">
      <NavBar />

      {/* Hero */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="/images/generated/clean-beach-sunset.png"
        height="large"
      />

      {/* Metrics Section */}
      <section className="section-padding bg-rice-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="pattern-offerings w-full h-full" />
        </div>

        <div className="container-elga relative">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge>{t('metrics.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6 mb-6">
                {t('metrics.title')}
              </h2>
              <p className="text-lg text-temple-stone max-w-2xl mx-auto">
                {t('metrics.description')}
              </p>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {(['diverted', 'plastic', 'organic', 'jobs'] as const).map((stat) => (
              <StaggerItem key={stat}>
                <StatCard
                  value={homeT(`impact.stats.${stat}.value`)}
                  unit={homeT(`impact.stats.${stat}.unit`)}
                  label={homeT(`impact.stats.${stat}.label`)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Additional Impact Metrics */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <SectionReveal>
              <div className="text-center p-8 bg-volcanic-black text-rice-cream">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <span className="font-heading text-5xl text-gradient-gold">85%</span>
                </motion.div>
                <p className="text-rice-cream/70">Waste Diversion Rate</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="text-center p-8 bg-volcanic-black text-rice-cream">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <span className="font-heading text-5xl text-gradient-gold">120+</span>
                </motion.div>
                <p className="text-rice-cream/70">Partner Businesses</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="text-center p-8 bg-volcanic-black text-rice-cream">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <span className="font-heading text-5xl text-gradient-gold">45</span>
                </motion.div>
                <p className="text-rice-cream/70">Villages Served</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <GeometricDivider variant="sacred" />

      {/* Before/After Section */}
      <section className="section-padding bg-volcanic-black text-rice-cream">
        <div className="container-elga">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge variant="dark">{t('stories.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-6">
                {t('stories.title')}
              </h2>
            </SectionReveal>
          </div>

          {/* Image Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <SectionReveal>
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/generated/restored-river.png"
                    alt="Restored river"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-heading text-xl text-sacred-gold mb-2">
                    River Restoration
                  </h3>
                  <p className="text-rice-cream/70">
                    Working with local communities to restore the Ayung River watershed,
                    reducing plastic flow to the ocean by 75%.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/generated/children-nature.png"
                    alt="Children in nature"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-heading text-xl text-sacred-gold mb-2">
                    Healthier Communities
                  </h3>
                  <p className="text-rice-cream/70">
                    Children now play in clean environments, with reduced exposure
                    to burning waste and contaminated water.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/generated/composting-garden.png"
                    alt="Composting garden"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-heading text-xl text-sacred-gold mb-2">
                    Regenerative Agriculture
                  </h3>
                  <p className="text-rice-cream/70">
                    Our compost program has returned over 15,000 tonnes of organic
                    matter to Balinese farms and gardens.
                  </p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/generated/collection-team.png"
                    alt="Collection team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-heading text-xl text-sacred-gold mb-2">
                    Dignified Employment
                  </h3>
                  <p className="text-rice-cream/70">
                    Creating over 500 local jobs with fair wages, proper equipment,
                    and professional development opportunities.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <Badge>{t('transparency.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6 mb-6">
                {t('transparency.title')}
              </h2>

              <StaggerContainer className="space-y-4">
                {(t.raw('transparency.points') as string[]).map((point, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 bg-volcanic-black/5 p-4 border-l-2 border-sacred-gold/50 hover:border-sacred-gold transition-colors duration-300"
                    >
                      <TransparencyIcon index={index} />
                      <span className="text-volcanic-black">{point}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SectionReveal>

            <SectionReveal delay={0.2} direction="left">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/generated/sacred-water-temple.png"
                  alt="Sacred water temple"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-4 border border-sacred-gold/30 pointer-events-none" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Us in Restoring Bali"
        description="Every contribution matters. Find your place in this movement."
        primaryCTA={{
          label: 'Get Involved',
          href: '/get-involved',
        }}
        secondaryCTA={{
          label: 'Partner With Us',
          href: '/business',
        }}
        variant="pattern"
      />

      <Footer />
    </main>
  );
}

function TransparencyIcon({ index }: { index: number }) {
  const icons = [
    // Public reporting
    <svg key="report" className="w-6 h-6 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9H21" />
      <path d="M9 21V9" />
    </svg>,
    // Third-party verification
    <svg key="verify" className="w-6 h-6 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L4 6V12C4 16.4 7.4 20.4 12 22C16.6 20.4 20 16.4 20 12V6L12 2Z" />
      <path d="M8 12L11 15L16 9" />
    </svg>,
    // Honest communication
    <svg key="honest" className="w-6 h-6 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
    </svg>,
    // Continuous improvement
    <svg key="improve" className="w-6 h-6 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
    </svg>,
  ];
  return icons[index] || icons[0];
}
