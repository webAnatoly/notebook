import React from 'react';
// import PropTypes from 'prop-types';

import css from './MakeLeftSedebar.css';

import Container from '../Container/Container';
import LargeButton from '../Buttons/LargeButton/LargeButton';
import SmallButton from '../Buttons/SmallButton/SmallButton';

const MakeLeftSidebar = (props) => {
  return (
    <div>
      <Container customizeStyles={css.firstSection}>
        <LargeButton>add note</LargeButton>
      </Container>
      <Container customizeStyles={css.secondSection}>
        <SmallButton />
      </Container>
      <Container customizeStyles={css.thirdSection} />
      <Container customizeStyles={css.fourthSection} />
    </div>
  );
};

// MakeLeftSidebar.propTypes = {

// };

// MakeLeftSidebar.defaultProps = {

// };

export default MakeLeftSidebar;
