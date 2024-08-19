import { useState, useEffect, useRef } from "react";

const usePrevious = (value) => {
    
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const UsePreviousHook = () => {

  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count - 1)}>Decrement </button>
    </div>
  );
};
export default UsePreviousHook;
