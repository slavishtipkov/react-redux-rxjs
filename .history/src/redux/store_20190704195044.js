import { createStore } from "redux";

import rootReducer from "./rootReducer";
import { createEpicMiddleware } from "redux-observable";

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
