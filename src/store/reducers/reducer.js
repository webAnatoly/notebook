import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isSidebarVisible: false,
  startAddEntry: false,
};

const showSidebar = (state, action) => {
  const newState = { ...state };
  if (action.showSidebar) {
    newState.isSidebarVisible = true;
  } else {
    newState.isSidebarVisible = false;
  }
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return showSidebar(state, action);
    default: return state;
  }
};

export default reducer;
