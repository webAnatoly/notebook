import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import css from './SmallButton.css';

const SmallButton = ({ children, clickHandler }) => {
  const styles = [
    css.SmallButton,
  ];
  return (
    <Button
      htmlType="button"
      customazeStyles={styles.join(' ')}
      clickHandler={clickHandler}
    >
      {children}
    </Button>
  );
};


SmallButton.propTypes = {
  children: PropTypes.string,
  clickHandler: PropTypes.func,
};

SmallButton.defaultProps = {
  children: 'SmallButton',
  clickHandler: () => null,
};

export default SmallButton;
