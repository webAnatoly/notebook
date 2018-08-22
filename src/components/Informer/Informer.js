import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux/Aux';
import css from './Informer.css';

const Informer = ({ userName, entryName, timeAgo }) => {
  return (
    <Aux>
      <div className={css.Informer}>
        <div className={css.clock} />
        <p className={css.p}>
          Last added entry &nbsp;
          <span className={css.Info}>{entryName}</span>
          &nbsp; by &nbsp;
          <span className={css.Info}>{userName}</span>
        </p>
        <p className={css.p}>
          <span className={css.Info}>{timeAgo}</span>
          &nbsp; minutes ago
        </p>
      </div>
      <div className={css.Informer}>
        <div className={css.clock} />
        <p className={css.p}>
          Last edited entry&nbsp;
          <span className={css.Info}>{entryName}</span>
          &nbsp; by &nbsp;
          <span className={css.Info}>{userName}</span>
        </p>
        <p className={css.p}>
          <span className={css.Info}>{timeAgo}</span>
          &nbsp; minutes ago
        </p>
      </div>
    </Aux>
  );
};

Informer.propTypes = {
  userName: PropTypes.string,
  entryName: PropTypes.string,
  timeAgo: PropTypes.string,
};

Informer.defaultProps = {
  userName: 'John Doe',
  entryName: 'First Entry',
  timeAgo: '24',
};

export default Informer;
