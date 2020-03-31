import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Counter from "../components/Counter"
import { incrementCount, decrementCount, doubleCount, resetCount } from "../actions/counterActions"

const CounterContainer = () => {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementCount())
  }

  const decrement = () => {
    dispatch(decrementCount())
  }
  const double = () => {
    dispatch(doubleCount())
  }
  const reset = () => {
    dispatch(resetCount())
  }

  return (
    <React.Fragment>
      <Counter value={count} onIncrement={increment} onDecrement={decrement} onDouble={double} onReset={reset} />
    </React.Fragment>
  )
}

export default CounterContainer