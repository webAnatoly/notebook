import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Buttons/Button/Button';
import SmallButton from '../Buttons/SmallButton/SmallButton';
import css from './Menu.css';

const Menu = ({ customizeStyles }) => {
  const styles = [
    css.Menu,
    customizeStyles,
  ];
  return (
    <div className={styles.join(' ')}>
      <SmallButton>All Entries</SmallButton>
      <SmallButton>Most Recent</SmallButton>
      <SmallButton>Lorem Ipsum</SmallButton>
      <SmallButton>Lorem Ipsum</SmallButton>
      <Button customazeStyles={css.toggleButton} />
    </div>
  );
};

Menu.propTypes = {
  customizeStyles: PropTypes.string, /* строка с именем CSS класса */
};

Menu.defaultProps = {
  customizeStyles: '',
};

export default Menu;
