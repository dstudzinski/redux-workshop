import {configureStore} from "@reduxjs/toolkit";

import {rootReducer} from "./rootReducer";

const store = configureStore({reducer: rootReducer, devTools: true});

export {
  store as reduxStore,
}
