import React from 'react';
import PropTypes from 'prop-types';

import scc from './Button.css';

const Button = ({
  htmlType, children, animation, customazeStyles,
}) => {
  const classes = [
    scc.Button,
    animation ? scc.ClickedButton : '',
    customazeStyles,
  ];
  const btn = (
    /* eslint-disable react/button-has-type */
    <button
      type={htmlType}
      className={classes.join(' ')}
    >
      {children}
    </button>
    /* eslint-disable react/button-has-type */
  );
  return btn;
};

Button.propTypes = {
  children: PropTypes.string,
  htmlType: PropTypes.oneOf(['button', 'submit']).isRequired,
  animation: PropTypes.bool,
  customazeStyles: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  animation: false,
  customazeStyles: '',
};

export default Button;
