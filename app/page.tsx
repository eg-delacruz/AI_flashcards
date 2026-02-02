'use client';

import { useState, useEffect } from 'react';
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

import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import CodeDisplay from './components/CodeDisplay/CodeDisplay';

const FlashcardApp = () => {
  // Preload the syntax highlighter library
  const preloadSyntaxHighlighter = async () => {
    try {
      await import('react-syntax-highlighter');
    } catch (error) {
      console.error('Failed to preload syntax highlighter:', error);
    }
  };

  // Preload on mount (for touch screens and general UX)
  useEffect(() => {
    const timer = setTimeout(() => {
      preloadSyntaxHighlighter();
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const [cards] = useState([
    {
      id: 1,
      front: 'What is the difference between useState and useReducer hooks?',
      back: `useState is best for simple state values, while useReducer is better for complex state logic with multiple sub-values or when the next state depends on the previous one.

Example with useState:
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

Example with useReducer:
\`\`\`javascript
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const [state, dispatch] = useReducer(reducer, initialState);
\`\`\``,
      language: 'javascript',
    },
    {
      id: 2,
      front:
        'How do you optimize performance in React components to prevent unnecessary re-renders?',
      back: `Use React.memo() for component memoization, useMemo() for expensive computations, useCallback() for functions, and implement shouldComponentUpdate in class components.

Examples:
\`\`\`javascript
// 1. React.memo for component memoization
const MemoizedComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});

// 2. useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// 3. useCallback for function references
const handleClick = useCallback(() => {
  console.log('Clicked!', id);
}, [id]);

// 4. Optimizing context updates
const MemoizedProvider = React.memo(Context.Provider);
\`\`\``,
      language: 'javascript',
    },
    {
      id: 3,
      front: 'What is the difference between useEffect and useLayoutEffect?',
      back: `useEffect runs asynchronously after the browser paints, while useLayoutEffect runs synchronously before the browser paints. Use useLayoutEffect when you need to measure DOM elements or perform mutations that should be visible to the user immediately.

Example with useEffect (runs AFTER paint):
\`\`\`javascript
useEffect(() => {
  // This runs after the component is rendered and painted
  document.title = \`You clicked \${count} times\`;
}, [count]);
\`\`\`

Example with useLayoutEffect (runs BEFORE paint):
\`\`\`javascript
useLayoutEffect(() => {
  // This runs after DOM mutations but before paint
  const { width } = ref.current.getBoundingClientRect();
  setWidth(width);
}, []);
\`\`\`

⚠️ Warning: useLayoutEffect can block visual updates. Only use it when you need synchronous DOM measurements.`,
      language: 'javascript',
    },
    {
      id: 4,
      front:
        'How do you handle forms in React with controlled vs uncontrolled components?',
      back: `Controlled components manage form data via React state, while uncontrolled components use refs to access DOM values directly. Controlled components provide better validation and real-time updates.

Controlled Component Example:
\`\`\`jsx
function ControlledForm() {
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <input 
      type="text" 
      value={value}
      onChange={handleChange}
      placeholder="Controlled input"
    />
  );
}
\`\`\`

Uncontrolled Component Example:
\`\`\`jsx
function UncontrolledForm() {
  const inputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Value:', inputRef.current.value);
  };
  
  return (
    <input 
      type="text" 
      ref={inputRef}
      placeholder="Uncontrolled input"
      defaultValue="Initial value"
    />
  );
}
\`\`\``,
      language: 'jsx',
    },
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
      setCurrentIndex(currentIndex + 1);
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
    <div className='flex flex-col h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden'>
      {/* Header - Full Width */}
      <header className='w-full z-10 bg-slate-950'>
        <div className='flex items-center justify-between px-4 py-1.5 max-w-2xl mx-auto'>
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
        </div>
      </header>

      {/* Progress Section - Full Width */}
      <div className='w-full z-10 bg-slate-950'>
        <div className='px-4 py-2 pb-0 max-w-2xl mx-auto'>
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
      </div>

      {/* Main Flashcard Area */}
      <main className='grow flex justify-center items-center w-full overflow-hidden bg-slate-950 p-4 pt-2'>
        <div className='w-full max-w-md h-full'>
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
                    onMouseEnter={preloadSyntaxHighlighter}
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
                      <motion.div
                        key={isFlipped ? 'back' : 'front'}
                        variants={slideVerticalVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className='w-full'
                      >
                        {isFlipped ? (
                          <div className='w-full text-left text-base leading-relaxed font-normal'>
                            <CodeDisplay
                              markdown={currentCard.back}
                              language={currentCard.language}
                            />
                          </div>
                        ) : (
                          <p className='text-xl text-center leading-relaxed font-medium'>
                            {currentCard.front}
                          </p>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Answer Buttons Footer - Full Width */}
      <footer className='w-full z-10 bg-slate-950'>
        <div className='max-w-md mx-auto'>
          <div className='grid grid-cols-3 gap-1 p-2'>
            <button
              onClick={handleNext}
              className='flex flex-col items-center justify-center py-3 px-2 hover:bg-red-500/10 rounded-xl transition-colors group active:scale-95'
            >
              <Frown
                size={26}
                className='text-red-500 mb-2 group-hover:scale-110 transition-transform'
              />
              <span className='text-[10px] uppercase font-bold text-slate-400 tracking-wider'>
                Don&apos;t know
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
          </div>
        </div>
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
