import React from 'react';
import PropTypes from 'prop-types';

import styles from './Sidebar.css';

/*
Когда пользователь через интерфейс приложения выбирает язык,
то соответствующий json файл записываем в localStorage в поле lang.
Если он ниразу не выбрал язык, то в localStorage ничего не записываем
и по-умолчанию используем английский */
let lang = window.localStorage.getItem('lang');
if (lang) { lang = JSON.parse(lang); }

const Sidebar = ({ customazeStyles, children }) => {
  const css = [
    styles.Sidebar,
    customazeStyles, // CSS стили получаемые в пропсах
  ];
  return (
    <div className={css.join(' ')}>
      {children}
    </div>
  );
};

Sidebar.propTypes = {
  customazeStyles: PropTypes.string,
  children: PropTypes.element,
};

Sidebar.defaultProps = {
  customazeStyles: '',
  children: null,
};

export default Sidebar;
