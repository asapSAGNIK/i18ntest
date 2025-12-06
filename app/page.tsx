import { redirect } from 'next/navigation'
import { defaultLocale } from '@/lib/i18n/config'

export default function RootPage() {
  // Redirect root to the default locale for consistent locale-prefixed URLs
  redirect(`/${defaultLocale}`)
}


