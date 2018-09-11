import * as actionTypes from './actionTypes';

/* Action Creators */
export const toggleLeftSidebar = () => ({ type: actionTypes.TOGGLE_LEFT_SIDEBAR });

export const editEntry = () => ({ type: actionTypes.EDIT_ENTRY });

export const cancelEditing = () => ({ type: actionTypes.EDIT_ENTRY_CANCEL });

export const saveEntryStart = data => ({ type: actionTypes.SAVE_ENTRY_START, data });

export const showFullNote = data => ({ type: actionTypes.SHOW_FULL_NOTE, data });

export const browseAllEntries = () => ({ type: actionTypes.BROWSE_ALL_ENTRIES });
