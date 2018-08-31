import * as actionTypes from './actionTypes';

/* Action Creators */
export const showSidebar = boolValue => (
  {
    type: actionTypes.SHOW_SIDEBAR,
    showSidebar: boolValue,
  }
);

export const hideSidebar = value => (
  {
    type: actionTypes.HIDE_SIDEBAR,
    anyPayload: value,
  }
);
