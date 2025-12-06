import type { Metadata } from 'next'
import './globals.css'
import { AudioProvider } from '@/contexts/AudioContext'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Sagnik Chowdhury',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <AudioProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
        </AudioProvider>
      </body>
    </html>
  )
}

