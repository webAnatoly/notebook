import * as actionTypes from './actionTypes';

/* Action Creators */
export const toggleLeftSidebar = () => (
  {
    type: actionTypes.TOGGLE_LEFT_SIDEBAR,
  }
);

export const editEntry = () => (
  {
    type: actionTypes.START_EDIT_ENTRY,
  }
);
