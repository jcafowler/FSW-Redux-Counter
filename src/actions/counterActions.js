import { INCREMENT, DECREMENT, DOUBLE, RESET } from "./actionTypes";

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const doubleCount = () => {
  return {type: DOUBLE}
}

export const resetCount = () => {
  return {type: RESET}
}