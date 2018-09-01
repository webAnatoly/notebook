import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import css from './SmallButton.css';

const SmallButton = ({ children, clickHandler, customizeStyles }) => {
  const styles = [
    css.SmallButton,
    customizeStyles,
  ];
  return (
    <Button
      htmlType="button"
      customizeStyles={styles.join(' ')}
      clickHandler={clickHandler}
    >
      {children}
    </Button>
  );
};


SmallButton.propTypes = {
  children: PropTypes.string,
  clickHandler: PropTypes.func,
  customizeStyles: PropTypes.string,
};

SmallButton.defaultProps = {
  children: 'SmallButton',
  clickHandler: () => null,
  customizeStyles: '',
};

export default SmallButton;
