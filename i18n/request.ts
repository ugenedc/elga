import { getRequestConfig } from 'next-intl/server';
import en from '../messages/en.json';
import id from '../messages/id.json';

const messages: Record<string, typeof en> = { en, id };

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || 'en';
  return {
    locale,
    messages: messages[locale] || messages.en
  };
});
