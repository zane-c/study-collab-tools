import React from 'react';
import PropTypes from 'prop-types';
import MdVideocam from 'react-icons/lib/md/videocam';
import FaCommentsO from 'react-icons/lib/fa/comments-o';
import styles from './Chatbar.scss';

const Chatbar = ({ chatOpen, videoOpen, onOpenChat, onOpenVideo }) => (
  <div className={styles.container}>
    <div
      className={styles.video}
      data-open={videoOpen}
      onClick={onOpenVideo}
    >
      <div className={styles.toolIcon}>
        <MdVideocam />
      </div>
      <div className={styles.toolName}>
        Video Chat
      </div>
    </div>
    <div
      className={styles.chat}
      data-open={chatOpen}
      onClick={onOpenChat}
    >
      <div className={styles.toolIcon}>
        <FaCommentsO />
      </div>
      <div className={styles.toolName}>
        Text Chat
      </div>
    </div>
  </div>
);

Chatbar.propTypes = {
  chatOpen: PropTypes.bool.isRequired,
  videoOpen: PropTypes.bool.isRequired,
  onOpenChat: PropTypes.func.isRequired,
  onOpenVideo: PropTypes.func.isRequired,
};

export default Chatbar;
