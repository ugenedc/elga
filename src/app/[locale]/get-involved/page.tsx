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
  SectionReveal,
  GeometricDivider,
  StaggerContainer,
  StaggerItem,
} from '@/components';

export default function GetInvolvedPage() {
  const t = useTranslations('getInvolved');

  return (
    <main className="bg-rice-cream">
      <NavBar />

      {/* Hero */}
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="/images/generated/children-nature.png"
        height="large"
      />

      {/* Pathways Section */}
      <section className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="text-center mb-16">
            <SectionReveal>
              <Badge>{t('pathways.badge')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6">
                {t('pathways.title')}
              </h2>
            </SectionReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {(t.raw('pathways.options') as Array<{ title: string; description: string; cta: string }>).map((option, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full bg-rice-white border border-sand-light p-8 hover:border-sacred-gold transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-sacred-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <PathwayIcon index={index} />
                  </div>
                  <h3 className="font-heading text-2xl text-volcanic-black mb-4">
                    {option.title}
                  </h3>
                  <p className="text-temple-stone leading-relaxed mb-6">
                    {option.description}
                  </p>
                  <Button href="#contact" variant="secondary">
                    {option.cta}
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <GeometricDivider variant="sacred" />

      {/* Impact Calculator */}
      <section className="section-padding bg-volcanic-black text-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <Badge variant="dark">Your Impact</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mt-6 mb-6">
                Every Action Matters
              </h2>
              <p className="text-lg text-rice-cream/70 leading-relaxed mb-8">
                Whether you're separating waste at home, partnering with your Banjar, 
                or supporting our mission, your contribution creates measurable change.
              </p>

              {/* Impact Examples */}
              <div className="space-y-6">
                {[
                  { action: 'One household separating waste', impact: 'Diverts 500kg from landfill annually' },
                  { action: 'One Banjar partnership', impact: 'Serves 200+ households with proper waste management' },
                  { action: 'One business partner', impact: 'Creates 2-3 local jobs and diverts 5+ tonnes monthly' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-rice-cream/5 border border-rice-cream/10 p-6 hover:border-sacred-gold/50 transition-colors duration-300"
                  >
                    <p className="text-sacred-gold font-medium mb-2">{item.action}</p>
                    <p className="text-rice-cream/60">{item.impact}</p>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2} direction="left">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/generated/composting-garden.png"
                  alt="Composting garden"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-4 border border-sacred-gold/30 pointer-events-none" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-jungle-deep text-rice-cream">
        <div className="container-elga">
          <div className="max-w-2xl mx-auto text-center">
            <SectionReveal>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
                {t('newsletter.title')}
              </h2>
              <p className="text-rice-cream/70 mb-8">
                {t('newsletter.description')}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  className="input-dark flex-1"
                  placeholder={t('newsletter.placeholder')}
                />
                <Button type="submit" variant="primary">
                  {t('newsletter.button')}
                </Button>
              </form>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section-padding bg-rice-cream">
        <div className="container-elga">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <SectionReveal>
              <Badge>{t('contact.title')}</Badge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-volcanic-black mt-6 mb-6">
                Let's Connect
              </h2>
              <p className="text-lg text-temple-stone leading-relaxed mb-8">
                {t('contact.description')}
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sacred-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-volcanic-black mb-1">Email</h4>
                    <a href="mailto:hello@elga.id" className="text-sacred-gold hover:underline">
                      hello@elga.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sacred-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-volcanic-black mb-1">Location</h4>
                    <p className="text-temple-stone">Bali, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sacred-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09501 3.90347 2.12787 3.62476 2.2165 3.36162C2.30513 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5765 14.4765 14.08 15.9L15.35 14.63C15.6219 14.3611 15.9651 14.1759 16.3391 14.0961C16.7131 14.0163 17.1021 14.0454 17.46 14.18C18.3673 14.5186 19.3099 14.7534 20.27 14.88C20.7558 14.9485 21.1996 15.1926 21.5177 15.5668C21.8358 15.941 22.0058 16.4192 22 16.92Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg text-volcanic-black mb-1">WhatsApp</h4>
                    <p className="text-temple-stone">+62 812 3456 7890</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Contact Form - Uses Web3Forms to send to leon@leonhayes.com */}
            <SectionReveal delay={0.2}>
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                className="bg-rice-white border border-sand-light p-8 space-y-6"
              >
                {/* Get your access key at https://web3forms.com - it's free! */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New Elga Contact Form Submission" />
                <input type="hidden" name="from_name" value="Elga Website" />
                <input type="hidden" name="redirect" value="https://elga-blush.vercel.app/en/get-involved?success=true" />
                <div>
                  <label className="block text-sm font-medium text-volcanic-black mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-volcanic-black mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-volcanic-black mb-2">
                    I am a...
                  </label>
                  <select name="type" className="input">
                    <option value="">Select...</option>
                    <option value="household">Household</option>
                    <option value="banjar">Banjar / Village Representative</option>
                    <option value="business">Business Owner</option>
                    <option value="organization">Organization / NGO</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-volcanic-black mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    required
                    className="input min-h-[150px]"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {t('contact.form.submit')}
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

function PathwayIcon({ index }: { index: number }) {
  const icons = [
    // Households
    <svg key="household" className="w-8 h-8 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" />
      <path d="M9 22V12H15V22" />
    </svg>,
    // Villages
    <svg key="village" className="w-8 h-8 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 22H23" />
      <path d="M5 22V10L12 3L19 10V22" />
      <path d="M9 22V16H15V22" />
      <path d="M9 10H15" />
    </svg>,
    // Businesses
    <svg key="business" className="w-8 h-8 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" />
    </svg>,
    // Supporters
    <svg key="supporter" className="w-8 h-8 text-sacred-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21C12 21 4 15 4 9C4 5 8 2 12 6C16 2 20 5 20 9C20 15 12 21 12 21Z" />
    </svg>,
  ];
  return icons[index] || icons[0];
}
