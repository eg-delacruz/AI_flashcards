'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  Trash2,
  Pencil,
  Settings,
  Frown,
  Meh,
  Smile,
  ArrowRightLeft,
} from 'lucide-react';
// Make sure to install: npm i framer-motion
import { motion, AnimatePresence } from 'framer-motion';

const FlashcardApp = () => {
  // Sample Data (some long, some short to test scrolling)
  const [cards] = useState([
    { id: 1, front: 'Short question?', back: 'Short answer.' },
    {
      id: 2,
      front:
        'A very long question to test scrolling behavior on the front side of the card. It needs to exceed the available height.',
      back: 'Standard answer.',
    },
    {
      id: 3,
      front: 'Standard question',
      back: 'A very long answer content that should trigger scrolling only when it is displayed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. A very long answer content that should trigger scrolling only when it is displayed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.',
    },
    { id: 4, front: 'Final Card', back: 'Done!' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cards[currentIndex];
  const totalCards = cards.length;
  const progressPercentage = ((currentIndex + 1) / totalCards) * 100;

  // --- Animations ---
  // Animation for moving between cards (slide in from right)
  const slideHorizontalVariants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  // Animation for flipping (slide vertical)
  const slideVerticalVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  // --- Handlers ---
  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setIsFlipped(false); // Always reset flip state before moving
      setTimeout(() => setCurrentIndex(currentIndex + 1), 200); // Slight delay to allow flip reset if needed
    } else {
      alert('Deck completed!');
      setIsFlipped(false);
      setCurrentIndex(0);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    // Main Container
    <div className='flex flex-col h-screen bg-slate-950 text-slate-100 font-sans max-w-md mx-auto border-x border-slate-800 overflow-hidden'>
      {/* Header */}
      <header className='flex items-center justify-between px-4 py-1.5 z-10 bg-slate-950'>
        <button
          onClick={handleBack}
          className='p-2 hover:bg-slate-800 rounded-full transition-colors'
        >
          <ChevronLeft size={24} />
        </button>
        <div className='flex gap-4'>
          <button className='p-2 hover:bg-slate-800 rounded-full transition-colors'>
            <Trash2 size={20} className='text-slate-400' />
          </button>
          <button className='p-2 hover:bg-slate-800 rounded-full transition-colors'>
            <Pencil size={20} className='text-slate-400' />
          </button>
          <button className='p-2 hover:bg-slate-800 rounded-full transition-colors'>
            <Settings size={20} className='text-slate-400' />
          </button>
        </div>
      </header>

      {/* Progress Section */}
      <div className='px-4 z-10 bg-slate-950'>
        <div className='w-full bg-slate-800 h-1.5 rounded-full overflow-hidden'>
          <div
            className='bg-indigo-500 h-full transition-all duration-300'
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className='text-right mt-1'>
          <span className='text-xs font-mono text-slate-500'>
            {currentIndex + 1} | {totalCards}
          </span>
        </div>
      </div>

      {/* Main Flashcard Area Area */}
      <main className='grow relative p-4 pt-2 overflow-hidden'>
        {/* AnimatePresence enables exit animations when currentIndex changes */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            variants={slideHorizontalVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='h-full'
          >
            {/* The Card Frame (Relative container for floating elements) */}
            <div className='h-full bg-slate-900 border border-slate-800 rounded-md shadow-2xl relative flex flex-col'>
              {/* 1. Floating Front/Back Indicator (Higher Z-Index) */}
              <span className='absolute -top-2 left-3 text-[10px] font-extrabold tracking-[0.2em] z-20 pointer-events-none rounded-sm px-2 py-1 backdrop-blur-sm border-slate-700 bg-slate-500'>
                {isFlipped ? 'BACK' : 'FRONT'}
              </span>

              {/* 2. Floating Flip Button (Higher Z-Index) */}
              <div className='absolute -bottom-4 left-0 right-0 flex justify-center z-20'>
                <button
                  onClick={handleFlip}
                  className='bg-slate-800 border-2 border-slate-700 p-3 py-2 rounded-xl hover:bg-slate-700 hover:border-indigo-500 transition-all shadow-lg group hover:cursor-pointer'
                >
                  <ArrowRightLeft
                    size={22}
                    className='text-indigo-400 group-hover:rotate-180 transition-transform duration-500'
                  />
                </button>
              </div>

              {/* 3. Scrollable Content Area (Lower Z-index) */}
              {/* 'overflow-y-auto' here ensures scrolling only happens if content is too big for this container height */}
              <div className='grow overflow-y-auto p-8 custom-scrollbar z-10'>
                {/* Inner container to center content vertically if it's short */}
                <div className='min-h-full flex items-center justify-center py-8 pt-4'>
                  {/* Vertical Slide Animation on flip */}
                  <AnimatePresence mode='wait' initial={false}>
                    <motion.p
                      key={isFlipped ? 'back' : 'front'}
                      variants={slideVerticalVariants}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className='text-xl text-center leading-relaxed font-medium'
                    >
                      {isFlipped ? currentCard.back : currentCard.front}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Answer Buttons Footer */}
      <footer className='grid grid-cols-3 gap-1 p-2 bg-slate-950 z-10'>
        <button
          onClick={handleNext}
          className='flex flex-col items-center justify-center py-3 px-2 hover:bg-red-500/10 rounded-xl transition-colors group active:scale-95'
        >
          <Frown
            size={26}
            className='text-red-500 mb-2 group-hover:scale-110 transition-transform'
          />
          <span className='text-[10px] uppercase font-bold text-slate-400 tracking-wider'>
            Don't know
          </span>
        </button>

        <button
          onClick={handleNext}
          className='flex flex-col items-center justify-center py-3 px-2 hover:bg-yellow-500/10 rounded-xl transition-colors group active:scale-95'
        >
          <Meh
            size={26}
            className='text-yellow-500 mb-2 group-hover:scale-110 transition-transform'
          />
          <span className='text-[10px] uppercase font-bold text-slate-400 tracking-wider'>
            Familiar
          </span>
        </button>

        <button
          onClick={handleNext}
          className='flex flex-col items-center justify-center py-3 px-2 hover:bg-emerald-500/10 rounded-xl transition-colors group active:scale-95'
        >
          <Smile
            size={26}
            className='text-emerald-500 mb-2 group-hover:scale-110 transition-transform'
          />
          <span className='text-[10px] uppercase font-bold text-slate-400 tracking-wider'>
            Mastered
          </span>
        </button>
      </footer>

      {/* Optional: Custom scrollbar styling for Webkit browsers if you want it more subtle in dark mode */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default FlashcardApp;
