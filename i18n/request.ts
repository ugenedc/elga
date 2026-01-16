import { getRequestConfig } from 'next-intl/server';

// Static imports for messages to work with edge runtime
import enMessages from '../messages/en.json';
import idMessages from '../messages/id.json';

const locales = ['en', 'id'] as const;
const defaultLocale = 'en';

const messages: Record<string, typeof enMessages> = {
  en: enMessages,
  id: idMessages,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as typeof locales[number])) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: messages[locale] || messages[defaultLocale]
  };
});
