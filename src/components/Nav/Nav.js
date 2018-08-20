import React from 'react';
import PropTypes from 'prop-types';

import styles from './Nav.css';

const Nav = ({ customazeStyles }) => {
  const css = [
    styles.Nav,
    customazeStyles, // CSS стили получаемые в пропсах
  ];
  return (
    <div className={css.join(' ')}>
      Nav Panel
    </div>
  );
};

Nav.propTypes = {
  customazeStyles: PropTypes.string,
};

Nav.defaultProps = {
  customazeStyles: '',
};

export default Nav;
