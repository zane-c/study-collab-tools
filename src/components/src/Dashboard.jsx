import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Codeshare from './Codeshare.jsx';
import Chatbar from './Chatbar.jsx';
import Drawshare from './Drawshare.jsx';
import Toolbar from './Toolbar.jsx';
import Writeshare from './Writeshare.jsx';
import styles from './Dashboard.scss';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTool: 'None',
      chatOpen: false,
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
              <Codeshare />
            }
            {openTool === 'Writing' &&
              <Writeshare />
            }
            {openTool === 'Drawing' &&
              <Drawshare />
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
