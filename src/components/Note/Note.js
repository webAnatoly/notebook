import React from 'react';
import PropTypes from 'prop-types';
import DecorLine from '../decorLine/decorLine';
import styles from './Note.css';

const showNote = () => {
  /* Эта функция должна брать уникальный id превьюшки и по этому id
  брать с сервера полное содержание заметки.
  Диспатчить событие, по которому компонент Workspace будет рендерить
  вместо списка маленьких заметок, одну большую заметку. */
};

const Note = ({
  customizeStyles,
  showFullNote,
  children,
  title,
  isFullNote,
}) => {
  const css = [
    !isFullNote ? styles.Note : '',
    customizeStyles,
    styles.baseNote,
  ];
  return (
    <div className={css.join(' ')}>
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
      <div>
        {/* [TO DO] Если юзер не ввел название заметки,
        то title должен составляться из первых нескольких слов заметки
        с многоточием на конче */}
        <div className={styles.title}>{title}</div>
        <DecorLine customizeStyles={styles.decorLine} />
        <div
          /* Здесь используется innerHTML потому что получаемый текст может быть отформатирован
          в редакторе. Форматирование в редакторе осуществляется через document.execCommand */
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
    </div>
  );
};

Note.propTypes = {
  customizeStyles: PropTypes.string,
  showFullNote: PropTypes.func,
  isFullNote: PropTypes.bool,
  children: PropTypes.string,
  title: PropTypes.string,
};

Note.defaultProps = {
  customizeStyles: '',
  children: '',
  title: '',
  showFullNote: () => null,
  isFullNote: false, // показывать или нет заметку в полном размере
};

export default Note;
