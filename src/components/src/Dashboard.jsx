import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toolbar from './Toolbar.jsx';
import styles from './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'React Starter Template',
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          Study Central
        </div>
        <div className={styles.body}>
          <div className={styles.toolSelector}>
            <Toolbar />
          </div>
          <div className={styles.dashboard}>
            Open a tool from the side bar
          </div>
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
