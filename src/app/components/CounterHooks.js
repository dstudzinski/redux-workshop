import {useDispatch, useSelector} from "react-redux";

import {getCounterValue, increment, decrement} from "../store/data/counterReducer";

function CounterHooks() {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  return <div>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <div>Counter: {counterValue}</div>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
  </div>;
}

export {CounterHooks}
