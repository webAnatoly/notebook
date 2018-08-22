import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux/Aux';
import Sidebar from '../Sidebar/Sidebar';
import LargeButton from '../Buttons/LargeButton/LargeButton';
import Button from '../Buttons/Button/Button';

import css from './MakeLeftSidebar.css';

const MakeLeftSidebar = ({ show }) => {
  let sidebarCSS = [css.Sidebar_Left, css.hidden];
  if (show) {
    sidebarCSS = [css.Sidebar_Left, css.showed];
  }
  return (
    <Sidebar customazeStyles={sidebarCSS.join(' ')}>
      <Aux>
        <div className={css.firstSection}>
          <LargeButton>add note</LargeButton>
          <div className={css.line} />
        </div>
        <div className={css.secondSection}>
          <Button customazeStyles={css.Button}>lorem ipsum</Button>
          <Button customazeStyles={css.Button}>lorem ipsum</Button>
          <Button customazeStyles={css.Button}>lorem ipsum</Button>
          <Button customazeStyles={css.Button}>lorem ipsum</Button>
          <Button customazeStyles={css.Button}>lorem ipsum</Button>
          <Button customazeStyles={css.Button}>lorem ipsum</Button>
          <div className={css.line} />
        </div>
        <div className={css.thirdSection}>
          <Button customazeStyles={css.Button}>lorem ipsum</Button>
          <Button customazeStyles={css.Button}>lorem ipsum</Button>
          <Button customazeStyles={css.Button}>lorem ipsum</Button>
          <Button customazeStyles={css.Button}>lorem ipsum</Button>
          <div className={css.line} />
        </div>
        <div className={css.fourthSection} />
      </Aux>
    </Sidebar>
  );
};

MakeLeftSidebar.propTypes = {
  show: PropTypes.bool.isRequired,
};

// MakeLeftSidebar.defaultProps = {

// };

export default MakeLeftSidebar;
