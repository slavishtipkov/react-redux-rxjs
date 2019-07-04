import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from "../auth/reducer";
import dashboardReducer from "../dashboard/dashboardReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    dashboardReducer
  });
