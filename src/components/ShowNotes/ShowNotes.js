import React from 'react';
import PropTypes from 'prop-types';

import css from './ShowNotes.css';
import Note from '../Note/Note';

const ShowNotes = ({ isFullNote, showFullNote }) => {
  /*
  [TO DO] генерить в переменную result маленькие превью заметок на основе JSON
  файла полученного с сервера.
  */
  let result = <Note showFullNote={showFullNote}>Маленькая заметка</Note>;

  if (isFullNote) {
    result = (
      <div className={css.isFullNote}>Большая заметка</div>
    );
  }
  return result;
};

ShowNotes.propTypes = {
  isFullNote: PropTypes.bool.isRequired,
  showFullNote: PropTypes.func.isRequired,
};

ShowNotes.defaultProps = {

};

export default ShowNotes;
