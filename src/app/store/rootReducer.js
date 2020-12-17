import {counterReducer, counterReducerName} from './data/counterSlice';

const rootReducer = {
  [counterReducerName]: counterReducer,
}

export {
  rootReducer,
}
