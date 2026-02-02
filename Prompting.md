# Flashcard Deck Generation Prompt Template

Use this template to generate flashcard decks for any programming language or topic.

---

## Base Prompt

```
Consider the following JSON format for a programming flashcard:

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

IMPORTANT FORMATTING RULES:
1. Use template literals (backticks) for the 'back' property when including code blocks
2. Escape code fence backticks inside template literals: \`\`\`
3. The code fence language (e.g., ```python```, ```javascript```) must exactly match the actual code syntax
4. The 'language' property must match the primary language used in the code examples

LANGUAGE-SPECIFIC INSTRUCTIONS:
[INSERT LANGUAGE-SPECIFIC RULES HERE - See examples below]

Based on this format, create a complete array/deck with [NUMBER] questions and answers related to [TOPIC]. The questions should be of a [LEVEL] level.

Ensure each card:
- Has a unique sequential id (starting from 1)
- Has a clear, concise question in 'front'
- Has a detailed explanation with relevant code examples in 'back'
- Uses the correct code fence language matching the actual code syntax
- Has the correct 'language' property
- Uses consistent formatting and style throughout
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

### For Web Development (HTML/CSS/JS)

```
LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```html``` for HTML markup examples
- Use ```css``` for CSS styling examples
- Use ```javascript``` for JavaScript examples
- Set language property to the primary language used in the card
- If multiple languages are shown, use the most relevant one as the language property
```

---

## Usage Template

Fill in the placeholders:
- **[NUMBER]**: How many flashcards (e.g., 20, 30, 50)
- **[TOPIC]**: Subject matter (e.g., "React Hooks", "Python List Comprehensions", "Java Streams API")
- **[LEVEL]**: Difficulty level (beginner, intermediate, advanced)
- **[INSERT LANGUAGE-SPECIFIC RULES HERE]**: Copy the appropriate section from above

---

## Example Complete Prompt

```
Consider the following JSON format for a programming flashcard:

{
  id: 1,
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

LANGUAGE-SPECIFIC INSTRUCTIONS:
- Use ```python``` for all Python code examples
- Set language property to 'python'
- Include proper Python syntax (indentation, type hints if relevant)

Based on this format, create a complete array/deck with 20 questions and answers related to Python fundamentals. The questions should be of a beginner level.

Ensure each card:
- Has a unique sequential id (starting from 1)
- Has a clear, concise question in 'front'
- Has a detailed explanation with relevant code examples in 'back'
- Uses the correct code fence language matching the actual code syntax
- Has the correct 'language' property
- Uses consistent formatting and style throughout
```
