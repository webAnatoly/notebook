import React from 'react';
import PropTypes from 'prop-types';

import css from './ShowNotes.css';
import Note from '../Note/Note';

const ShowNotes = ({ fullNote, showFullNote }) => {
  /*
  [TO DO] генерить в переменную result маленькие превью заметок на основе JSON
  файла полученного с сервера.
  */
  let result = <Note showFullNote={showFullNote} />;

  if (fullNote) {
    result = (
      <div className={css.FullNote}>Большая заметка</div>
    );
  }
  return result;
};

ShowNotes.propTypes = {
  fullNote: PropTypes.bool.isRequired,
  showFullNote: PropTypes.func.isRequired,
};

ShowNotes.defaultProps = {

};

export default ShowNotes;
