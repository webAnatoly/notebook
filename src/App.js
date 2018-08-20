import React from 'react';

import Nav from './components/Nav/Nav';
import Sidebar from './components/Sidebar/Sidebar';
import Wrapper from './components/Wrapper/Wrapper';
import Container from './components/Container/Container';
import Workspace from './components/Workspace/Workspace';

import css from './App.css';
import ShowNotes from './components/ShowNotes/ShowNotes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullNote: false,
    };
  }

  render() {
    const { isFullNote } = this.state;
    return (
      <div className={css.App}>
        <Nav customazeStyles={css.Nav_Top} />
        <Sidebar customazeStyles={css.Sidebar_Left} />
        <Nav customazeStyles={css.Nav_Bottom} />
        <Wrapper customizeStyles={css.Wrapper_mainArea}>
          <Container customizeStyles={css.Container_topRow}>
            Browse All Your Entries
          </Container>
          <Container customizeStyles={css.Container_secondRow}>
            secondRowContainer
          </Container>
          <Workspace customazeStyles={css.Workspace_mainWorkspace}>
            <ShowNotes isFullNote={isFullNote} />
          </Workspace>
        </Wrapper>
      </div>
    );
  }
}
