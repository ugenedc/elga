// Simple routing config - no next-intl server functions
export const routing = {
  locales: ['en', 'id'] as const,
  defaultLocale: 'en' as const,
};

export type Locale = (typeof routing.locales)[number];
