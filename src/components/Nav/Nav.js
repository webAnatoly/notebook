import React from 'react';
import PropTypes from 'prop-types';

import styles from './Nav.css';

const Nav = ({ customizeStyles, children }) => {
  const css = [
    styles.Nav,
    customizeStyles, // CSS стили получаемые в пропсах
  ];
  return (
    <div className={css.join(' ')}>
      {children}
    </div>
  );
};

Nav.propTypes = {
  customizeStyles: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

Nav.defaultProps = {
  customizeStyles: '',
  children: null,
};

export default Nav;
