import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers/reducer';
import './normalize.css';
import './global.css';
import App from './App';

/*
Cоздаем глобальный store для всего приложения
и подключаем возможность использования redux-devtools https://github.com/zalmoxisus/redux-devtools-extension#usage */
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

/*
Определить на каком языке выводить текст в <title></title>
Значение языка берется из localStorage.
Если никакого значения там нет, то заголовок выводится на английском.
Значение языка будет добавляться юзером в localStorage из меню выбора языка внутри приложения.
Здесь же только добавляется заголовок в браузерную вкладку.
*/

if (window.localStorage) {
  const documentTitle = document.getElementsByTagName('title')[0];
  const dictionary = JSON.parse(window.localStorage.getItem('lang'));
  if (dictionary) {
    switch (dictionary.currentLang) {
      case 'rus':
        documentTitle.innerText = 'Записная книжка';
        break;
      case 'deu':
        documentTitle.innerText = 'Notizbuch';
        break;
      case 'fra':
        documentTitle.innerText = 'Bloc-notes';
        break;
      case 'chi':
        documentTitle.innerText = '笔记本';
        break;
      default:
        documentTitle.innerText = 'Notebook';
    }
  }
}
