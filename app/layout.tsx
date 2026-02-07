import type { Metadata } from 'next';
import { Fira_Sans, Fira_Sans_Condensed } from 'next/font/google';
import './styles/globals.css';

// Use for body text
const firaSans = Fira_Sans({
  weight: ['400', '700'],
  variable: '--font-fira-sans',
  subsets: ['latin'],
});

// Use for headings
const firaSansCondensed = Fira_Sans_Condensed({
  weight: ['400', '700'],
  variable: '--font-fira-sans-condensed',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tech FlashCards',
  description:
    'A flashcard app for learning tech concepts. Your best asset for acing interviews and mastering new technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${firaSans.variable} ${firaSansCondensed.variable}`}
    >
      <body className='antialiased font-sans bg-page'>{children}</body>
    </html>
  );
}
