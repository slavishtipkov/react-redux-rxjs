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
        dashboardData: "loading..."
      };
    case DASHBOARD_LOAD_SUCCESSFUL:
      return {
        ...state,
        dashboardData: "The big data is here :D"
      };
    case DASHBOARD_LOAD_FAILED:
      return {
        ...state,
        dashboardData: "Lamer.."
      };
    default:
      return state;
  }
}
