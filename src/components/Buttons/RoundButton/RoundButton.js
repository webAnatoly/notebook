import React from 'react';
import PropTypes from 'prop-types';
import css from './RoundButton.css';

const RoundButton = ({ customizeStyles, clickHandler }) => {
  const styles = [
    customizeStyles,
    css.RoundButton,
  ];
  return (
    <svg width="14" height="14" className={css.svgIcon} onClick={clickHandler}>
      <circle cx="6" cy="6" r="6" fill="#ffffff" />
      <line x1="5.5" y1="8.5" x2="10" y2="4.5" style={{ stroke: '#15a4fa', strokeWidth: '2' }} />
      <line x1="2" y1="4.5" x2="6.5" y2="8.5" style={{ stroke: '#15a4fa', strokeWidth: '2' }} />
    </svg>
  );
};

RoundButton.propTypes = {
  customizeStyles: PropTypes.string,
  clickHandler: PropTypes.func,
};

RoundButton.defaultProps = {
  customizeStyles: '',
  clickHandler: () => alert('works'),
};

export default RoundButton;
