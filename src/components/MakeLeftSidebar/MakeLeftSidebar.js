import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux/Aux';
import Sidebar from '../Sidebar/Sidebar';
import LargeButton from '../Buttons/LargeButton/LargeButton';
import SmallButton from '../Buttons/SmallButton/SmallButton';

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
        </div>
        <div className={css.secondSection}>
          <SmallButton />
        </div>
        <div className={css.thirdSection} />
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
