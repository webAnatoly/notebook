import React from 'react';
import PropTypes from 'prop-types';

import styles from './Nav.css';

const Nav = ({ customazeStyles, children }) => {
  const css = [
    styles.Nav,
    customazeStyles, // CSS стили получаемые в пропсах
  ];
  return (
    <div className={css.join(' ')}>
      {children}
    </div>
  );
};

Nav.propTypes = {
  customazeStyles: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

Nav.defaultProps = {
  customazeStyles: '',
  children: null,
};

export default Nav;
