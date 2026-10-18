import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs-finangui.hengen.com.br'),
  title: {
    default: 'finangui Docs',
    template: '%s | finangui Docs',
  },
  description:
    'Documentation for finangui, a self-hosted personal finance manager.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
