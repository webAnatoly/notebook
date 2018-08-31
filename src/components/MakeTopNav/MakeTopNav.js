import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/mainActions';

import s from './MakeTopNav.css';
import TrippleButton from '../Buttons/TripleButton/TrippleButton';
import UserProfile from '../UserProfile/UserProfile';

const MakeTopNav = ({ toggleLeftSidebar }) => (
  (
    <div className={s.MakeTopNav}>
      <div>
        <TrippleButton clickHandler={toggleLeftSidebar} />
      </div>
      <div className={s.logoSection}>MyNotebookApp</div>
      <div className={s.helpSection}>help center</div>
      <div className={s.supportSection}>our support</div>
      <UserProfile customizeStyles={s.userProfileSection} />
    </div>
  )
);

MakeTopNav.propTypes = {
  toggleLeftSidebar: PropTypes.func.isRequired,
};

// MakeTopNav.defaultProps = {

// };

const mapDispatchToProps = dispatch => ({
  toggleLeftSidebar: () => dispatch(actions.toggleLeftSidebar()),
});

export default connect(null, mapDispatchToProps)(MakeTopNav);
