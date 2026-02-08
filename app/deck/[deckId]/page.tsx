import Link from 'next/link';
import { ArrowLeft, MoreVertical, Plus, Frown, Meh, Smile } from 'lucide-react';

import CodeDisplay from '@/components/CodeDisplay/CodeDisplay';
import { getDeckById } from '@/data/utils';

type DeckPageProps = {
  params: Promise<{
    deckId: string;
  }>;
};

const STUDY_MODE_LABELS: Record<string, string> = {
  whole_deck_in_order: 'Whole deck in order',
  random: 'Random order',
  spaced_repetition: 'Spaced repetition',
};

async function Deck({ params }: DeckPageProps) {
  const { deckId } = await params;
  const deck = getDeckById(deckId);

  if (!deck) {
    return (
      <div className='min-h-screen bg-page text-text flex items-center justify-center px-4'>
        <div className='bg-surface border border-border rounded-xl p-6 text-center text-text-muted'>
          Deck not found.
        </div>
      </div>
    );
  }

  const mastered = deck.stats?.mastered ?? 0;
  const familiar = deck.stats?.familiar ?? 0;
  const learning = deck.stats?.learning ?? 0;
  const total = mastered + familiar + learning;
  const safeTotal = total === 0 ? 1 : total;

  const masteredPct = (mastered / safeTotal) * 100;
  const familiarPct = (familiar / safeTotal) * 100;
  const learningPct = (learning / safeTotal) * 100;

  const studyMode = deck.settings?.study_mode
    ? (STUDY_MODE_LABELS[deck.settings.study_mode] ?? deck.settings.study_mode)
    : 'Not set';

  return (
    <div className='flex flex-col min-h-screen text-text bg-page'>
      {/* Header */}
      <header className='w-full z-10 bg-page'>
        <div className='flex items-center justify-between px-4 py-2 max-w-2xl mx-auto'>
          <Link
            href='/'
            className='p-2 hover:bg-surface-muted rounded-full transition-colors'
          >
            <ArrowLeft size={22} />
          </Link>
          <button className='p-2 hover:bg-surface-muted rounded-full transition-colors'>
            <MoreVertical size={22} className='text-text-muted' />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className='flex-1 w-full bg-page px-4 pb-24'>
        <div className='max-w-md mx-auto space-y-4 pt-2'>
          <section className='bg-surface border border-border rounded-xl p-4 shadow-lg'>
            <p className='text-2xl font-semibold'>{deck.title}</p>
            <p className='text-sm text-text-muted mt-1'>
              {deck.cards.length} cards
            </p>
            {deck.description ? (
              <p className='text-sm text-text-muted mt-3 leading-relaxed'>
                {deck.description}
              </p>
            ) : null}
            <div className='mt-4'>
              <p className='text-xs uppercase tracking-wider text-text-subtle font-semibold'>
                Study mode
              </p>
              <p className='text-sm text-text-muted mt-1'>{studyMode}</p>
            </div>
          </section>

          {/* Progress bar */}
          <section className='space-y-3'>
            <div className='w-full bg-surface-muted h-3 rounded-full overflow-hidden border border-border'>
              <div className='flex h-full'>
                <div
                  className='bg-success h-full'
                  style={{ width: `${masteredPct}%` }}
                />
                <div
                  className='bg-warning h-full'
                  style={{ width: `${familiarPct}%` }}
                />
                <div
                  className='bg-danger h-full'
                  style={{ width: `${learningPct}%` }}
                />
              </div>
            </div>
            <div className='flex items-center justify-between text-xs text-text-muted'>
              <span className='inline-flex items-center gap-1'>
                <Smile size={14} className='text-success' />
                Mastered: {mastered}
              </span>
              <span className='inline-flex items-center gap-1'>
                <Meh size={14} className='text-warning' />
                Familiar: {familiar}
              </span>
              <span className='inline-flex items-center gap-1'>
                <Frown size={14} className='text-danger' />
                Learning: {learning}
              </span>
            </div>
          </section>

          {/* Study button */}
          <Link
            href={`/deck/${deck._id}/review`}
            className='w-full inline-flex items-center justify-center bg-accent text-white border-2 border-accent py-3.5 rounded-xl text-base font-semibold tracking-wide shadow-lg shadow-accent/20 hover:bg-accent/90 hover:border-accent/90 transition-all active:scale-[0.99]'
          >
            Study deck
          </Link>

          <div className='h-px w-full bg-border' />

          {/* Cards list */}
          <section className='space-y-3'>
            {deck.cards.map((card, index) => (
              <Link
                key={card._id}
                href={`/deck/${deck._id}/card/${card._id}`}
                className='block'
              >
                <div className='bg-surface border border-border rounded-xl p-4 shadow-lg hover:bg-surface-muted transition-colors'>
                  <p className='text-sm text-text-subtle mb-2'>
                    Card {index + 1}
                  </p>
                  <p className='text-base font-semibold'>{card.front}</p>
                  <div className='mt-3 text-sm opacity-90'>
                    <CodeDisplay
                      markdown={card.back}
                      language={card.language}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </section>
        </div>

        {/* Floating add button */}
        <button className='fixed bottom-6 right-6 md:right-[calc(50%-14rem)] bg-surface-muted border-2 border-border-strong p-3 rounded-full shadow-xl hover:bg-surface-hover hover:border-accent transition-all active:scale-95'>
          <Plus size={24} className='text-accent-soft' />
        </button>
      </main>
    </div>
  );
}

export default Deck;
