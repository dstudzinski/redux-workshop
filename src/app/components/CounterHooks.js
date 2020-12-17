import {useDispatch, useSelector} from "react-redux";

import {increment, decrement, getCounterValue} from "../store/data/counterSlice";

function CounterHooks() {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  return <div>
    <button onClick={() => {dispatch(increment())}}>Increment</button>
    <div>Counter: {counterValue}</div>
    <button onClick={() => {dispatch(decrement())}}>Decrement</button>
  </div>;
}

export {CounterHooks}
