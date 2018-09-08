import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/mainActions';

import SmallButton from '../../components/Buttons/SmallButton/SmallButton';
import DecorLine from '../../components/decorLine/decorLine';

import css from './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbolInputtedInContentField: false,
      showSaveButton: false,
    };
    this.inputRef = React.createRef(); // для автофокуса на блоке ввода текста
  }

  componentDidMount() {
    document.execCommand('defaultParagraphSeparator', false, 'p');
    this.inputRef.current.focus();
    this.cursorToTheEndOfString();
  }

  componentDidUpdate() {
    this.inputRef.current.focus();
    this.cursorToTheEndOfString();
    console.log('DidUpdate');
  }

  onInputHandlerContentField = (event) => {
    const { symbolInputtedInContentField, showSaveButton } = this.state;
    // Показать кнопку "Save", когда пользователь начал вводить текст
    if (event.target.textContent.length > 0 && symbolInputtedInContentField === false) {
      this.setState({ symbolInputtedInContentField: true, showSaveButton: true });
    }
    // Деактивировать кнопку "Save", если пользователь стер весь текст
    if (event.target.textContent.length === 0 && showSaveButton === true) {
      this.setState({ symbolInputtedInContentField: false, showSaveButton: false });
    }
    /* Получить поле "Название заметки" и через innerHTML выводить то,
    что юзер печатает в саму заметку, но не больше 50 символов. */
    if (event.target.textContent.length < 50) {
      const title = document.querySelector(`.${css.Editor_divAsInput_title}`);
      title.innerHTML = event.target.textContent;
    }
  }

  onInputHandlerTitleField = () => {
    console.log('onInputHandlerTitleField');
  }

  execCommand = (commandName) => {
    document.execCommand(commandName, false, null);
    this.inputRef.current.focus();
  }

  cursorToTheEndOfString = () => {
    let range = document.createRange();
    range.selectNodeContents(this.inputRef.current);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    range = null;
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    // пока что буду сохранять заметки в редактовский стор
    // после сохранения затемнить кнопку "Save"
  }

  render() {
    const { customizeStyles, onCancel } = this.props;
    const { showSaveButton } = this.state;
    const cssClasses = [
      css.Editor,
      customizeStyles, /* необязательные стили позиционирования,
      получаемые с того места где компонент будет использован */
    ];
    const cssClassesForSaveButton = [
      css.bottomMenuButton,
      showSaveButton ? '' : css.bottomMenuButton_disabled,
    ];
    return (
      <form className={cssClasses.join(' ')} onSubmit={event => this.onSubmitHandler(event)}>
        <div className={css.Editor_topMenu}>
          {/*
          [TO DO] Если браузер не подерживает execCommand, то не отображать кнопки редактирования,
                  а вместо div contenteditable рендерить textarea;
          [TO DO] Сделать подсветку нажатой кнопки редактирования.
                  Например, если курсор помещен на жирный текста, то подсвечивать жирную кнопку,
                  при выделении жирного и курсивного, подсвечивались бы соответствующие кнопки
          */}
          <SmallButton
            customizeStyles={[css.topMenuButton, css.btn_bold].join(' ')}
            clickHandler={() => this.execCommand('bold')}
          >
            b
          </SmallButton>
          <SmallButton
            customizeStyles={[css.topMenuButton, css.btn_italic].join(' ')}
            clickHandler={() => this.execCommand('italic')}
          >
            i
          </SmallButton>
          <SmallButton
            customizeStyles={[css.topMenuButton, css.btn_strikeThrough].join(' ')}
            clickHandler={() => this.execCommand('strikeThrough')}
          >
            t
          </SmallButton>
          <SmallButton customizeStyles={[css.topMenuButton, css.btn_link].join(' ')}>
            <span role="img" aria-label="insert_hyperlink" className={css.btn_link_symbolHyperlink}>&#128279;</span>
          </SmallButton>
        </div>
        <DecorLine customizeStyles={css.decorLine} />
        {/* [TO DO] Если юзер не ввел название заметки, то в момент сохранения заметки,
        если название заметки равно нулю, в качестве названия брать первые 50 символов
        из текста основной заметки */}
        <div
          className={css.Editor_divAsInput_title}
          contentEditable
          onInput={this.onInputHandlerTitleField}
        />
        <DecorLine customizeStyles={css.decorLine} />
        <div
          className={css.Editor_divAsInput_content}
          contentEditable
          ref={this.inputRef}
          // dangerouslySetInnerHTML={{ __html: textAsInnerHtml }}
          onInput={event => this.onInputHandlerContentField(event)}
        />
        <div className={css.Editor_bottomMenu}>
          <SmallButton
            customizeStyles={cssClassesForSaveButton.join(' ')}
            htmlType="submit"
          >
            Save
          </SmallButton>
          <SmallButton
            customizeStyles={css.bottomMenuButton}
            clickHandler={onCancel}
          >
            Cancel
          </SmallButton>
        </div>
      </form>
    );
  }
}


Editor.propTypes = {
  customizeStyles: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
};

Editor.defaultProps = {
  customizeStyles: '',
};

const mapDispatchToProps = dispatch => ({
  onCancel: () => dispatch(actions.cancelEditing()),
});

export default connect(null, mapDispatchToProps)(Editor);
