import { combineEpics } from "redux-observable";

import { loginAttemptEpic } from "../auth/epics";

export const rootEpic = combineEpics(loginAttemptEpic);
