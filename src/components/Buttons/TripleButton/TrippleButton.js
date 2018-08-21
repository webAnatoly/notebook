import React from 'react';
// import PropTypes from 'prop-types';

import s from './TripleButton.css';

const TrippleButton = (props) => {
  return (
    <div className={s.TrippleButton}>
      <div className={[s.line, s.firstLine].join(' ')} />
      <div className={[s.line, s.secondLine].join(' ')} />
      <div className={[s.line, s.thirdLine].join(' ')} />
    </div>
  );
};

// TrippleButton.propTypes = {

// };

// TrippleButton.defaultProps = {

// };

export default TrippleButton;
