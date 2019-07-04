import { LOGIN_ATTEMPTED } from "./actions";
import { from } from "rxjs";
import {switchMap} from "redux-observable"

export const loginAttempt = (action$, state$) => action$.pipe(
  ofType(LOGIN_ATTEMPTED),
  switchMap(action => from(
    fetch(input:'https://reqres.in/api/login', {
      method: "POST",
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "email": action.payload.username,
        "password": action.payload.password
      })
    })
  )
);