import React from 'react';
import CodeMirror from 'react-codemirror';
import Select from 'react-select';

// library css
import 'codemirror/lib/codemirror.css';
import 'react-select/dist/react-select.css';

// languages
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/markdown/markdown';

// themes
import 'codemirror/theme/material.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/neo.css';
import 'codemirror/theme/yeti.css';

import styles from './Codeshare.scss';

class Codeshare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// Code\nconst greeting = \'Hello\';\nconsole.log(greeting + \' World!\');\n\n',
      language: { value: 'javascript', label: 'Javascript' },
      theme: { value: 'material', label: 'Material' },
    };
    this.changeTheme = (theme) => {
      this.setState({ theme });
    };
    this.changeLanguage = (language) => {
      this.setState({ language });
    };
  }
  render() {
    const {
      code,
      language,
      theme,
    } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.selectors}>
          <Select
            name="form-field-name"
            value={language}
            onChange={this.changeLanguage}
            options={[
              { value: 'javascript', label: 'Javascript' },
              { value: 'python', label: 'Python' },
              { value: 'clike', label: 'C/C++' },
              { value: 'jsx', label: 'JSX' },
              { value: 'htmlmixed', label: 'HTML' },
              { value: 'markdown', label: 'Markdown' },
            ]}
          />
          <Select
            name="form-field-name"
            value={theme}
            onChange={this.changeTheme}
            options={[
              { value: 'material', label: 'Material' },
              { value: 'neo', label: 'Neo' },
              { value: 'eclipse', label: 'Eclipse' },
              { value: 'monokai', label: 'Monokai' },
              { value: 'yeti', label: 'Yeti' },
            ]}
          />
        </div>
        <CodeMirror
          value={code}
          onChange={c => this.setState({ code: c })}
          className={styles.cmContainer}
          options={{
            lineWrapping: true,
            tabSize: 4,
            lineNumbers: true,
            mode: language.value,
            theme: theme.value,
            viewportMargin: Infinity,
          }}
        />
      </div>
    );
  }
}

export default Codeshare;
