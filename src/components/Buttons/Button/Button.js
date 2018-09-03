/*
Это базовый компонент-шаблон для всех кнопок в приложении.
На его основе которого будут создаваться кнопки любых размеров и стилей во всём приложении.
*/

import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.css';

const Button = ({
  htmlType, children, animation, customizeStyles, clickHandler,
}) => {
  const classes = [
    css.Button,
    animation ? css.ClickedButton : '',
    customizeStyles,
  ];
  const btn = (
    /* eslint-disable react/button-has-type */
    <button
      type={htmlType}
      className={classes.join(' ')}
      onClick={clickHandler}
      onTouchStart={clickHandler}
    >
      {children}
    </button>
    /* eslint-disable react/button-has-type */
  );
  return btn;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  htmlType: PropTypes.oneOf(['button', 'submit']).isRequired,
  animation: PropTypes.bool,
  customizeStyles: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  animation: false,
  customizeStyles: '',
  clickHandler: () => null,
};

export default Button;
