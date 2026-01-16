'use client';

import { useTranslations } from 'next-intl';
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

export default function CommunityPage() {
  const t = useTranslations('community');

  return (
    <main className="bg-rice-cream">
      <NavBar />

      {/* Hero */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="/images/generated/community-gathering.png"
        height="large"
      />

      {/* Banjar Section */}
      <section className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <Badge>{t('banjar.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6 mb-6">
                {t('banjar.title')}
              </h2>
              <p className="text-lg text-temple-stone leading-relaxed mb-8">
                {t('banjar.description')}
              </p>

              {/* Partnership Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-volcanic-black p-6 text-center">
                  <span className="block font-heading text-3xl text-gradient-gold">45+</span>
                  <span className="text-rice-cream/60 text-sm">Villages</span>
                </div>
                <div className="bg-volcanic-black p-6 text-center">
                  <span className="block font-heading text-3xl text-gradient-gold">120+</span>
                  <span className="text-rice-cream/60 text-sm">Banjars</span>
                </div>
                <div className="bg-volcanic-black p-6 text-center">
                  <span className="block font-heading text-3xl text-gradient-gold">50K+</span>
                  <span className="text-rice-cream/60 text-sm">Households</span>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2} direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/generated/banjar-meeting.png"
                  alt="Banjar meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-4 border border-sacred-gold/30 pointer-events-none" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <GeometricDivider variant="temple" />

      {/* Education Section */}
      <section className="section-padding bg-volcanic-black text-rice-cream">
        <div className="container-elga">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge variant="dark">{t('education.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-6 mb-6">
                {t('education.title')}
              </h2>
              <p className="text-lg text-rice-cream/70 max-w-2xl mx-auto">
                {t('education.description')}
              </p>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t.raw('education.programs') as Array<{ title: string; description: string }>).map((program, index) => (
              <StaggerItem key={index}>
                <div className="h-full bg-rice-cream/5 border border-rice-cream/10 p-8 hover:border-sacred-gold/50 transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-sacred-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <EducationIcon index={index} />
                  </div>
                  <h3 className="font-heading text-xl text-sacred-gold mb-3">
                    {program.title}
                  </h3>
                  <p className="text-rice-cream/60">
                    {program.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal direction="right" className="order-2 lg:order-1">
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

            <SectionReveal className="order-1 lg:order-2">
              <Badge>{t('jobs.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6 mb-6">
                {t('jobs.title')}
              </h2>
              <p className="text-lg text-temple-stone leading-relaxed mb-8">
                {t('jobs.description')}
              </p>

              {/* Job Categories */}
              <div className="space-y-4">
                {[
                  { role: 'Collection Teams', count: '200+' },
                  { role: 'Processing Workers', count: '150+' },
                  { role: 'Community Liaisons', count: '50+' },
                  { role: 'Administration & Management', count: '100+' },
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between bg-volcanic-black/5 p-4 border-l-2 border-sacred-gold/50 hover:border-sacred-gold transition-colors duration-300"
                  >
                    <span className="text-volcanic-black">{job.role}</span>
                    <span className="font-heading text-xl text-sacred-gold">{job.count}</span>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Community Voices */}
      <section className="section-padding bg-jungle-deep text-rice-cream">
        <div className="container-elga">
          <div className="text-center mb-16">
            <SectionReveal>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">
                Voices from Our Community
              </h2>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with Elga has transformed how our village handles waste. Our children now play in clean streets.",
                name: "I Made Suardika",
                role: "Banjar Leader, Ubud"
              },
              {
                quote: "I'm proud to work for a company that respects our culture and traditions while building a cleaner future.",
                name: "Ni Wayan Sari",
                role: "Collection Team Member"
              },
              {
                quote: "The education programs have helped our school teach children the connection between waste and our sacred environment.",
                name: "I Gusti Ngurah Rai",
                role: "School Principal"
              }
            ].map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-rice-cream/10 backdrop-blur-sm border border-rice-cream/20 p-8">
                  <svg className="w-8 h-8 text-sacred-gold mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-rice-cream/80 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-heading text-lg text-sacred-gold">
                      {testimonial.name}
                    </p>
                    <p className="text-rice-cream/50 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Join Your Community"
        description="Whether you're a household, Banjar, or village, we're ready to partner with you."
        primaryCTA={{
          label: 'Get Involved',
          href: '/get-involved',
        }}
        secondaryCTA={{
          label: 'Contact Us',
          href: '/get-involved#contact',
        }}
        variant="pattern"
      />

      <Footer />
    </main>
  );
}

function EducationIcon({ index }: { index: number }) {
  const icons = [
    // Household
    <svg key="household" className="w-7 h-7 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
      <path d="M9 22V12H15V22" />
    </svg>,
    // School
    <svg key="school" className="w-7 h-7 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 10L12 5L2 10L12 15L22 10ZM22 10V16" />
      <path d="M6 12V17C6 17 9 20 12 20C15 20 18 17 18 17V12" />
    </svg>,
    // Ceremony
    <svg key="ceremony" className="w-7 h-7 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L14.5 9H21L15.5 13.5L17.5 21L12 17L6.5 21L8.5 13.5L3 9H9.5L12 2Z" />
    </svg>,
    // Reporting
    <svg key="reporting" className="w-7 h-7 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 17V13" />
      <path d="M12 17V9" />
      <path d="M17 17V7" />
    </svg>,
  ];
  return icons[index] || icons[0];
}
