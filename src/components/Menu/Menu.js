import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Buttons/Button/Button';
import SmallButton from '../Buttons/SmallButton/SmallButton';
import css from './Menu.css';

const Menu = ({ customizeStyles, isShiftMenu, shiftMenuHandler }) => {
  const styles = [
    css.Menu,
    isShiftMenu === true ? css.shiftMenu : '',
    customizeStyles,
  ];
  return (
    <div className={styles.join(' ')}>
      <SmallButton>All Entries</SmallButton>
      <SmallButton>Most Recent</SmallButton>
      <SmallButton>Lorem Ipsum</SmallButton>
      <SmallButton>Lorem Ipsum</SmallButton>
      <Button
        customizeStyles={css.toggleButton}
        clickHandler={shiftMenuHandler}
        htmlType="button"
      />
    </div>
  );
};

Menu.propTypes = {
  customizeStyles: PropTypes.string, /* строка с именем CSS класса */
  isShiftMenu: PropTypes.bool,
  shiftMenuHandler: PropTypes.func,
};

Menu.defaultProps = {
  customizeStyles: '',
  isShiftMenu: false,
  shiftMenuHandler: () => null,
};

export default Menu;
