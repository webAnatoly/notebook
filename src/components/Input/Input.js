/*
Этот компонент рендерит тот или иной инпут на основе параметров,
получаемых в пропсах.
По умолчанию рендерит <input type="text" />
*/

import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux/Aux';
import css from './Input.css';

const Input = ({
  invalid,
  shouldValidate,
  touched,
  inputTagName,
  elementConfig,
  id,
  changed,
  value,
  label,
  customizeStyles,
}) => {
  let htmlElement = null;
  const inputClasses = [css.Input, customizeStyles];

  if (invalid && shouldValidate && touched) {
    /* Если в инпут введено валидное значение, то в props.invalid должно передаваться true.
    Валидация реализовывается в вышестоящих компонентах,
    а сюда лишь передается true или false в свойстве props.invalid
    */
    inputClasses.push(css.Input_Invalid); // подключить css класс для подсветки невалидного ввода
  }

  switch (inputTagName) {
    case ('input'):
      htmlElement = (
        <input
          {...elementConfig} // type, placeholder
          id={id}
          className={inputClasses.join(' ')}
          onChange={changed}
          value={value}
        />
      );
      break;
    case ('textarea'): {
      const textareaCss = [
        css.Textarea,
        customizeStyles,
      ];
      htmlElement = (
        <textarea
          {...elementConfig} // type, placeholder
          id={id}
          className={textareaCss.join(' ')}
          onChange={changed}
          value={value}
        />
      );
      break;
    }
    default:
      htmlElement = (
        <div className={css.wrapper}>
          <input
            className={inputClasses.join(' ')}
            type="text"
            {...elementConfig}
          />
        </div>
      );
  }

  return (
    <Aux>
      {label !== '' ? <label htmlFor={id} className={css.Label}>{label}</label> : null}
      {htmlElement}
    </Aux>
  );
};

Input.propTypes = {
  inputTagName: PropTypes.string, // 'text', 'textarea', 'select' etc...
  elementConfig: PropTypes.oneOfType([PropTypes.object]), // параметры аттрибутов для элемента
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  changed: PropTypes.func, // onChange handler
  invalid: PropTypes.bool, // валидный или не валидный был ввод.
  shouldValidate: PropTypes.bool, // нужно ли валидировать ввод.
  customizeStyles: PropTypes.string, // имя css класса
};

Input.defaultProps = {
  inputTagName: '',
  elementConfig: {},
  label: '',
  value: '',
  invalid: false,
  shouldValidate: false,
  changed: () => null,
  customizeStyles: '',
};

export default Input;

/* Пример использования.

  // Создаем конфигурирующие объекты
    configTextarea = {
    inputTagName: 'textarea',
    id: Math.random().toString(),
    elementConfig: { placeholder: 'Enter your text', name: 'textareaName' },
  }

  configInput = {
    inputTagName: 'input',
    id: Math.random().toString(),
    elementConfig: { type: 'email', placeholder: 'Email' },
  }

  // используем
  <Input {...configTextarea} />
  <Input {...configInput} />

*/
