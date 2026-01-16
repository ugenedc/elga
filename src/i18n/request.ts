import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Static imports for messages to work with edge runtime
import enMessages from '../../messages/en.json';
import idMessages from '../../messages/id.json';

const messages = {
  en: enMessages,
  id: idMessages,
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'id')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as keyof typeof messages]
  };
});
