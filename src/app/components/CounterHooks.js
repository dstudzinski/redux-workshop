import {useDispatch, useSelector} from "react-redux";


function CounterHooks({selector, increment, decrement}) {
  const counterValue = useSelector(selector);
  const dispatch = useDispatch();

  return <div>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <div>Counter: {counterValue}</div>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
  </div>;
}

export {CounterHooks}
