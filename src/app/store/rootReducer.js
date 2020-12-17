import { combineReducers} from 'redux';

import {counterReducer, counterReducerName} from './data/counterReducer';

const rootReducer = combineReducers({
  [counterReducerName]: counterReducer,
});

export {
  rootReducer,
}
