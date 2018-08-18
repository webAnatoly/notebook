import React from 'react';

import Nav from './components/Nav/Nav';
import Sidebar from './components/Sidebar/Sidebar';
import Workspace from './components/Workspace/Workspace';
import ShowNotes from './components/ShowNotes/ShowNotes';

import css from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullNote: false,
    };
  }

  showFullNoteHandler = () => {
    this.setState({ showFullNote: true });
  }

  render() {
    const { showFullNote } = this.state;
    const leftSidebar = (<Sidebar customazeStyles={css.LeftSidebar} />);
    const rightSidebar = (<Sidebar customazeStyles={css.RightSidebar} />);
    return (
      <div>
        <Nav customazeStyles={css.Nav} />
        {leftSidebar}
        {rightSidebar}
        <Workspace customazeStyles={css.Workspace}>
          <ShowNotes fullNote={showFullNote} showFullNote={this.showFullNoteHandler} />
        </Workspace>
      </div>
    );
  }
}
