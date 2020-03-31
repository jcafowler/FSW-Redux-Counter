import { INCREMENT, DECREMENT, DOUBLE, RESET } from "../actions/actionTypes";

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case DOUBLE:
      return state * 2;
    case RESET:
      return state = 0;
    default:
      return state;
  }
};
