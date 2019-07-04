import { combineEpics } from "redux-observable";

import { loginAttemptEpic, loginSuccessEpic } from "../auth/epics";

export const rootEpic = combineEpics(loginAttemptEpic, loginSuccessEpic);
