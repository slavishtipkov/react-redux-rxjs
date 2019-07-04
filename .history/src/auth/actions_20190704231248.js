export const LOGIN_ATTEMPTED = "LOGIN_ATTEMPTED";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginAttempt = payload => {
  return {
    type: LOGIN_ATTEMPTED,
    payload
  };
};

export const loginSuccess = payload => {
  return {
    type: LOGIN_SUCCESSFUL,
    payload
  };
};

export const loginFailure = payload => {
  return {
    type: LOGIN_FAILURE,
    payload
  };
};
export default {
  sashto: "asd"
};
