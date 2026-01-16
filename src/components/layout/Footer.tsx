'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import SectionReveal from '../animations/SectionReveal';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  const navLinks = [
    { href: '/', label: nav('home') },
    { href: '/challenge', label: nav('challenge') },
    { href: '/approach', label: nav('approach') },
    { href: '/impact', label: nav('impact') },
    { href: '/community', label: nav('community') },
    { href: '/business', label: nav('business') },
    { href: '/get-involved', label: nav('getInvolved') },
  ];

  return (
    <footer className="bg-volcanic-deep text-rice-cream">
      {/* Main Footer */}
      <div className="container-elga section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <SectionReveal className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="#C9A962"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 8 L20 32 M8 20 L32 20"
                    stroke="#C9A962"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <circle cx="20" cy="20" r="4" fill="#C9A962" />
                </svg>
              </div>
              <span className="font-heading text-3xl font-medium tracking-wider">
                ELGA
              </span>
            </div>
            <p className="text-rice-cream/60 max-w-md mb-8 leading-relaxed">
              {t('tagline')}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {['instagram', 'twitter', 'linkedin', 'youtube'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-rice-cream/10 flex items-center justify-center
                    hover:bg-sacred-gold hover:text-volcanic-black transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <SocialIcon name={social} />
                </motion.a>
              ))}
            </div>
          </SectionReveal>

          {/* Navigation */}
          <SectionReveal delay={0.1}>
            <h4 className="font-heading text-lg mb-6 text-sacred-gold">
              {t('navigation')}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-rice-cream/60 hover:text-rice-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SectionReveal>

          {/* Contact */}
          <SectionReveal delay={0.2}>
            <h4 className="font-heading text-lg mb-6 text-sacred-gold">
              {t('contact')}
            </h4>
            <ul className="space-y-3 text-rice-cream/60">
              <li>
                <a
                  href={`mailto:${t('email')}`}
                  className="hover:text-rice-cream transition-colors duration-300"
                >
                  {t('email')}
                </a>
              </li>
              <li>Bali, Indonesia</li>
            </ul>
            <h4 className="font-heading text-lg mt-8 mb-4 text-sacred-gold">
              {t('legal')}
            </h4>
            <ul className="space-y-3 text-rice-cream/60">
              <li>
                <Link href="#" className="hover:text-rice-cream transition-colors duration-300">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rice-cream transition-colors duration-300">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </SectionReveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-rice-cream/10">
        <div className="container-elga py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-rice-cream/40">
            {t('copyright')}
          </p>
          <p className="text-sm text-rice-cream/40">
            {t('madeWith')} 🌺
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  };
  return icons[name] || null;
}
