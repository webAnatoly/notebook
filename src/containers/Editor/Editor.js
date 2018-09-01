import React from 'react';
import PropTypes from 'prop-types';
import css from './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { customizeStyles } = this.props;
    const cssClasses = [
      css.Editor,
      customizeStyles, // стили получаемые с того места где компонент будет использован
    ];
    return (
      <div className={cssClasses.join(' ')}>
        Editor
      </div>
    );
  }
}


Editor.propTypes = {
  customizeStyles: PropTypes.string,
};

Editor.defaultProps = {
  customizeStyles: '',
};

export default Editor;
