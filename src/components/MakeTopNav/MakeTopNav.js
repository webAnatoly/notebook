import React from 'react';
import PropTypes from 'prop-types';

import s from './MakeTopNav.css';
import TrippleButton from '../Buttons/TripleButton/TrippleButton';
import UserProfile from '../UserProfile/UserProfile';

const MakeTopNav = ({ showLeftSidebar }) => (
  (
    <div className={s.MakeTopNav}>
      <div>
        <TrippleButton showLeftSidebar={showLeftSidebar} />
      </div>
      <div className={s.logoSection}>MyNotebookApp</div>
      <div className={s.helpSection}>help center</div>
      <div className={s.supportSection}>our support</div>
      <UserProfile customizeStyles={s.userProfileSection} />
    </div>
  )
);

MakeTopNav.propTypes = {
  showLeftSidebar: PropTypes.func.isRequired,
};

// MakeTopNav.defaultProps = {

// };

export default MakeTopNav;
