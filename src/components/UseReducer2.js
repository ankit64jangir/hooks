import React, { useState, useReducer } from "react";

const intialValue = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      break;
  }
}

export default function UseReducer1() {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, intialValue);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // const decrement = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <div className="App">
      <h1>useReducer 2</h1>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
