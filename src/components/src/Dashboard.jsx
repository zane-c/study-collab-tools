import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chatbar from './Chatbar.jsx';
import Toolbar from './Toolbar.jsx';
import styles from './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTool: 'None',
      chatOpen: false,
    };
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
            onSelect={tool => this.setState({ openTool: tool })}
          />
          <div className={styles.dashboard}>
            Open a tool from the side bar
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
