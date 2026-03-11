import type { Metadata } from 'next'
import { Geist, Geist_Mono, JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'My Next.js template',
  description: 'My Next.js template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-mono", jetbrainsMono.variable)}>
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </head>
      <body
        style={{ fontFamily: `-apple-system, ${geistSans.style.fontFamily},${geistMono.className},BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,sans-serif` }}
        className="antialiased"
      >
        <main>{children}</main>
        <Toaster
          position="top-right"
          richColors
          className="!font-[inherit]"
          toastOptions={{
            className: 'font-[inherit] !rounded-2xl !border-none !bg-white/15 backdrop-blur-md [--success-text:#04d468]',
          }}
        />
      </body>
    </html>
  )
}
