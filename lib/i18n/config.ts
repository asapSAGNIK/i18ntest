export const locales = ['en', 'hi', 'fr', 'bn', 'sa'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिंदी',
  fr: 'Français',
  bn: 'বাংলা',
  sa: 'संस्कृतम्'
};

export const localeDisplayNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिंदी',
  fr: 'Français',
  bn: 'বাংলা',
  sa: 'संस्कृतम्'
};

export const rtlLocales: Locale[] = []; // Add RTL locale codes here if needed in the future