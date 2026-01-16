'use client';

import NextLink from 'next/link';
import { usePathname as useNextPathname, useRouter as useNextRouter } from 'next/navigation';

// Simple Link component that uses locale from pathname
export const Link = NextLink;

// Re-export Next.js hooks
export const usePathname = useNextPathname;
export const useRouter = useNextRouter;

// Helper to get pathname without locale
export function getPathname(href: string) {
  return href;
}

// Helper to redirect (just use router.push)
export function redirect(href: string) {
  if (typeof window !== 'undefined') {
    window.location.href = href;
  }
}
