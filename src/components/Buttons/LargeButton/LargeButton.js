import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import css from './LargeButton.css';

const LargeButton = ({ children }) => (
  <Button
    customazeStyles={css.LargeButton}
    htmlType="button"
  >
    {children}
  </Button>
);

export default LargeButton;

LargeButton.propTypes = {
  children: PropTypes.string,
};

LargeButton.defaultProps = {
  children: 'LargeButton',
};
