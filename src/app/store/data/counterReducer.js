import {DECREMENT, INCREMENT} from "../actionTypes";

const counterReducerName = 'counter';

// default state
const defaultState = {
  value: 0,
  someValue: undefined,
}

// reducer
function counterReducer(state = defaultState, action) {
  if (action.type === INCREMENT) {
    return {...state, value: state.value + 1}
  }

  if (action.type === DECREMENT) {
    return {...state, value: state.value - 1}
  }

  return state;
}

// actions creators
function increment() {
  return {type: INCREMENT};
}

function decrement() {
  return {type: DECREMENT};
}

// selectors
const getCounter = state => state[counterReducerName];
const getCounterValue = state => getCounter(state).value;

export {
  counterReducerName,
  counterReducer,
  increment,
  decrement,
  getCounterValue,
}
