import { LOGIN_ATTEMPTED, LOGIN_SUCCESSFUL, LOGIN_FAILURE } from "./actions";

const initialState = {
  username: undefined,
  isLoggedIn: false,
  token: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ATTEMPTED:
      return {
        ...state,
        username: action.payload.username
      };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token
      };
    case LOGIN_FAILURE:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
