import { createStore } from "redux";

import rootReducer from "./rootReducer";
import { createEpicMiddleware } from "redux-observable";
import { createDevTools } from "redux-devtools";

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
