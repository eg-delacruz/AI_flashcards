# Flashcard Deck Generation Prompt Template

Use this template to generate flashcard decks for any programming language or topic.

---

## Base Prompt Template (Reusable)

Use this template for any new deck generation prompt. You can copy/paste it and then add a dedicated example section below.

```
Consider the following JSON format for a programming flashcard (AI-generated fields only):

{
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

IMPORTANT FORMATTING RULES:
1. Use template literals (backticks) for the 'back' property when including code blocks
2. Escape code fence backticks inside template literals: \`\`\`
3. The code fence language (e.g., ```python```, ```javascript```) must exactly match the actual code syntax
4. The 'language' property must match the primary language used in the code examples
5. Avoid inline code backticks inside regular text (e.g., don't write `mx-auto` or `flex` in sentences). Spell them out without backticks to prevent invalid HTML nesting.

LANGUAGE-SPECIFIC INSTRUCTIONS:
[INSERT LANGUAGE-SPECIFIC RULES HERE - See examples below]

Based on this format, create a complete deck with [NUMBER] questions and answers related to [TOPIC]. The questions should be of a [LEVEL] level.

Use this Deck structure for the output (AI-generated fields only):

{
  title: '[DECK TITLE]',
  description: '[DECK DESCRIPTION]',
  language: '[PRIMARY LANGUAGE]',
  tags: ['tag-1', 'tag-2', 'tag-3'],
  cards: [/* Card objects with front/back/language only */],
}

Ensure each card:
- Has a clear, concise question in 'front'
- Has a detailed explanation with relevant code examples in 'back'
- Uses the correct code fence language matching the actual code syntax
- Has the correct 'language' property
- Uses consistent formatting and style throughout
```

---

## Full Deck Prompt Template (Testing / Manual Generation)

Use this template when you want the AI to generate a complete deck object with all fields (including ids and stats). This is intended for manual testing or quick seed data creation.

```
Consider the following JSON format for a programming flashcard (FULL fields):

{
  _id: 'card_001',
  deckId: 'deck_001',
  userId: 'user_001',
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
  stats: {
    totalReviews: 0,
    lastResp: undefined,
    masteredCount: 0,
    familiarCount: 0,
    dontKnowCount: 0,
  },
  createdAt: '2026-02-01T10:00:00.000Z',
  createdBy: 'user_001',
}

IMPORTANT FORMATTING RULES:
1. Use template literals (backticks) for the 'back' property when including code blocks
2. Escape code fence backticks inside template literals: \`\`\`
3. The code fence language (e.g., ```python```, ```javascript```) must exactly match the actual code syntax
4. The 'language' property must match the primary language used in the code examples
5. Avoid inline code backticks inside regular text (e.g., don't write `mx-auto` or `flex` in sentences). Spell them out without backticks to prevent invalid HTML nesting.

LANGUAGE-SPECIFIC INSTRUCTIONS:
[INSERT LANGUAGE-SPECIFIC RULES HERE - See examples below]

Based on this format, create a complete deck with [NUMBER] questions and answers related to [TOPIC]. The questions should be of a [LEVEL] level.

Use this Deck structure for the output (FULL fields):

{
  _id: 'deck_001',
  userId: 'user_001',
  title: '[DECK TITLE]',
  description: '[DECK DESCRIPTION]',
  language: '[PRIMARY LANGUAGE]',
  cards: [/* FULL Card objects */],
  tags: ['tag-1', 'tag-2', 'tag-3'],
  isPublic: true,
  cardCount: [NUMBER],
  stats: {
    mastered: 0,
    familiar: 0,
    learning: 0,
    totalReviews: 0,
    avgScore: 0,
  },
  settings: {
    study_mode: 'whole_deck_in_order',
  },
  createdAt: '2026-02-01T10:00:00.000Z',
  updatedAt: '2026-02-01T10:00:00.000Z',
  createdBy: 'user_001',
}

Ensure each card:
- Has a unique `_id`
- Uses a consistent `deckId` for all cards in the same deck
- Uses a consistent `userId` for all cards in the same deck
- Includes full `stats` with number values (use 0 for new data)
- Has valid ISO timestamps for `createdAt`
- Uses a consistent `createdBy` value
- Has a clear, concise question in 'front'
- Has a detailed explanation with relevant code examples in 'back'
- Uses the correct code fence language matching the actual code syntax
- Has the correct 'language' property
- Uses consistent formatting and style throughout
```

---

## Follow-up Prompt Template (After Full Deck Generation)

Use this prompt in the same AI chat right after you have already generated a full deck using the Full Deck Prompt Template. This avoids pasting the entire template again and keeps the same structure and formatting.

**Generic Prompt:**
```
Following the same structure and format, create me a new deck with the following changes:

Number of cards: [NUMBER]
Topic: [TOPIC]
Level: [LEVEL]

LANGUAGE-SPECIFIC INSTRUCTIONS:
[INSERT LANGUAGE-SPECIFIC RULES HERE]
```

