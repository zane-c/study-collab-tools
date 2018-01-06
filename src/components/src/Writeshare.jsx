import React from 'react';

import FaBold from 'react-icons/lib/fa/bold';
import FaItalic from 'react-icons/lib/fa/italic';
import FaStrikethrough from 'react-icons/lib/fa/strikethrough';
import FaUnderline from 'react-icons/lib/fa/underline';

import FaIndent from 'react-icons/lib/fa/indent';
import FaDedent from 'react-icons/lib/fa/dedent';

import FaList from 'react-icons/lib/fa/list';
import FaListOl from 'react-icons/lib/fa/list-ol';
import FaHeader from 'react-icons/lib/fa/header';
import FaTerminal from 'react-icons/lib/fa/terminal';
import FaTrashO from 'react-icons/lib/fa/trash-o';

import FaAlignLeft from 'react-icons/lib/fa/align-left';
import FaAlignCenter from 'react-icons/lib/fa/align-center';
import FaAlignRight from 'react-icons/lib/fa/align-right';

import ContentEditable from 'react-contenteditable';

import styles from './Writeshare.scss';

class Writeshare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '',
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <FaBold />
          <FaItalic />
          <FaStrikethrough />
          <FaUnderline />
          <FaIndent />
          <FaDedent />
          <FaList />
          <FaListOl />
          <FaHeader />
          <FaTerminal />
          <FaTrashO />
          <FaAlignLeft />
          <FaAlignCenter />
          <FaAlignRight />
        </div>
        <div className={styles.document}>
          <ContentEditable
            className={styles.editor}
            html={this.state.html}
            disabled={false}
            onSelect={() => null}
            onChange={e => this.setState({ html: e.target.value })}
            ref={(input) => { this.editor = input; }}
          />
        </div>
      </div>
    );
  }
}

export default Writeshare;
