import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLeftSidebarVisible: false,
  editing: false,
  isFullNote: false,
  notes: {
    1536573151000: { // в качестве ключа заметки используется дата её создания Data.now()
      title: 'Тестовая заметка',
      content: 'Это тестовая заметка',
      changeDate: '',
    },
    1536666309544: { // в качестве ключа заметки используется дата её создания Data.now()
      title: 'Вторая тестовая заметка',
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, ullam!',
      changeDate: '',
    },
  },
  fullNote: {
    title: '',
    content: '',
    createDate: '',
    changeDate: '',
  },
};

const copyState = (state) => {
  const newState = JSON.parse(JSON.stringify(state));
  return newState;
};

const toggleLeftSidebar = (state) => {
  const prevValue = state.isLeftSidebarVisible;
  const newState = copyState(state);
  newState.isLeftSidebarVisible = !prevValue;
  return newState;
};

const editEntry = (state) => {
  const newState = copyState(state);
  newState.editing = true;
  return newState;
};

const cancelEditing = (state) => {
  const newState = copyState(state);
  newState.editing = false;
  return newState;
};

const saveEntryStart = (state, action) => {
  const newState = copyState(state);
  newState.notes[action.data.key ? action.data.key : Date.now()] = { ...action.data };
  newState.editing = false;
  return newState;
};

const showFullNote = (state, action) => {
  const newState = copyState(state);
  newState.fullNote = { ...action.data };
  newState.isFullNote = true;
  return newState;
};

const browseAllEntries = (state) => {
  const newState = copyState(state);
  newState.editing = false;
  newState.isFullNote = false;
  newState.editing = false;
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LEFT_SIDEBAR: return toggleLeftSidebar(state);
    case actionTypes.EDIT_ENTRY: return editEntry(state);
    case actionTypes.EDIT_ENTRY_CANCEL: return cancelEditing(state);
    case actionTypes.SAVE_ENTRY_START: return saveEntryStart(state, action);
    case actionTypes.SHOW_FULL_NOTE: return showFullNote(state, action);
    case actionTypes.BROWSE_ALL_ENTRIES: return browseAllEntries(state);
    default: return state;
  }
};

export default reducer;
