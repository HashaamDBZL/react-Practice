import React from "react";
import useCounterReducer from "../hooks/useCounterReducer";

const Counter = () => {
  const { count, dispatch } = useCounterReducer();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
