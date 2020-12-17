function Counter({counterValue, increment, decrement}) {
  return <div>
    <button onClick={increment}>Increment</button>
    <div>Counter: {counterValue}</div>
    <button onClick={decrement}>Decrement</button>
  </div>;
}

export {Counter}
