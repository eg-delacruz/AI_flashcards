# AI Flashcards Design System

This document defines the design system for the AI Flashcards application. Follow these guidelines when creating new components to maintain visual consistency.

---

## Color Palette

### Primary Colors
- **Primary**: `indigo-500` - Main interactive elements, progress bars
- **Primary Hover**: `indigo-400` - Hover states for primary elements
- **Primary Light**: `indigo-300` - Lighter accent variations
- **Primary Dark**: `indigo-600` - (if needed for deeper variations)

### Background Colors (Neutral Dark)
- **App Background**: `slate-950` - Main app background, header, footer
- **Card Background**: `slate-900` - Flashcard containers, modals
- **Elevated Background**: `slate-800` - Buttons, progress track, elevated elements
- **Subtle Background**: `slate-900/80`, `slate-900/70`, `slate-900/50` - Overlays with varying opacity

### Text Colors
- **Primary Text**: `slate-100` - Main readable text
- **Secondary Text**: `slate-400` - Less emphasized text, icon colors
- **Tertiary Text**: `slate-500` - Counter text, minimal emphasis elements

### Border Colors
- **Primary Border**: `slate-800` - Main borders for cards and containers
- **Secondary Border**: `slate-700` - Button borders, secondary emphasis

### Semantic Colors

#### Success/Mastered
- **Base**: `emerald-500` - "Mastered" button icon
- **Background**: `emerald-500/10` - Hover background (10% opacity)

#### Warning/Familiar
- **Base**: `yellow-500` - "Familiar" button icon
- **Background**: `yellow-500/10` - Hover background (10% opacity)

#### Error/Don't Know
- **Base**: `red-500` - "Don't know" button icon
- **Background**: `red-500/10` - Hover background (10% opacity)

---

## Typography

### Font Families
- **Sans**: `font-sans` - Default body text
- **Mono**: `font-mono` - Counter text, code indicators

### Font Sizes
- **Extra Small**: `text-[10px]` - Labels, uppercase tracking text
- **Small**: `text-xs` - Counter text, small labels
- **Base**: `text-sm`, `text-base` - Body text, code blocks
- **Medium**: `text-lg` - (if needed)
- **Large**: `text-xl` - Front of flashcard questions
- **Extra Large**: (not used, available if needed)

### Font Weights
- **Normal**: `font-normal` - Standard text weight
- **Medium**: `font-medium` - Slightly emphasized text
- **Bold**: `font-bold` - Strong emphasis
- **Extra Bold**: `font-extrabold` - Front/Back indicator labels

### Letter Spacing
- **Normal**: (default)
- **Wider**: `tracking-wider` - Button labels, uppercase text
- **Widest**: `tracking-[0.2em]` - Front/Back indicator

### Line Height
- **Normal**: (default)
- **Relaxed**: `leading-relaxed` - Body text, questions, code

---

## Border Radius

- **Small**: `rounded-sm` - Small indicators
- **Medium**: `rounded-md` - Cards
- **Large**: `rounded-lg` - Code blocks, elevated containers
- **Extra Large**: `rounded-xl` - Buttons, interactive elements
- **Full**: `rounded-full` - Icon buttons, circular elements, progress bars

---

## Spacing Scale

### Padding
- **Minimal**: `p-1`, `p-1.5` - Very tight spacing
- **Small**: `p-2` - Icon buttons, compact elements
- **Medium**: `p-3`, `p-4` - Card padding, comfortable spacing
- **Large**: `p-8` - (if needed for major sections)

### Specific Padding
- **Inline Code**: `px-1.5 py-0.5` - Inline code badges
- **Buttons**: `py-3 px-2` - Footer action buttons
- **Header**: `px-4 py-1.5` - Header spacing
- **Content**: `px-4 py-2` - Section spacing

### Gap (Flexbox/Grid)
- **Minimal**: `gap-1` - Footer grid buttons
- **Small**: `gap-2` - (available)
- **Medium**: `gap-4` - Header button groups

### Margins
- **Top Small**: `mt-1` - Progress counter
- **Bottom Small**: `mb-2` - Icon spacing in buttons
- **Bottom Medium**: `mb-4` - Paragraph spacing
- **Last Child**: `last:mb-0` - Remove margin from last elements

---

## Shadows

- **Large**: `shadow-lg` - Flip button
- **Extra Large**: `shadow-2xl` - Main flashcard

---

## Animations & Transitions

### Transition Properties
- **Colors**: `transition-colors` - Button hover states
- **All**: `transition-all` - Progress bar, comprehensive transitions
- **Transform**: `transition-transform` - Icon rotations, scales

### Durations (Framer Motion)
- **Fast**: `duration: 0.15` (150ms) - Quick state changes (flip animations)
- **Medium**: `duration-300` (300ms) - Standard transitions
- **Slow**: `duration-500` (500ms) - Icon rotations

### Transform Effects
- **Scale Up**: `hover:scale-110` - Icon hover effects
- **Scale Down**: `active:scale-95` - Button press feedback
- **Rotate**: `hover:rotate-180` - Flip button icon
- **Duration**: `duration-500` - For rotation animations

### Framer Motion Variants

