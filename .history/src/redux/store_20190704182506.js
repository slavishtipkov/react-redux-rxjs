import { createStore } from "redux";

import rootReducer from "./rootReducer";

export default createStore(
  rootReducer /* preloadedState, */,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
