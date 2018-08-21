import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import css from './SmallButton.css';

const SmallButton = ({ children }) => {
  const styles = [
    css.SmallButton,
  ];
  return (
    <Button
      htmlType="button"
      customazeStyles={styles.join(' ')}
    >
      {children}
    </Button>
  );
};


SmallButton.propTypes = {
  children: PropTypes.string,
};

SmallButton.defaultProps = {
  children: 'SmallButton',
};

export default SmallButton;
