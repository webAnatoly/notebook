import React from 'react';
import PropTypes from 'prop-types';

import s from './TripleButton.css';

const TrippleButton = ({ showLeftSidebar }) => {
  return (
    <div
      className={s.TrippleButton}
      onClick={showLeftSidebar}
      role="button"
      onKeyDown={() => null}
      tabIndex="0"
    >
      <div className={[s.line, s.firstLine].join(' ')} />
      <div className={[s.line, s.secondLine].join(' ')} />
      <div className={[s.line, s.thirdLine].join(' ')} />
    </div>
  );
};

TrippleButton.propTypes = {
  showLeftSidebar: PropTypes.func.isRequired,
};

// TrippleButton.defaultProps = {

// };

export default TrippleButton;
