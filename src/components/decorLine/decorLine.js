import React from 'react';
import PropTypes from 'prop-types';
import css from './decorLine.css';

const decorLine = (props) => {
  const { customizeStyles } = props;
  const styles = [
    css.main,
    customizeStyles,
  ];
  return (
    <div className={styles.join(' ')} />
  );
};

decorLine.propTypes = {
  customizeStyles: PropTypes.string,
};

decorLine.defaultProps = {
  customizeStyles: '',
};

export default decorLine;
