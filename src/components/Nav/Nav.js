import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import styles from './Nav.css';

const Nav = ({ customazeStyles }) => {
  const css = [
    styles.Nav,
    customazeStyles, // CSS стили получаемые в пропсах
  ];
  return (
    <div className={css.join(' ')}>
      <Button htmlType="button" customazeStyles={styles.Button}>Add Note</Button>
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
