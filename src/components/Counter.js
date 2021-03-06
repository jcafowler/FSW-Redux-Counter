import React from "react";

const Counter = ({ value, onIncrement, onDecrement, onDouble, onReset }) => {

  return (
    <div>
    <p>value: {value}</p>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onDouble}>Double</button>
      <button onClick={onReset}>Reset</button>
    </p>
  </div>
)
} 

export default Counter;
