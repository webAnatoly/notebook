import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import css from './LargeButton.css';

const LargeButton = ({ children, clickHandler }) => (
  <Button
    customazeStyles={css.LargeButton}
    htmlType="button"
    clickHandler={clickHandler}
  >
    {children}
  </Button>
);

export default LargeButton;

LargeButton.propTypes = {
  children: PropTypes.string,
  clickHandler: PropTypes.func,
};

LargeButton.defaultProps = {
  children: 'LargeButton',
  clickHandler: () => null,
};
