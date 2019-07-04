import { LOGIN_ATTEMPTED, loginSuccess, loginFailure } from "./actions";
import { from } from "rxjs";
import {ignoreElements, switchMap, catchError, map} from "rxjs/operators"
import {ofType} from "redux-observable"

export const loginAttempt = (action$, state$) => action$.pipe(
  ofType(LOGIN_ATTEMPTED),
  switchMap(action => from(
    fetch('https://reqres.in/api/login', {
      method: "POST",
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "email": action.payload.username,
        "password": action.payload.password
      })
    }).then(response => {
      if(response.ok) return response.json();
      return ignoreElements();
    })
  ),
  map(loginSuccess),
  catchError(err => loginFailure(err))
);