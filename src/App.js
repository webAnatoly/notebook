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
    };
  }

  handleDoubleClickOnSmallNote = () => {
    this.setState({ isFullNote: true });
  }

  showLeftSidebar = () => {
    this.setState(prevState => ({ isLeftSidebarVisible: !prevState.isLeftSidebarVisible }));
  }

  render() {
    const { isFullNote, isLeftSidebarVisible } = this.state;
    return (
      <div className={css.App}>
        <Nav customazeStyles={css.Nav_Top}>
          <MakeTopNav showLeftSidebar={this.showLeftSidebar} />
        </Nav>
        <MakeLeftSidebar show={isLeftSidebarVisible} />
        <Nav customazeStyles={css.Nav_Bottom} />
        <div className={css.Wrapper_mainArea}>
          <div className={css.topRow}>
            <Button customazeStyles={css.mobileAddEntryButton} htmlType="button">add note</Button>
            <Button customazeStyles={css.browseAllEntriesButton} htmlType="button">browse all your entries</Button>
          </div>
          <div className={css.secondRow}>
            <Menu />
            <Search show />
          </div>
          <Workspace customazeStyles={css.Workspace_mainWorkspace}>
            <ShowNotes isFullNote={isFullNote} showFullNote={this.handleDoubleClickOnSmallNote} />
          </Workspace>
        </div>
      </div>
    );
  }
}
