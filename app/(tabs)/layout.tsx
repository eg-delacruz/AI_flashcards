import Link from 'next/link';
import { Home as HomeIcon, Network, Settings } from 'lucide-react';

export default function TabsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col h-dvh bg-page text-text'>
      <div className='flex-1 min-h-0'>{children}</div>

      {/* Bottom navigation */}
      <footer className='w-full z-10 bg-page border-t border-border'>
        <div className='max-w-md mx-auto px-8 py-2 flex items-center justify-between'>
          <Link
            href='/'
            className='p-2 rounded-full hover:bg-surface-muted transition-colors'
          >
            <HomeIcon size={22} className='text-text' />
          </Link>
          <Link
            href='/network'
            className='p-2 rounded-full hover:bg-surface-muted transition-colors'
          >
            <Network size={22} className='text-text-muted' />
          </Link>
          <Link
            href='/options'
            className='p-2 rounded-full hover:bg-surface-muted transition-colors'
          >
            <Settings size={22} className='text-text-muted' />
          </Link>
        </div>
      </footer>
    </div>
  );
}
