import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import css from './SmallButton.css';

const SmallButton = ({
  children,
  clickHandler,
  customizeStyles,
  htmlType,
}) => {
  const styles = [
    css.SmallButton,
    customizeStyles,
  ];
  return (
    <Button
      htmlType={htmlType}
      customizeStyles={styles.join(' ')}
      clickHandler={clickHandler}
    >
      {children}
    </Button>
  );
};


SmallButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  clickHandler: PropTypes.func,
  customizeStyles: PropTypes.string,
  htmlType: PropTypes.string,
};

SmallButton.defaultProps = {
  children: '',
  clickHandler: () => null,
  customizeStyles: '',
  htmlType: 'button',
};

export default SmallButton;
