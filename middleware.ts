import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always' // Explicit locale in URL for predictable resolution
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
