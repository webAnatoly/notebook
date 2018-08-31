import React from 'react';
import PropTypes from 'prop-types';

import s from './TripleButton.css';

const TrippleButton = ({ clickHandler, hideForPC }) => {
  const cssClasses = [
    s.TrippleButton,
    hideForPC ? s.hideForPC : '',
  ];
  return (
    <div
      className={cssClasses.join(' ')}
      onClick={clickHandler}
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
  clickHandler: PropTypes.func,
  hideForPC: PropTypes.bool,
};

TrippleButton.defaultProps = {
  clickHandler: () => null,
  hideForPC: true,
};

export default TrippleButton;
