import React from 'react';
import PropTypes from 'prop-types';
import styles from './Note.css';

const showNote = () => {
  /* Эта функция должна брать уникальный id превьюшки и по этому id
  брать с сервера полное содержание заметки.
  Диспатчить событие, по которому компонент Workspace будет рендерить
  вместо списка маленьких заметок, одну большую заметку. */
};

const Note = ({ customizeStyles, showFullNote }) => {
  const css = [
    styles.Note,
    customizeStyles,
  ];
  return (
    <div className={css.join(' ')}>
      <div className={styles.Corner} />
      { /* [TO DO] сделать выпадающею менюшку на превьюшке заметки */}
      <div className="menu" />
      <div
        className={styles.button}
        onClick={showNote}
        onKeyDown={() => null}
        role="button"
        tabIndex="0"
        onDoubleClick={showFullNote}
        onTouchStart={showFullNote}
      />
      <div>Note</div>
    </div>
  );
};

Note.propTypes = {
  customizeStyles: PropTypes.string,
  showFullNote: PropTypes.func.isRequired,
};

Note.defaultProps = {
  customizeStyles: '',
};

export default Note;
