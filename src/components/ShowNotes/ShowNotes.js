import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/mainActions';

import css from './ShowNotes.css';
import Note from '../Note/Note';
import Editor from '../../containers/Editor/Editor';

const ShowNotes = ({
  isFullNote,
  showFullNote,
  editing,
  notes,
  fullNote,
}) => {
  /*
  [TO DO] генерить в переменную result маленькие превью заметок на основе JSON
  файла полученного с сервера.
  */

  let result = null;

  // если свойство editing === true значит рендерим компонент отвечающий за редактирование заметки
  if (editing) {
    result = (
      <Editor />
    );
  } else {
    result = Object.keys(notes).map(key => (
      <Note
        key={key} // ключ заметки это результат вызова Date.now();
        showFullNote={() => showFullNote({
          title: notes[key].title,
          content: notes[key].content,
          createDate: notes[key].createDate,
          changeDate: notes[key].changeDate,
        })}
        customizeStyles={css.Node_Small}
        title={notes[key].title}
      >
        {notes[key].content}
      </Note>
    ));

    // если isFullNote значит рендерим одну большую заметку
    if (isFullNote) {
      result = (
        <Note
          isFullNote
          customizeStyles={css.FullNote}
          title={fullNote.title}
        >
          {fullNote.content}
        </Note>
      );
    }
  }
  return result;
};

ShowNotes.propTypes = {
  isFullNote: PropTypes.bool.isRequired,
  showFullNote: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
};

// ShowNotes.defaultProps = {

// };

const mapStateToProps = state => ({
  editing: state.editing,
  notes: state.notes,
  isFullNote: state.isFullNote,
  fullNote: state.fullNote,
});

const mapDispatchToProps = dispatch => ({
  showFullNote: data => dispatch(actions.showFullNote(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowNotes);
