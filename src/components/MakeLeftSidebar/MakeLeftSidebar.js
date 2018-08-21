import React from 'react';
// import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux/Aux';
import Container from '../Container/Container';
import Sidebar from '../Sidebar/Sidebar';
import LargeButton from '../Buttons/LargeButton/LargeButton';
import SmallButton from '../Buttons/SmallButton/SmallButton';

import css from './MakeLeftSidebar.css';

const MakeLeftSidebar = (props) => {
  const sidebarCSS = [
    css.Sidebar_Left,
  ];
  return (
    <Sidebar customazeStyles={sidebarCSS.join(' ')}>
      <Aux>
        <Container customizeStyles={css.firstSection}>
          <LargeButton>add note</LargeButton>
        </Container>
        <Container customizeStyles={css.secondSection}>
          <SmallButton />
        </Container>
        <Container customizeStyles={css.thirdSection} />
        <Container customizeStyles={css.fourthSection} />
      </Aux>
    </Sidebar>
  );
};

// MakeLeftSidebar.propTypes = {

// };

// MakeLeftSidebar.defaultProps = {

// };

export default MakeLeftSidebar;
