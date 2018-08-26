import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import css from './Search.css';

const Search = ({ show }) => {
  let result = null;
  if (show) {
    result = <Input id="search_1" customizeStyles={css.Search} />;
  }
  return result;
};

Search.propTypes = {
  show: PropTypes.bool,
};

Search.defaultProps = {
  show: false,
};

export default Search;
