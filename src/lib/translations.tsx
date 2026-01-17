'use client';

import { createContext, useContext, ReactNode } from 'react';
import en from '../../messages/en.json';
import id from '../../messages/id.json';

const messages = { en, id } as const;
type Locale = keyof typeof messages;
type Messages = typeof en;

const TranslationContext = createContext<{
  messages: Messages;
  locale: Locale;
}>({
  messages: en,
  locale: 'en',
});

export function TranslationProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const validLocale = (locale === 'id' ? 'id' : 'en') as Locale;
  const localeMessages = messages[validLocale];

  return (
    <TranslationContext.Provider value={{ messages: localeMessages, locale: validLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let value: unknown = obj;
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = (value as Record<string, unknown>)[k];
    } else {
      return undefined;
    }
  }
  return value;
}

export function useTranslations(namespace?: string) {
  const { messages: allMessages } = useContext(TranslationContext);
  
  const ns = namespace 
    ? getNestedValue(allMessages as unknown as Record<string, unknown>, namespace) as Record<string, unknown>
    : allMessages as unknown as Record<string, unknown>;
  
  // Create translation function
  const t = (key: string): string => {
    const value = getNestedValue(ns || {}, key);
    return typeof value === 'string' ? value : key;
  };
  
  // Add raw method to get arrays/objects directly
  t.raw = (key: string): unknown => {
    return getNestedValue(ns || {}, key);
  };
  
  return t;
}

export function useLocale() {
  const { locale } = useContext(TranslationContext);
  return locale;
}
