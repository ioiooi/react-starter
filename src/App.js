import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  // Within the first useEffect hook, whenever the count value changes, the ref value
  // countRef.current is updated to match the latest count value. This ensures that the ref
  // always holds the correct and up-to-date count value.
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  // Then, in the second useEffect hook, the countRef.current value (which represents
  // the latest count value) is used to increment and update the count state within the
  // setInterval callback.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(countRef.current + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Why, hello there.</p>
      <p id="counter">{count}</p>
    </div>
  );
};

export default App;
