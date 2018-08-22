import React from 'react';
import PropTypes from 'prop-types';
import RoundButton from '../Buttons/RoundButton/RoundButton';
import css from './UserProfile.css';

const UserProfile = ({ userName, customizeStyles }) => {
  const styles = [
    css.UserProfile,
    customizeStyles,
  ];
  return (
    <div className={styles.join(' ')}>
      <div className={css.icon} />
      <div className={css.UserName}>{userName}</div>
      <RoundButton />
    </div>
  );
};

UserProfile.propTypes = {
  userName: PropTypes.string,
  customizeStyles: PropTypes.string,
};

UserProfile.defaultProps = {
  userName: 'John Doe',
  customizeStyles: '',
};

export default UserProfile;
