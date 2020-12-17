import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import {rootReducer} from "./rootReducer";

const store = configureStore({reducer: rootReducer, devTools: true, middleware: [thunk, ...getDefaultMiddleware()]});

export {
  store as reduxStore,
}
