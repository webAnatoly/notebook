import React from 'react';
// import PropTypes from 'prop-types';

import css from './MakeLeftSedebar.css';

import Container from '../Container/Container';

const MakeLeftSidebar = (props) => {
  return (
    <div>
      <Container customizeStyles={css.firstSection} />
      <Container customizeStyles={css.secondSection} />
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
