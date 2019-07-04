import { combineEpics } from "redux-observable";

import { loginAttempt } from "../auth/epics";

export const rootEpic = combineEpics({ loginAttempts });
