import React from 'react';
import PropTypes from 'prop-types';

import Note from '../Note/Note';
import styles from './Workspace.css';

const Workspace = ({ customazeStyles }) => {
  const css = [
    styles.Workspace,
    customazeStyles,
  ];
  return (
    <div className={css.join(' ')}>
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
      <Note customizeStyles={styles.Note} />
    </div>
  );
};

Workspace.propTypes = {
  customazeStyles: PropTypes.string,
};

Workspace.defaultProps = {
  customazeStyles: '',
};

export default Workspace;
