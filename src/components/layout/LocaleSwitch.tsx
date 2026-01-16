'use client';

import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LocaleSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  
  // Extract locale from pathname (e.g., /en/about -> 'en')
  const locale = pathname.split('/')[1] || 'en';

  const switchLocale = (newLocale: 'en' | 'id') => {
    // Replace the locale in the pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/') || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 bg-rice-cream/10 rounded-full p-1">
      <button
        onClick={() => switchLocale('en')}
        className={`
          relative px-3 py-1.5 text-xs font-medium tracking-wide rounded-full
          transition-colors duration-300
          ${locale === 'en' ? 'text-volcanic-black' : 'text-rice-cream/60 hover:text-rice-cream'}
        `}
      >
        {locale === 'en' && (
          <motion.div
            layoutId="locale-indicator"
            className="absolute inset-0 bg-sacred-gold rounded-full"
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => switchLocale('id')}
        className={`
          relative px-3 py-1.5 text-xs font-medium tracking-wide rounded-full
          transition-colors duration-300
          ${locale === 'id' ? 'text-volcanic-black' : 'text-rice-cream/60 hover:text-rice-cream'}
        `}
      >
        {locale === 'id' && (
          <motion.div
            layoutId="locale-indicator"
            className="absolute inset-0 bg-sacred-gold rounded-full"
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          />
        )}
        <span className="relative z-10">ID</span>
      </button>
    </div>
  );
}
