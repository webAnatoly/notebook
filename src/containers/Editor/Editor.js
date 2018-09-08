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
      symbolInputtedInTitle: false,
      symbolInputtedInContent: false,
      showSaveButton: false,
      focusOnTitle: false,
      titleValue: '',
      textAsInnerHtml: '',
    };
    this.inputRef = React.createRef(); // для автофокуса на блоке ввода текста
  }

  componentDidMount() {
    document.execCommand('defaultParagraphSeparator', false, 'p');
    this.inputRef.current.focus();
    this.cursorToTheEndOfString();
    if (window.localStorage) {
      // Создать кэш для кэширования несохранённых заметок
      if (!window.localStorage.currentNote) {
        const cash = { title: '', content: '' };
        window.localStorage.setItem('currentNote', JSON.stringify(cash));
      } else {
        // Получить заметку из кэша
        const cashedNote = JSON.parse(window.localStorage.getItem('currentNote'));
        // Вывести заметку в поля ввода заметки
        if (cashedNote.title) {
          this.setState({ titleValue: cashedNote.title, showSaveButton: true });
        }
        if (cashedNote.content) {
          this.setState({ textAsInnerHtml: cashedNote.content, showSaveButton: true });
        }
      }
    }
  }

  componentDidUpdate() {
    const { focusOnTitle } = this.state;
    if (!focusOnTitle) {
      this.inputRef.current.focus();
      this.cursorToTheEndOfString();
    }
  }

  onBlurHandlerTitle = () => {
    this.setState({ focusOnTitle: false });
  }

  onInputHandlerTitle = (event) => {
    const {
      symbolInputtedInContent,
      symbolInputtedInTitle,
      showSaveButton,
      focusOnTitle,
    } = this.state;

    if (!focusOnTitle) {
      this.setState({ focusOnTitle: true });
    }

    // Показать кнопку "Save", когда пользователь начал вводить текст
    if (event.target.value.length > 0 && symbolInputtedInTitle === false) {
      this.setState({ symbolInputtedInTitle: true, showSaveButton: true });
    }

    // Обновить state после того как пользователь стер текст
    if (event.target.value.length === 0 && symbolInputtedInContent === true) {
      this.setState({ symbolInputtedInContent: false });
    }
    if (event.target.value.length === 0 && symbolInputtedInTitle === true) {
      this.setState({ symbolInputtedInTitle: false });
    }

    // Деактивировать кнопку "Save", если пользователь стер весь текст во всех полях
    if (event.target.value.length === 0 && showSaveButton === true
      && symbolInputtedInContent === false) {
      this.setState({ showSaveButton: false });
    }

    // Кешировать название заметки
    const cash = JSON.parse(window.localStorage.getItem('currentNote'));
    cash.title = event.target.value;
    window.localStorage.setItem('currentNote', JSON.stringify(cash));
  }

  onInputHandlerContent = (event) => {
    const { symbolInputtedInContent, symbolInputtedInTitle, showSaveButton } = this.state;
    // Показать кнопку "Save", когда пользователь начал вводить текст
    if (event.target.textContent.length > 0 && symbolInputtedInContent === false) {
      this.setState({ symbolInputtedInContent: true, showSaveButton: true });
    }

    // Обновить state после того как пользователь стер текст
    if (event.target.textContent.length === 0 && symbolInputtedInContent === true) {
      this.setState({ symbolInputtedInContent: false });
    }

    // Деактивировать кнопку "Save", если пользователь стер весь текст во всех полях
    if (event.target.textContent.length === 0 && showSaveButton === true
      && symbolInputtedInTitle === false) {
      this.setState({ showSaveButton: false });
    }

    // Кешировать текст заметки
    /* Возможно это не очень эффективно при каждом нажатии клавиши выполнять JSON.parse
    на этапе оптимизации подумаю как можно сделать лучше */
    const cash = JSON.parse(window.localStorage.getItem('currentNote'));
    cash.content = event.target.textContent;
    window.localStorage.setItem('currentNote', JSON.stringify(cash));
  }

  execCommand = (commandName) => {
    document.execCommand(commandName, false, null);
    this.inputRef.current.focus();
  }

  cashUnsavedNote = () => {
    /* [TO DO] Надо реализовать следующею логику:
      На каждый инпут юзера сохранять заметку в localStorage браузера.
      Это нужно для того, если юзер случайно закроет браузер, чтобы введенный текст не потерялся.
      При успешной отправке заметки не сервер, удалять заметку из localStorage.
      При компонент DidMount брать текст заметки из localStorage.
    */
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
    const { showSaveButton, titleValue, textAsInnerHtml } = this.state;
    const cssClasses = [
      css.Editor,
      customizeStyles, /* необязательные стили позиционирования,
      получаемые с того места где компонент будет использован */
    ];
    const cssClassesForSaveButton = [
      css.bottomMenuButton,
      showSaveButton ? '' : css.bottomMenuButton_disabled, // css класс отвечающий за деактивацию кнопки
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
        <input
          className={css.input_title}
          onInput={this.onInputHandlerTitle}
          onBlur={this.onBlurHandlerTitle}
          defaultValue={titleValue}
        />
        <DecorLine customizeStyles={css.decorLine} />
        <div
          className={css.input_content}
          contentEditable
          ref={this.inputRef}
          dangerouslySetInnerHTML={{ __html: textAsInnerHtml }}
          onInput={event => this.onInputHandlerContent(event)}
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
