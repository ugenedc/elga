import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from 'next/navigation';
import { TranslationProvider } from '@/lib/translations';
import "../globals.css";

import enMessages from '../../../messages/en.json';
import idMessages from '../../../messages/id.json';

const messagesMap: Record<string, typeof enMessages> = {
  en: enMessages,
  id: idMessages,
};

const locales = ['en', 'id'] as const;

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F0E8' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeMessages = messagesMap[locale] || messagesMap['en'];
  const metadata = localeMessages.metadata;
  
  return {
    title: {
      default: metadata.title,
      template: `%s | Elga`,
    },
    description: metadata.description,
    keywords: ['Bali', 'waste management', 'sustainability', 'circular economy', 'environmental restoration'],
    authors: [{ name: 'Elga' }],
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: [
        { url: '/apple-icon.svg', type: 'image/svg+xml' },
      ],
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
      siteName: 'Elga',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as 'en' | 'id')) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth overflow-x-hidden">
      <body
        className={`${cormorant.variable} ${plusJakarta.variable} antialiased min-h-screen w-full overflow-x-hidden`}
      >
        <TranslationProvider locale={locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
