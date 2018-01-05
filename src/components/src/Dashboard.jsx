import React from 'react';
// import PropTypes from 'prop-types';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import { connect } from 'react-redux';
import CodeMirror from 'react-codemirror';
import Chatbar from './Chatbar.jsx';
import Toolbar from './Toolbar.jsx';
import styles from './Dashboard.scss';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTool: 'None',
      chatOpen: false,
      code: '// Code\nvar x = 23;\n\n',
    };
    this.onOpenTool = this.onOpenTool.bind(this);
  }
  onOpenTool(tool) {
    const { openTool } = this.state;
    if (tool === openTool) {
      this.setState({ openTool: 'None' });
    } else {
      this.setState({ openTool: tool });
    }
  }
  render() {
    const {
      openTool,
      chatOpen,
      code,
    } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          Study Space
        </div>
        <div className={styles.body}>
          <Toolbar
            selected={openTool}
            onSelect={this.onOpenTool}
          />
          <div className={styles.dashboard} >
            {openTool === 'None' &&
              <div className={styles.tool}>
                Open a tool from the side bar
              </div>
            }
            {openTool === 'Coding' &&
              <CodeMirror
                value={code}
                onChange={c => this.setState({ code: c })}
                className={styles.cmContainer}
                options={{
                  lineWrapping: true,
                  tabSize: 4,
                  lineNumbers: true,
                  mode: 'javascript',
                  theme: 'material',
                  viewportMargin: Infinity,
                }}
              />
            }
            {openTool === 'Writing' &&
              <div className={styles.tool}>
                Writing
              </div>
            }
            {openTool === 'Drawing' &&
              <div className={styles.tool}>
                Drawing
              </div>
            }
          </div>
          <Chatbar
            chatOpen={chatOpen}
            onOpenChat={() => this.setState({ chatOpen: !chatOpen })}
          />
        </div>
      </div>
    );
  }
}

Dashboard.defaultProps = {
};

Dashboard.propTypes = {
};

export default connect(null)(Dashboard);
