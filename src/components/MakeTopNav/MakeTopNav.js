import React from 'react';
import PropTypes from 'prop-types';

import s from './MakeTopNav.css';
import TrippleButton from '../Buttons/TripleButton/TrippleButton';

const MakeTopNav = ({ showLeftSidebar }) => (
  (
    <div className={s.MakeTopNav}>
      <div className={s.mobileButton}>
        <TrippleButton showLeftSidebar={showLeftSidebar} />
      </div>
      <div className={s.appLogo}>logo</div>
      <div className={s.helpCenter}>help center</div>
      <div className={s.support}>our support</div>
      <div className={s.userProfile}>john doe</div>
    </div>
  )
);

MakeTopNav.propTypes = {
  showLeftSidebar: PropTypes.func.isRequired,
};

// MakeTopNav.defaultProps = {

// };

export default MakeTopNav;
