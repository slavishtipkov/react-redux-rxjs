import { createStore } from "redux";

import rootReducer from "./rootReducer";
import { createEpicMiddleware } from "redux-observable";
import { createBrowserHistory } from "history";

const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();

export default function configureStore() {}
