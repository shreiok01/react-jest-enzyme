import React, { useState } from "react";
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <span data-test="error-message" className={`error ${error ? " " : "hidden"}`}>
        count cannot go below zero
      </span>
      <button
        data-test="increment-button"
        onClick={() => {
          if (error) {
            setError(false);
          }
          setCount(count + 1);
        }}
      >
        Increment Counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            setError(true);
          }
        }}
      >
        Decrement Counter
      </button>
    </div>
  );
};

export default App;
