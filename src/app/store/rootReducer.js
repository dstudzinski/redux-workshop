import {counterReducer, counterReducerName} from './data/counterSlice';
import {usersReducer, name} from './data/usersSlice';

const rootReducer = {
  [counterReducerName]: counterReducer,
  [name]: usersReducer,
}

export {
  rootReducer,
}
