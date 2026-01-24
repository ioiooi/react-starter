import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Why, hello there.</p>
      <p id="counter">{count}</p>
    </div>
  );
};

export default App;
