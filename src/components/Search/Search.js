import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import css from './Search.css';

const Search = ({ isShiftMenu, userInput }) => {
  let result = null;
  const value = userInput;
  /* поисковое поле для мобильной версии */
  if (isShiftMenu && window.innerWidth <= 768) {
    /* для мобильной версии просто инпут. Иконка будет рядом в виде кнопки */
    result = (
      <Input
        id="search_1"
        customizeStyles={[css.mobileSearch, css.mobileSearch_show].join(' ')}
        inputTagName="input"
        elementConfig={{ type: 'text', placeholder: 'search entries' }}
        value={value}
      />);
  } else {
    /* поисковое поле для десктопной версии (с иконкой поиска) */
    result = <Input id="search_1" customizeStyles={css.Search} value={value} />;
  }
  return result;
};

Search.propTypes = {
  isShiftMenu: PropTypes.bool,
  userInput: PropTypes.string,
};

Search.defaultProps = {
  isShiftMenu: false,
  userInput: '',
};

export default Search;
