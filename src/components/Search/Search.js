import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import css from './Search.css';

const Search = ({ show, isShiftMenu }) => {
  let result = null;
  /* показать поле поиска в мобильной версии после нажатия на иконку поиска */
  if (show && isShiftMenu) {
    /* для мобильной версии просто инпут. Иконка будет рядом в виде кнопки */
    result = <Input id="search_1" customizeStyles={[css.Search, css.Search_show].join(' ')} inputTagName="input" />;
  } else {
    /* поисковое поле для десктопной версии (с иконкой поиска) */
    result = <Input id="search_1" customizeStyles={[css.Search, css.Search_hide].join(' ')} />;
  }
  return result;
};

Search.propTypes = {
  show: PropTypes.bool,
  isShiftMenu: PropTypes.bool,
};

Search.defaultProps = {
  show: true,
  isShiftMenu: false,
};

export default Search;
