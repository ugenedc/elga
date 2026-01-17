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
  FeatureCard,
  CTASection,
  SectionReveal,
  GeometricDivider,
  StaggerContainer,
  StaggerItem,
} from '@/components';

export default function BusinessPage() {
  const t = useTranslations('business');

  return (
    <main className="bg-rice-cream">
      <NavBar />

      {/* Hero */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="/images/generated/hero-business.jpg"
        height="large"
      >
        <Button href="#contact" variant="primary" size="lg">
          {t('cta.button')}
        </Button>
      </Hero>

      {/* Services Section */}
      <section className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge>{t('services.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6">
                {t('services.title')}
              </h2>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t.raw('services.items') as Array<{ title: string; description: string }>).map((service, index) => (
              <StaggerItem key={index}>
                <div className="h-full bg-rice-white border border-sand-light p-8 hover:border-sacred-gold transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-sacred-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ServiceIcon index={index} />
                  </div>
                  <h3 className="font-heading text-xl text-volcanic-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-temple-stone">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <GeometricDivider variant="sacred" />

      {/* Partnership Section */}
      <section className="section-padding bg-volcanic-black text-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <Badge variant="dark">{t('partnerships.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-6 mb-6">
                {t('partnerships.title')}
              </h2>
              <p className="text-lg text-rice-cream/70 leading-relaxed mb-8">
                {t('partnerships.description')}
              </p>

              {/* Partner Benefits */}
              <div className="space-y-4">
                {[
                  'Dedicated account management',
                  'Customized collection schedules',
                  'Monthly impact reporting',
                  'Guest-facing storytelling materials',
                  'Staff training programs',
                  'ESG compliance documentation',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-sacred-gold rounded-full" />
                    <span className="text-rice-cream/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2} direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/generated/processing-facility.jpg"
                  alt="Processing facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-4 border border-sacred-gold/30 pointer-events-none" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge>Service Tiers</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6">
                Solutions for Every Business
              </h2>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Essential',
                description: 'For small businesses and guesthouses',
                features: [
                  'Weekly collection',
                  'Basic separation',
                  'Quarterly reporting',
                  'Email support',
                ],
                highlight: false,
              },
              {
                name: 'Professional',
                description: 'For hotels and resorts',
                features: [
                  'Daily collection',
                  'Full waste stream separation',
                  'Monthly impact reports',
                  'Dedicated account manager',
                  'Staff training program',
                  'ESG documentation',
                ],
                highlight: true,
              },
              {
                name: 'Enterprise',
                description: 'For large hospitality groups',
                features: [
                  'Custom collection schedules',
                  'Full circular economy integration',
                  'Real-time reporting dashboard',
                  'On-site coordination',
                  'Custom guest materials',
                  'Multi-property management',
                ],
                highlight: false,
              },
            ].map((tier, index) => (
              <StaggerItem key={index}>
                <div
                  className={`h-full p-8 border transition-all duration-300 ${
                    tier.highlight
                      ? 'bg-volcanic-black text-rice-cream border-sacred-gold'
                      : 'bg-rice-white border-sand-light hover:border-sacred-gold'
                  }`}
                >
                  <h3
                    className={`font-heading text-2xl mb-2 ${
                      tier.highlight ? 'text-sacred-gold' : 'text-volcanic-black'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      tier.highlight ? 'text-rice-cream/60' : 'text-temple-stone'
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 mt-0.5 ${
                            tier.highlight ? 'text-sacred-gold' : 'text-jungle-deep'
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          className={
                            tier.highlight ? 'text-rice-cream/80' : 'text-volcanic-black'
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="#contact"
                    variant={tier.highlight ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-volcanic-black">
        <div className="container-elga">
          <p className="text-center text-rice-cream/40 text-sm uppercase tracking-widest mb-8">
            Trusted by Leading Hospitality Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-24 h-12 bg-rice-cream/10 rounded flex items-center justify-center"
              >
                <span className="text-rice-cream/30 text-xs">Partner Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <SectionReveal>
                <Badge>Contact Us</Badge>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6 mb-4">
                  {t('cta.title')}
                </h2>
                <p className="text-temple-stone">
                  Let's discuss how we can support your sustainability goals.
                </p>
              </SectionReveal>
            </div>

            <SectionReveal delay={0.2}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-volcanic-black mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Your business name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-volcanic-black mb-2">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-volcanic-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-volcanic-black mb-2">
                      Business Type
                    </label>
                    <select className="input">
                      <option value="">Select...</option>
                      <option value="hotel">Hotel / Resort</option>
                      <option value="restaurant">Restaurant / Cafe</option>
                      <option value="villa">Villa / Guesthouse</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-volcanic-black mb-2">
                    Message
                  </label>
                  <textarea
                    className="input min-h-[150px]"
                    placeholder="Tell us about your waste management needs..."
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Inquiry
                </Button>
              </form>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    // Verified Diversion
    <svg key="diversion" className="w-7 h-7 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L4 6V12C4 16.4 7.4 20.4 12 22C16.6 20.4 20 16.4 20 12V6L12 2Z" />
      <path d="M8 12L11 15L16 9" />
    </svg>,
    // ESG Data
    <svg key="esg" className="w-7 h-7 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 17V13" />
      <path d="M12 17V9" />
      <path d="M17 17V7" />
    </svg>,
    // Guest Stories
    <svg key="stories" className="w-7 h-7 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
    </svg>,
    // Staff Training
    <svg key="training" className="w-7 h-7 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20" />
    </svg>,
  ];
  return icons[index] || icons[0];
}
