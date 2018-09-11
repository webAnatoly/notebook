import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './store/actions/mainActions';

import Nav from './components/Nav/Nav';
import Workspace from './components/Workspace/Workspace';
import MakeLeftSidebar from './components/MakeLeftSidebar/MakeLeftSidebar';
import MakeTopNav from './components/MakeTopNav/MakeTopNav';
import Button from './components/Buttons/Button/Button';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';

import css from './App.css';
import ShowNotes from './components/ShowNotes/ShowNotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeftSidebarVisible: false,
      isShiftMenu: false,
    };
  }

  componentDidMount() {
    /* resize мне нужен, чтобы компонент Search при изменении размеров окна
    перерендировал свое содержимое с учетом новой ширины окна.
    Например когда в планшете пользователь меняет ориентацию с портретной на
    альбомную, компонент Search должен в зависимости от новой ширины экрана отрендерить
    тот или иной input.
    */
    window.addEventListener('resize', () => this.setState(prevState => ({
      isShiftMenu: prevState.isShiftMenu,
    })));
  }

  showLeftSidebar = () => {
    this.setState(prevState => ({ isLeftSidebarVisible: !prevState.isLeftSidebarVisible }));
  }

  handleClickMobileSearchIcon = () => {
    this.setState(prevState => ({ isShiftMenu: !prevState.isShiftMenu }));
  }

  render() {
    const {
      isShiftMenu,
    } = this.state;
    const { onAddNoteClicked, onBrowseAllEntriesClicked } = this.props;
    return (
      <div className={css.App}>
        <Nav customizeStyles={css.Nav_Top}>
          <MakeTopNav showLeftSidebar={this.showLeftSidebar} />
        </Nav>
        <MakeLeftSidebar />
        <div className={css.Wrapper_mainArea}>
          <div className={css.topRow}>
            <Button customizeStyles={css.mobileAddEntryButton} htmlType="button" clickHandler={onAddNoteClicked}>add note</Button>
            <Button customizeStyles={css.browseAllEntriesButton} htmlType="button" clickHandler={onBrowseAllEntriesClicked}>browse all your entries</Button>
          </div>
          <div className={css.secondRow}>
            <Menu shiftMenuHandler={this.handleClickMobileSearchIcon} isShiftMenu={isShiftMenu} />
            <Search isShiftMenu={isShiftMenu} />
          </div>
          <Workspace customizeStyles={css.Workspace_mainWorkspace}>
            <ShowNotes />
          </Workspace>
        </div>
        <Nav customizeStyles={css.Nav_Bottom} />
      </div>
    );
  }
}

App.propTypes = {
  onAddNoteClicked: PropTypes.func.isRequired,
};

// App.defaultProps = {

// };

const mapDispatchToProps = dispatch => ({
  onAddNoteClicked: () => dispatch(actions.editEntry()),
  onBrowseAllEntriesClicked: () => dispatch(actions.browseAllEntries()),
});

export default connect(null, mapDispatchToProps)(App);
