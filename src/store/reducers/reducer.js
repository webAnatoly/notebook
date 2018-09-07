import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLeftSidebarVisible: false,
  editing: false,
};

const toggleLeftSidebar = (state) => {
  const prevValue = state.isLeftSidebarVisible;
  const newState = { ...state };
  newState.isLeftSidebarVisible = !prevValue;
  return newState;
};

const editEntry = (state) => {
  const newState = { ...state };
  newState.editing = true;
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LEFT_SIDEBAR: return toggleLeftSidebar(state);
    case actionTypes.EDIT_ENTRY: return editEntry(state);
    default: return state;
  }
};

export default reducer;
