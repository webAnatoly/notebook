import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/mainActions';

import Aux from '../../hoc/Aux/Aux';
import Sidebar from '../Sidebar/Sidebar';
import LargeButton from '../Buttons/LargeButton/LargeButton';
import Button from '../Buttons/Button/Button';
import Informer from '../Informer/Informer';

import css from './MakeLeftSidebar.css';

const MakeLeftSidebar = ({ show, onAddNoteClicked }) => {
  let sidebarCSS = [css.Sidebar_Left, css.hidden];
  if (show) {
    sidebarCSS = [css.Sidebar_Left, css.showed];
  }
  return (
    <Sidebar customizeStyles={sidebarCSS.join(' ')}>
      <Aux>
        <div className={css.firstSection}>
          <LargeButton clickHandler={onAddNoteClicked}>add note</LargeButton>
          <div className={css.line} />
        </div>
        <div className={css.secondSection}>
          <Button customizeStyles={css.Button} htmlType="button">lorem ipsum</Button>
          <Button customizeStyles={css.Button} htmlType="button">lorem ipsum</Button>
          <Button customizeStyles={css.Button} htmlType="button">lorem ipsum</Button>
          <Button customizeStyles={css.Button} htmlType="button">lorem ipsum</Button>
          <Button customizeStyles={css.Button} htmlType="button">lorem ipsum</Button>
          <Button customizeStyles={css.Button} htmlType="button">lorem ipsum</Button>
          <div className={css.line} />
        </div>
        <div className={css.thirdSection}>
          <Button customizeStyles={css.Button} htmlType="button">lorem ipsum</Button>
          <Button customizeStyles={css.Button} htmlType="button">lorem ipsum</Button>
          <Button customizeStyles={css.Button} htmlType="button">lorem ipsum</Button>
          <Button customizeStyles={css.Button} htmlType="button">lorem ipsum</Button>
          <div className={css.line} />
        </div>
        <div className={css.fourthSection}>
          <Informer />
        </div>
      </Aux>
    </Sidebar>
  );
};

MakeLeftSidebar.propTypes = {
  show: PropTypes.bool.isRequired,
  onAddNoteClicked: PropTypes.func.isRequired,
};

// MakeLeftSidebar.defaultProps = {

// };

const mapStateToProps = state => ({ show: state.isLeftSidebarVisible });
const mapDispatchToProps = dispatch => ({
  onAddNoteClicked: () => dispatch(actions.editEntry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MakeLeftSidebar);
