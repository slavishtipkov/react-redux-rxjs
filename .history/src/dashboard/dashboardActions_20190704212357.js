export const DASHBOARD_LOAD_ATTEMPTED = "DASHBOARD_LOAD_ATTEMPTED";
export const DASHBOARD_LOAD_SUCCESSFUL = "DASHBOARD_LOAD_SUCCESSFUL";
export const DASHBOARD_LOAD_FAILED = "DASHBOARD_LOAD_FAILED";

export const dashboardLoadAttempted = payload => {
  return {
    type: DASHBOARD_LOAD_ATTEMPTED,
    payload
  };
};
