import React from 'react';

import Nav from './components/Nav/Nav';
import Workspace from './components/Workspace/Workspace';
import MakeLeftSidebar from './components/MakeLeftSidebar/MakeLeftSidebar';
import MakeTopNav from './components/MakeTopNav/MakeTopNav';
import Button from './components/Buttons/Button/Button';
import Menu from './components/Menu/Menu';
import Search from './components/Search/Search';

import css from './App.css';
import ShowNotes from './components/ShowNotes/ShowNotes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullNote: false,
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

  handleDoubleClickOnSmallNote = () => {
    this.setState({ isFullNote: true });
  }

  showLeftSidebar = () => {
    this.setState(prevState => ({ isLeftSidebarVisible: !prevState.isLeftSidebarVisible }));
  }

  handleClickMobileSearchIcon = () => {
    this.setState(prevState => ({ isShiftMenu: !prevState.isShiftMenu }));
  }

  render() {
    const {
      isFullNote,
      isLeftSidebarVisible,
      isShiftMenu,
    } = this.state;
    return (
      <div className={css.App}>
        <Nav customazeStyles={css.Nav_Top}>
          <MakeTopNav showLeftSidebar={this.showLeftSidebar} />
        </Nav>
        <MakeLeftSidebar />
        <div className={css.Wrapper_mainArea}>
          <div className={css.topRow}>
            <Button customazeStyles={css.mobileAddEntryButton} htmlType="button">add note</Button>
            <Button customazeStyles={css.browseAllEntriesButton} htmlType="button">browse all your entries</Button>
          </div>
          <div className={css.secondRow}>
            <Menu shiftMenuHandler={this.handleClickMobileSearchIcon} isShiftMenu={isShiftMenu} />
            <Search isShiftMenu={isShiftMenu} />
          </div>
          <Workspace customazeStyles={css.Workspace_mainWorkspace}>
            <ShowNotes isFullNote={isFullNote} showFullNote={this.handleDoubleClickOnSmallNote} />
          </Workspace>
        </div>
        <Nav customazeStyles={css.Nav_Bottom} />
      </div>
    );
  }
}
