import React from 'react';
import PropTypes from 'prop-types';
import styles from './Wrapper.css';

const Wrapper = ({ customizeStyles, children }) => {
  const css = [
    styles.Wrapper,
    customizeStyles,
  ];
  return (
    <div className={css.join(' ')}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  customizeStyles: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Wrapper.defaultProps = {
  customizeStyles: '',
  children: null,
};

export default Wrapper;
