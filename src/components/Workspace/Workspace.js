import React from 'react';
import PropTypes from 'prop-types';

import styles from './Workspace.css';

const Workspace = ({ customizeStyles, children }) => {
  const css = [
    styles.Workspace,
    customizeStyles,
  ];
  return (
    <div className={css.join(' ')}>
      {children}
    </div>
  );
};

Workspace.propTypes = {
  customizeStyles: PropTypes.string,
  children: PropTypes.element,
};

Workspace.defaultProps = {
  customizeStyles: '',
  children: null,
};

export default Workspace;
