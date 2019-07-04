import { combineEpics } from "redux-observable";

import { loginAttemptEpic, loginSuccessEpic } from "../auth/epics";
import { dashboardLoadStartEpic } from "../dashboard/dashboardEpics";

export const rootEpic = combineEpics(
  loginAttemptEpic,
  loginSuccessEpic,
  dashboardLoadStartEpic
);
