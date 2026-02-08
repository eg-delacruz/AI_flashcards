import Link from 'next/link';
import { Menu, Plus } from 'lucide-react';

import { Decks } from '@/data/utils';

const Home = () => {
  return (
    <div className='flex flex-col h-full text-text bg-page'>
      {/* Header */}
      <header className='w-full z-10 bg-page'>
        <div className='flex items-center px-4 py-2 max-w-2xl mx-auto'>
          <button className='p-2 hover:bg-surface-muted rounded-full transition-colors'>
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className='flex-1 min-h-0 w-full overflow-y-auto bg-page px-4 pb-20'>
        <div className='max-w-md mx-auto space-y-3 pt-2'>
          {Decks.length === 0 ? (
            <div className='bg-surface border border-border rounded-xl p-5 text-center text-text-muted'>
              No decks added or created. Create one or explore the network to
              browse existing decks.
            </div>
          ) : (
            Decks.map((deck) => (
              <Link key={deck._id} href={`/deck/${deck._id}`} className='block'>
                <div className='bg-surface border border-border rounded-xl p-4 shadow-lg hover:bg-surface-muted transition-colors'>
                  <p className='text-lg font-semibold'>{deck.title}</p>
                  <p className='text-sm text-text-muted mt-1'>
                    {deck.cards.length} cards
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Floating add button */}
        <button className='fixed bottom-20 right-6 md:right-[calc(50%-14rem)] bg-surface-muted border-2 border-border-strong p-3 rounded-full shadow-xl hover:bg-surface-hover hover:border-accent transition-all active:scale-95  cursor-pointer'>
          <Plus size={24} className='text-accent-soft' />
        </button>
      </main>
    </div>
  );
};

export default Home;
