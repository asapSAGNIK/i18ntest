import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Safety check: if locale is undefined or invalid, use default locale
  const validLocale = locale && locales.includes(locale as any) 
    ? locale 
    : defaultLocale;
  
  if (!validLocale || !locales.includes(validLocale as any)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    locale: validLocale,
    messages: (await import(`./locales/${validLocale}.json`)).default
  };
});
