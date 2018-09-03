import React from 'react';
import PropTypes from 'prop-types';

import SmallButton from '../../components/Buttons/SmallButton/SmallButton';
import DecorLine from '../../components/decorLine/decorLine';

import css from './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleAsInnerHtml: '<i>Название заметки</i>',
      textAsInnerHtml: 'текст заметки',
    };
    this.inputRef = React.createRef(); // для автофокуса на блоке ввода текста
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  componentDidUpdate() {
    console.log('[DidUpdate]');
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
  }

  onInputHandler = (event) => {
    this.setState({ textAsInnerHtml: event.target.innerText });
  }

  render() {
    const { customizeStyles } = this.props;
    const { titleAsInnerHtml, textAsInnerHtml } = this.state;
    const cssClasses = [
      css.Editor,
      customizeStyles, /* необязательные стили позиционирования,
      получаемые с того места где компонент будет использован */
    ];
    return (
      <form className={cssClasses.join(' ')} onSubmit={this.onSubmitHandler}>
        <div className={css.Editor_topMenu}>
          <SmallButton customizeStyles={[css.Editor_topMenuButton, css.btn_bold].join(' ')}>b</SmallButton>
          <SmallButton customizeStyles={[css.Editor_topMenuButton, css.btn_italic].join(' ')}>i</SmallButton>
          <SmallButton customizeStyles={[css.Editor_topMenuButton, css.btn_deleted].join(' ')}>t</SmallButton>
          <SmallButton customizeStyles={[css.Editor_topMenuButton, css.btn_link].join(' ')}>
            <span role="img" aria-label="insert hyperlink" className={css.btn_link_symbolHyperlink}>&#128279;</span>
          </SmallButton>
        </div>
        <DecorLine customizeStyles={css.decorLine} />
        <div
          className={css.Editor_divAsInput_title}
          contentEditable
          dangerouslySetInnerHTML={{ __html: titleAsInnerHtml }}
        />
        <DecorLine customizeStyles={css.decorLine} />
        <div
          className={css.Editor_divAsInput_content}
          contentEditable
          ref={this.inputRef}
          dangerouslySetInnerHTML={{ __html: textAsInnerHtml }}
          onInput={this.onInputHandler}
        />
        <div className={css.Editor_bottomMenu}>
          <SmallButton customizeStyles={[css.SmallButton, css.SmallButton_disabled].join(' ')} htmlType="submit">Save</SmallButton>
          <SmallButton customizeStyles={[css.SmallButton, css.SmallButton_disabled].join(' ')}>Cancel</SmallButton>
        </div>
      </form>
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
