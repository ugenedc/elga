import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

// Use defineRouting only for navigation (client-side)
const routing = defineRouting({
  locales: ['en', 'id'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
