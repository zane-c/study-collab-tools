import React from 'react';
import PropTypes from 'prop-types';
import MdVideocam from 'react-icons/lib/md/videocam';
import FaCommentsO from 'react-icons/lib/fa/comments-o';
import styles from './Chatbar.scss';

const Chatbar = ({ chatOpen, onOpenChat }) => (
  <div
    className={styles.container}
    data-open={chatOpen}
  >
    <div className={styles.icons} onClick={onOpenChat}>
      <FaCommentsO />
    </div>
    <div className={styles.chat}>
      <div className={styles.video}>
        <MdVideocam />
      </div>
      <div className={styles.text}>
        Chat
      </div>
    </div>
  </div>
);

Chatbar.propTypes = {
  chatOpen: PropTypes.bool.isRequired,
  onOpenChat: PropTypes.func.isRequired,
};

export default Chatbar;
