import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://montilabs.co'),
  title: 'Monti Labs — Digital Products & Systems',
  description:
    'Monti Labs designs and builds digital products, SaaS platforms, mobile apps and automation systems.',
  openGraph: {
    title: 'Monti Labs — Fikirleri çalışan sistemlere dönüştürüyoruz.',
    description: 'Digital products · SaaS · Mobile · Automation',
    url: 'https://montilabs.co',
    siteName: 'Monti Labs',
    locale: 'tr_TR',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Monti Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monti Labs — Fikirleri çalışan sistemlere dönüştürüyoruz.',
    description: 'Digital products · SaaS · Mobile · Automation',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
