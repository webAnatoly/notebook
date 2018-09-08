import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLeftSidebarVisible: false,
  editing: false,
  userNotes: [{
    userId: 'guest',
    notes: [{
      noteId: 'guest-1234',
      noteTitile: 'Тестовая заметка',
      noteContent: 'Это тестовая заметка. Бла бла бла и прочий lorem ipsum',
      creatDate: '',
      changeDate: '',
    }],
  }],
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

const cancelEditing = (state) => {
  const newState = { ...state };
  newState.editing = false;
  return newState;
};

const saveEntryStart = (state, action) => {
  const newState = { ...state };
  console.log('action.data: ', action.data);
  console.log('newState: ', newState);
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LEFT_SIDEBAR: return toggleLeftSidebar(state);
    case actionTypes.EDIT_ENTRY: return editEntry(state);
    case actionTypes.EDIT_ENTRY_CANCEL: return cancelEditing(state);
    case actionTypes.SAVE_ENTRY_START: return saveEntryStart(state, action);
    default: return state;
  }
};

export default reducer;
