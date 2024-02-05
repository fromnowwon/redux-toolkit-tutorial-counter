import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div>
      <div>{count}</div>
      {/* 방식1 */}
      <button onClick={() => dispatch(counterSlice.actions.subtract(2))}>-</button>
      {/* 방식2 */}
      <button onClick={() => dispatch({ type: 'counter/add', payload: 3 })}>+</button>
    </div>
  )
}


export default Counter;