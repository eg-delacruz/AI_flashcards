# AI Flashcards

A modern flashcard application designed to help developers prepare for technical interviews. It features interactive flashcards with syntax-highlighted code examples and smooth animations for an engaging study experience.

## Features

- 📚 Interactive flashcard interface with flip animations
- 💻 Syntax-highlighted code blocks with oneDark theme
- 📊 Progress tracking
- 🎯 Study modes for different confidence levels (Don't know, Familiar, Mastered)
- ⚡ Dynamic code syntax highlighter with fallback support
- 📱 Responsive design optimized for desktop and mobile

## Tech Stack

- **Framework**: Next.js with React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Motion (Framer Motion)
- **Code Highlighting**: react-syntax-highlighter
- **Markdown Parsing**: react-markdown
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm

### Installation

```bash
pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Card Structure

Each flashcard consists of the following attributes:

```typescript
{
  id: number;           // Unique identifier for the card
  front: string;        // Question or prompt displayed on the front
  back: string;         // Answer with support for markdown and code blocks
  language: string;     // Default syntax highlighting language (e.g., 'javascript', 'jsx')
}
```

### Back Content Format

The `back` field supports **markdown formatting** with syntax-highlighted code blocks. You can combine text explanations with code snippets:

**Text Content**: Simply write plain text for explanations and definitions.

**Code Blocks**: Use markdown syntax with triple backticks and language specifier:

```javascript
const [count, setCount] = useState(0);
```

**Example Card**:
```typescript
{
  id: 1,
  front: 'What is useState?',
  back: `useState is a React hook for managing state in functional components.

Example:
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

You can also initialize with a function:
\`\`\`javascript
const [state, setState] = useState(() => expensiveComputation());
\`\`\``,
  language: 'javascript',
}
```


