import { Metadata } from 'next';

interface MetadataParams {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export const generateMetadata = ({
  title = 'CADEX | Secure Cloud Solutions',
  description = 'Professional IT services for businesses worldwide',
  url = '/',
  image = '/og-default.jpg',
}: MetadataParams = {}): Metadata => ({
  title: {
    default: title,
    template: '%s | CADEX',
  },
  description,
  metadataBase: new URL('https://cad-x.com'),

  openGraph: {
    title,
    description,
    url,
    siteName: 'CADEX',
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
  },

  robots: {
    index: true,
    follow: true,
  },

  keywords: ['cloud solutions', 'data analytics', 'IT services'],
  authors: [{ name: 'CAD-X Team' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
  },
});