**Example Prompt:**
```
Following the same structure and format, create me a new deck with the following changes:

Number of cards: 15
Topic: Asynchrony in JavaScript. Show all the ways JavaScript has to manage asynchrony and examples.
Level: Doesn't matter. Include the most important topics and subjects.

LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```javascript``` for all JavaScript code examples
- Set language property to 'javascript'
- Use modern JavaScript (ES6+) syntax (const/let, arrow functions, template literals when appropriate)
- Avoid TypeScript types or annotations
```

---

## Language-Specific Instructions Examples

### For React/JSX

```
LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```jsx``` for code blocks containing JSX elements (HTML-like tags: <div>, <Component />, fragments <>, etc.)
- Use ```javascript``` for pure JavaScript code without JSX elements (hooks, functions, logic)
- Use ```typescript``` or ```tsx``` if using TypeScript
- If a code block contains BOTH JavaScript AND JSX, use ```jsx```
- Set language property to match the primary code examples ('jsx', 'javascript', 'typescript', or 'tsx')
```

### For Python

```
LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```python``` for all Python code examples
- Set language property to 'python'
- Include proper Python syntax (indentation, type hints if relevant)
```

### For Java

```
LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```java``` for all Java code examples
- Set language property to 'java'
- Include complete class/method signatures when relevant
```

### For C++

```
LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```cpp``` or ```c++``` for all C++ code examples
- Set language property to 'cpp'
- Include necessary headers and namespace declarations when relevant
```

### For TypeScript

```
LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```typescript``` for TypeScript code without JSX
- Use ```tsx``` for TypeScript code with JSX/React elements
- Set language property to match ('typescript' or 'tsx')
- Include type annotations and interfaces when relevant
```

### For JavaScript

```
LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```javascript``` for all JavaScript code examples
- Set language property to 'javascript'
- Use modern JavaScript (ES6+) syntax (const/let, arrow functions, template literals when appropriate)
- Avoid TypeScript types or annotations
```

### For Web Development (HTML/CSS/JS)

```
LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```html``` for HTML markup examples
- Use ```css``` for CSS styling examples
- Use ```javascript``` for JavaScript examples
- Set language property to the primary language used in the card
- If multiple languages are shown, use the most relevant one as the language property
```

### For Tailwind CSS

```
LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```html``` for code blocks showing Tailwind classes in HTML elements
- Use ```css``` if showing Tailwind classes in a CSS context (e.g., @apply)
- Set language property to 'html' or 'css' based on the context of the code examples
```

---

## Usage Template

Fill in the placeholders:
- **[NUMBER]**: How many flashcards (e.g., 20, 30, 50)
- **[TOPIC]**: Subject matter (e.g., "React Hooks", "Python List Comprehensions", "Java Streams API")
- **[LEVEL]**: Difficulty level (beginner, intermediate, advanced)
- **[INSERT LANGUAGE-SPECIFIC RULES HERE]**: Copy the appropriate section from above

---

## Examples

Add any number of examples here. Each example should include its prompt and a short explanation of what it covers.

### Example 1 — Python Fundamentals (Beginner)

**Explanation:**
- Topic: Python fundamentals
- Level: beginner
- Language rules: Python-only code blocks

**Prompt:**
```
Consider the following JSON format for a programming flashcard (AI-generated fields only):

{
  front: 'What is a list comprehension in Python?',
  back: `A list comprehension provides a concise way to create lists based on existing lists or iterables.

Example:
\`\`\`python
squares = [x**2 for x in range(10)]
# Result: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
\`\`\`

With filtering:
\`\`\`python
even_squares = [x**2 for x in range(10) if x % 2 == 0]
# Result: [0, 4, 16, 36, 64]
\`\`\``,
  language: 'python',
}

IMPORTANT FORMATTING RULES:
1. Use template literals (backticks) for the 'back' property when including code blocks
2. Escape code fence backticks inside template literals: \`\`\`
3. The code fence language must exactly match the actual code syntax
4. The 'language' property must match the primary language used in the code examples
5. Avoid inline code backticks inside regular text (e.g., don't write `mx-auto` or `flex` in sentences). Spell them out without backticks to prevent invalid HTML nesting.

LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```python``` for all Python code examples
- Set language property to 'python'
- Include proper Python syntax (indentation, type hints if relevant)

Based on this format, create a complete deck with 20 questions and answers related to Python fundamentals. The questions should be of a beginner level.

Use this Deck structure for the output (AI-generated fields only):

{
  title: 'Python Fundamentals',
  description: 'Beginner-friendly Python concepts and syntax.',
  language: 'python',
  tags: ['python', 'basics'],
  cards: [/* Card objects with front/back/language only */],
}

Ensure each card:
- Has a clear, concise question in 'front'
- Has a detailed explanation with relevant code examples in 'back'
- Uses the correct code fence language matching the actual code syntax
- Has the correct 'language' property
- Uses consistent formatting and style throughout
```
