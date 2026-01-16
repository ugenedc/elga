import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

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
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as { title: string; description: string };
  
  return {
    title: {
      default: metadata.title,
      template: `%s | Elga`,
    },
    description: metadata.description,
    keywords: ['Bali', 'waste management', 'sustainability', 'circular economy', 'environmental restoration', 'Balinese', 'eco-friendly'],
    authors: [{ name: 'Elga' }],
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
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
      images: [
        {
          url: '/images/generated/hero-bali-coast.png',
          width: 1536,
          height: 1024,
          alt: 'Elga - Restoring Balance Together',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/images/generated/hero-bali-coast.png'],
    },
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#F5F0E8' },
      { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
    ],
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: 'Elga',
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
  
  if (!routing.locales.includes(locale as 'en' | 'id')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth overflow-x-hidden">
      <body
        className={`${cormorant.variable} ${plusJakarta.variable} antialiased min-h-screen w-full overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
