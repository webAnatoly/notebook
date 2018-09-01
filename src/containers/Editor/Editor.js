import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../components/Input/Input';
import SmallButton from '../../components/Buttons/SmallButton/SmallButton';

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
      customizeStyles, /* необязательные стили позиционирования,
      получаемые с того места где компонент будет использован */
    ];
    const textareaConfig = {
      inputTagName: 'textarea',
      customizeStyles: css.Editor_textarea,
    };
    return (
      <div className={cssClasses.join(' ')}>
        <div className={css.Editor_topMenu}>
          <SmallButton customizeStyles={css.Editor_topMenuButton}>b</SmallButton>
          <SmallButton customizeStyles={css.Editor_topMenuButton}>i</SmallButton>
          <SmallButton customizeStyles={css.Editor_topMenuButton}>t</SmallButton>
          <SmallButton customizeStyles={css.Editor_topMenuButton}>l</SmallButton>
        </div>
        <Input {...textareaConfig} />
        <div className={css.Editor_bottomMenu}>
          <SmallButton customizeStyles={[css.SmallButton, css.SmallButton_disabled].join(' ')}>Save</SmallButton>
          <SmallButton customizeStyles={css.SmallButton}>Cancel</SmallButton>
        </div>
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
