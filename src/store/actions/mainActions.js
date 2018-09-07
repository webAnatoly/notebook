import * as actionTypes from './actionTypes';

/* Action Creators */
export const toggleLeftSidebar = () => (
  {
    type: actionTypes.TOGGLE_LEFT_SIDEBAR,
  }
);

export const editEntry = () => (
  {
    type: actionTypes.EDIT_ENTRY,
  }
);

export const cancelEditing = () => (
  {
    type: actionTypes.EDIT_ENTRY_CANCEL,
  }
);
