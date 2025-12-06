import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/i18n/config';
import { AudioProvider } from '../../contexts/AudioContext';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Safety check: if locale is undefined or invalid, redirect to default
  if (!locale || !locales.includes(locale as any)) {
    redirect(`/${defaultLocale}`);
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AudioProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </AudioProvider>
      </body>
    </html>
  );
}