#### Horizontal Slide (Card Navigation)
```javascript
{
  enter: { x: 300, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
}
// Transition: { type: 'spring', stiffness: 300, damping: 30 }
```

#### Vertical Slide (Flip Content)
```javascript
{
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
}
// Transition: { duration: 0.15, ease: 'easeOut' }
```

---

## Effects

### Backdrop Effects
- **Blur**: `backdrop-blur-sm` - Floating indicators with transparency

### Opacity
- Used extensively with semantic colors: `/10` (10% opacity for hover backgrounds)
- Used in animations: `opacity: 0` to `opacity: 1`

### Hover States
- **Background**: `hover:bg-slate-800`, `hover:bg-slate-700` - Interactive surfaces
- **Border**: `hover:border-indigo-500` - Emphasized borders on hover
- **Semantic**: `hover:bg-red-500/10`, `hover:bg-yellow-500/10`, `hover:bg-emerald-500/10`

---

## Layout Patterns

### Flexbox Patterns
- **Centered Column**: `flex flex-col items-center justify-center`
- **Space Between Row**: `flex items-center justify-between`
- **Centered Items**: `flex justify-center items-center`

### Grid Patterns
- **Three Column Footer**: `grid grid-cols-3 gap-1`

### Container Constraints
- **Max Width Small**: `max-w-md` (28rem) - Main flashcard container
- **Max Width Medium**: `max-w-2xl` (42rem) - Header and progress bar
- **Full Height**: `h-screen` - Main app container
- **Full Width**: `w-full` - Fluid sections

### Overflow
- **Vertical Scroll**: `overflow-y-auto` - Scrollable content area
- **Hidden**: `overflow-hidden` - Prevent unwanted scroll
- **X Scroll**: `overflow-x-auto` - Code blocks

---

## Custom Scrollbar Styling

```css
.custom-scrollbar::-webkit-scrollbar,
.code-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track,
.code-scrollbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb,
.code-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.code-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
  cursor: grab;
}

.code-scrollbar::-webkit-scrollbar-thumb:active {
  cursor: grabbing;
}
```

---

## Component Patterns

### Button Patterns

#### Icon Button (Header)
```jsx
<button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
  <Icon size={20} className="text-slate-400" />
</button>
```

#### Action Button (Footer)
```jsx
<button className="flex flex-col items-center justify-center py-3 px-2 hover:bg-red-500/10 rounded-xl transition-colors group active:scale-95">
  <Icon size={26} className="text-red-500 mb-2 group-hover:scale-110 transition-transform" />
  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
    Label
  </span>
</button>
```

#### Primary Button with Icon
```jsx
<button className="bg-slate-800 border-2 border-slate-700 p-3 py-2 rounded-xl hover:bg-slate-700 hover:border-indigo-500 transition-all shadow-lg group">
  <Icon size={22} className="text-indigo-400 group-hover:rotate-180 transition-transform duration-500" />
</button>
```

### Card Pattern
```jsx
<div className="bg-slate-900 border border-slate-800 rounded-md shadow-2xl relative">
  {/* Content */}
</div>
```

### Floating Label
```jsx
<span className="absolute -top-2 left-3 text-[10px] font-extrabold tracking-[0.2em] z-20 pointer-events-none rounded-sm px-2 py-1 backdrop-blur-sm border-slate-700 bg-slate-500">
  LABEL
</span>
```

### Progress Bar
```jsx
<div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
  <div
    className="bg-indigo-500 h-full transition-all duration-300"
    style={{ width: `${percentage}%` }}
  />
</div>
```

### Code Block (via react-syntax-highlighter)
```jsx
<SyntaxHighlighter
  language="javascript"
  style={oneDark}
  PreTag="div"
  customStyle={{
    margin: 0,
    padding: '1rem',
    background: '#0f172a', // slate-950
    fontSize: '0.9rem',
    lineHeight: '1.6',
    overflowX: 'auto',
  }}
>
  {code}
</SyntaxHighlighter>
```

### Loading Skeleton
```jsx
<div className="space-y-2">
  <div className="h-3 w-3/4 animate-pulse rounded bg-slate-700/60" />
  <div className="h-3 w-full animate-pulse rounded bg-slate-700/60" />
  <div className="h-3 w-5/6 animate-pulse rounded bg-slate-700/60" />
</div>
```

---

## Z-Index Layering

- **Base Content**: `z-10` - Standard content layer
- **Floating Elements**: `z-20` - Buttons, labels, indicators that float above content
- **Modal/Overlay**: (not used yet, reserve `z-30`, `z-40`, `z-50` for future)

---

## Accessibility & Interaction

- **Pointer Events**: `pointer-events-none` - Non-interactive overlays
- **Cursor**: `cursor-pointer`, `cursor-grab`, `cursor-grabbing` - Visual feedback
- **Group Hover**: Use `group` and `group-hover:` for coordinated hover effects

---

## Notes

- Always use dark mode colors (slate-950 background)
- Maintain 10% opacity (`/10`) for semantic color hover backgrounds
- Use `AnimatePresence` with `mode="wait"` for sequential animations
- Preload heavy libraries (like syntax highlighter) on mount with delay
- Apply custom scrollbar styling to scrollable containers
- Use absolute positioning with proper z-index for floating UI elements
