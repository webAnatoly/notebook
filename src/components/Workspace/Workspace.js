import React from 'react';
import PropTypes from 'prop-types';

import styles from './Workspace.css';

const Workspace = ({ customazeStyles, children }) => {
  const css = [
    styles.Workspace,
    customazeStyles,
  ];
  return (
    <div className={css.join(' ')}>
      {children}
    </div>
  );
};

Workspace.propTypes = {
  customazeStyles: PropTypes.string,
  children: PropTypes.element,
};

Workspace.defaultProps = {
  customazeStyles: '',
  children: null,
};

export default Workspace;
