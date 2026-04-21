import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WholeLottaMarketing — Social Media That Moves',
  description:
    'Premium social media content management for Orlando businesses. Cinematic shoots, strategic posting, real results.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'WholeLottaMarketing — Social Media That Moves',
    description:
      'Premium social media content management for Orlando businesses.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
