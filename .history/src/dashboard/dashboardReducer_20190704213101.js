import {
  DASHBOARD_LOAD_ATTEMPTED,
  DASHBOARD_LOAD_SUCCESSFUL,
  DASHBOARD_LOAD_FAILED
} from "./dashboardActions";

const initialState = {
  dashboardData: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_LOAD_ATTEMPTED:
      return {
        ...state,
        dashboardData: action.payload.data
      };
    case DASHBOARD_LOAD_SUCCESSFUL:
      return {
        ...state,
        dashboardData: action.payload.data
      };
    case DASHBOARD_LOAD_FAILED:
      return {
        ...state,
        dashboardData: action.payload.data
      };
    default:
      return state;
  }
}
