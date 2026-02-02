const react_deck = [
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
];

export { react_deck };
