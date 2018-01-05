import React from 'react';
import FaCode from 'react-icons/lib/fa/code';
import FaPaintBrush from 'react-icons/lib/fa/paint-brush';
import FaFileTextO from 'react-icons/lib/fa/file-text-o';
import styles from './Toolbar.scss';

const Toolbar = () => (
  <div className={styles.container}>
    <div className={styles.tool} data-selected={false}>
      <div className={styles.toolName}>
        Coding
      </div>
      <div className={styles.toolIcon}>
        <FaCode />
      </div>
    </div>
    <div className={styles.tool} data-selected={false}>
      <div className={styles.toolName}>
        Drawing
      </div>
      <div className={styles.toolIcon}>
        <FaPaintBrush />
      </div>
    </div>
    <div className={styles.tool} data-selected={false}>
      <div className={styles.toolName}>
        Writing
      </div>
      <div className={styles.toolIcon}>
        <FaFileTextO />
      </div>
    </div>
  </div>
);

export default Toolbar;
