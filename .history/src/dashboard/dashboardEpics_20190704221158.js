import { ofType } from "redux-observable";
import { DASHBOARD_LOAD_ATTEMPTED, dashboardLoadSuccess } from "./dashboardActions";
import { switchMap, ignoreElements } from "rxjs/operators";
import { from } from "rxjs";

export const dashboardLoadStartEpic = (action$, state$) => action$.pipe(
  ofType(DASHBOARD_LOAD_ATTEMPTED),
  switchMap(action => from(fetch('https://reqres.in/api/users?page=2', {
    method: 'get',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'}
  })).then(response => {
    if(response.ok) return response.json();
    return ignoreElements();
  }),
  map(dashboardLoadSuccess)
)