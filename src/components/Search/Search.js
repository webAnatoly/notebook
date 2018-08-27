import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import css from './Search.css';

const Search = ({ isShiftMenu }) => {
  let result = null;
  /* поисковое поле для мобильной версии */
  if (isShiftMenu && window.innerWidth <= 768) {
    /* для мобильной версии просто инпут. Иконка будет рядом в виде кнопки */
    result = (
      <Input
        id="search_1"
        customizeStyles={[css.mobileSearch, css.mobileSearch_show].join(' ')}
        inputTagName="input"
        elementConfig={{ type: 'text', placeholder: 'search entries' }}
      />);
  } else {
    /* поисковое поле для десктопной версии (с иконкой поиска) */
    result = <Input id="search_1" customizeStyles={css.Search} />;
  }
  return result;
};

Search.propTypes = {
  isShiftMenu: PropTypes.bool,
};

Search.defaultProps = {
  isShiftMenu: false,
};

export default Search;
