"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { locales, localeDisplayNames, defaultLocale, type Locale } from '@/lib/i18n/config';

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (locale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);

    // Check if first segment is a locale
    const firstSegment = segments[0];
    const isFirstSegmentLocale = locales.includes(firstSegment as Locale);

    // Remove existing locale if present
    if (isFirstSegmentLocale) {
      segments.shift();
    }

    // Build the path without locale
    const pathWithoutLocale = '/' + segments.join('/');

    // With localePrefix 'always', always prefix the locale
    const newPath = `/${locale}${pathWithoutLocale}`;

    // Client navigation preserves stateful providers in the root layout
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          <Languages className="h-4 w-4 mr-2" />
          {localeDisplayNames[currentLocale as Locale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={locale === currentLocale ? 'bg-accent' : ''}
          >
            {localeDisplayNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
