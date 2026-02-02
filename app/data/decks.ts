const react_beginner: {
  cards: {
    id: string;
    front: string;
    back: string;
    language: string;
  }[];
} = {
  cards: [
    {
      id: '1',
      front: 'What is React?',
      back: 'React is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and manage application state efficiently.',
      language: 'javascript',
    },
    {
      id: '2',
      front: 'What are React components?',
      back: 'Components are the building blocks of React applications. They are reusable pieces of code that return React elements describing what should appear on the screen. Components can be class-based or functional.',
      language: 'javascript',
    },
    {
      id: '3',
      front: 'What is JSX?',
      back: 'JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript. It makes React code more readable and expressive.\n\nExample:\n```jsx\nconst element = <h1>Hello, world!</h1>;',
      language: 'jsx',
    },
    {
      id: '4',
      front: 'What is useState?',
      back: 'useState is a React hook for managing state in functional components.\n\nExample:\n```javascript\nconst [count, setCount] = useState(0);\n```\n\nYou can also initialize with a function:\n```javascript\nconst [state, setState] = useState(() => expensiveComputation());\n```',
      language: 'javascript',
    },
    {
      id: '5',
      front: 'What is useEffect?',
      back: 'useEffect is a React hook that lets you perform side effects in functional components. It can be used for data fetching, subscriptions, or manually changing the DOM.\n\nExample:\n```javascript\nuseEffect(() => {\n  document.title = `You clicked ${count} times`;\n}, [count]); // Only re-run if count changes',
      language: 'javascript',
    },
    {
      id: '6',
      front: 'What is the difference between props and state?',
      back: 'Props (properties) are read-only data passed from parent to child components. State is data that is managed within a component and can be changed over time, usually in response to user actions.',
      language: 'javascript',
    },
    {
      id: '7',
      front: 'What are keys in React lists?',
      back: 'Keys are special string attributes that help React identify which items have changed, been added, or been removed in lists. They should be unique among siblings.\n\nExample:\n```jsx\n{items.map(item => (\n  <li key={item.id}>{item.name}</li>\n))}',
      language: 'jsx',
    },
    {
      id: '8',
      front: 'What is conditional rendering in React?',
      back: 'Conditional rendering refers to displaying different UI elements based on certain conditions. This can be done using JavaScript operators like if statements, ternary operators, or logical && operator.\n\nExample:\n```jsx\n{isLoggedIn ? <Welcome /> : <Login />}',
      language: 'jsx',
    },
    {
      id: '9',
      front: 'What is event handling in React?',
      back: 'Event handling in React is similar to handling events in DOM elements, but with camelCase naming convention and passing functions as event handlers rather than strings.\n\nExample:\n```jsx\n<button onClick={handleClick}>\n  Click me\n</button>',
      language: 'jsx',
    },
    {
      id: '10',
      front: 'What is a controlled component?',
      back: "A controlled component is a form element (like input, textarea, or select) whose value is controlled by React state. The component's value is set by state and updates via onChange handlers.\n\nExample:\n```jsx\nconst [inputValue, setInputValue] = useState('');\n<input \n  value={inputValue} \n  onChange={(e) => setInputValue(e.target.value)} \n/>",
      language: 'jsx',
    },
    {
      id: '11',
      front: 'What is an uncontrolled component?',
      back: 'An uncontrolled component is a form element where form data is handled by the DOM itself, not by React state. You can use refs to access the DOM element\'s value when needed.\n\nExample:\n```jsx\nconst inputRef = useRef(null);\n<input type="text" ref={inputRef} />\n// Access value: inputRef.current.value',
      language: 'jsx',
    },
    {
      id: '12',
      front: 'What are React fragments?',
      back: 'React fragments let you group a list of children without adding extra nodes to the DOM. Useful when you need to return multiple elements from a component.\n\nExample:\n```jsx\nreturn (\n  <>\n    <ChildA />\n    <ChildB />\n  </>\n);',
      language: 'jsx',
    },
    {
      id: '13',
      front: 'What is prop drilling?',
      back: "Prop drilling refers to the process of passing data through multiple levels of components via props, even when intermediate components don't need the data themselves. Context API or state management libraries can help avoid this.",
      language: 'javascript',
    },
    {
      id: '14',
      front: 'What is the Context API?',
      back: "Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It's useful for global data like themes, user authentication, etc.\n\nExample:\n```jsx\nconst ThemeContext = React.createContext('light');\n<ThemeContext.Provider value=\"dark\">\n  <ChildComponent />\n</ThemeContext.Provider>",
      language: 'jsx',
    },
    {
      id: '15',
      front: 'What is lifting state up?',
      back: 'Lifting state up is a pattern where you move shared state to the closest common ancestor of components that need it. This allows multiple components to share and synchronize state.',
      language: 'javascript',
    },
    {
      id: '16',
      front: 'What are custom hooks?',
      back: "Custom hooks are JavaScript functions that start with 'use' and can call other hooks. They allow you to extract component logic into reusable functions.\n\nExample:\n```javascript\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const stored = localStorage.getItem(key);\n    return stored ? JSON.parse(stored) : initialValue;\n  });\n  \n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n  \n  return [value, setValue];\n}",
      language: 'javascript',
    },
    {
      id: '17',
      front: 'What is the Virtual DOM?',
      back: 'The Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize updates by comparing the virtual DOM with a previous version and only updating the real DOM where changes occurred.',
      language: 'javascript',
    },
    {
      id: '18',
      front: 'What is the difference between class and functional components?',
      back: 'Class components use ES6 classes and have lifecycle methods. Functional components are plain JavaScript functions that can use hooks. With hooks, functional components can now do everything class components can do.',
      language: 'javascript',
    },
    {
      id: '19',
      front: 'What is React.memo()?',
      back: 'React.memo() is a higher-order component that memoizes a functional component. It prevents unnecessary re-renders by comparing previous props with new props.\n\nExample:\n```jsx\nconst MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});',
      language: 'jsx',
    },
    {
      id: '20',
      front: 'What are the rules of hooks?',
      back: '1. Only call hooks at the top level (not inside loops, conditions, or nested functions)\n2. Only call hooks from React function components or custom hooks\n3. Hooks must be called in the same order each time a component renders',
      language: 'javascript',
    },
  ],
};

export { react_beginner };
