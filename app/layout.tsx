import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("scroll-smooth", "font-sans", inter.variable)}>
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </head>
      <body
        style={{ fontFamily: `-apple-system, ${inter.style.fontFamily}, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,sans-serif` }}
        className="antialiased"
      >
        <main>{children}</main>
        <Toaster
          position="top-right"
          richColors
          className="font-[inherit]!"
          toastOptions={{
            className: 'font-[inherit] rounded-2xl! border-none! bg-white/15! backdrop-blur-md [--success-text:#04d468]',
          }}
        />
      </body>
    </html>
  )
}
