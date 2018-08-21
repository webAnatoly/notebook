import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.css';

const Container = ({ customizeStyles, children }) => {
  const css = [
    styles.Container,
    customizeStyles,
  ];
  return (
    <div className={css.join(' ')}>
      {children}
    </div>
  );
};

Container.propTypes = {
  customizeStyles: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Container.defaultProps = {
  customizeStyles: '',
  children: null,
};

export default Container;
