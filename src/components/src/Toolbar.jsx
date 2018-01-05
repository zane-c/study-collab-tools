import React from 'react';
import PropTypes from 'prop-types';
import FaCode from 'react-icons/lib/fa/code';
import FaPaintBrush from 'react-icons/lib/fa/paint-brush';
import FaFileTextO from 'react-icons/lib/fa/file-text-o';
import styles from './Toolbar.scss';

const Toolbar = ({ selected, onSelect }) => (
  <div className={styles.container}>
    <div
      className={styles.tool}
      data-selected={selected === 'Coding'}
      onClick={() => onSelect('Coding')}
    >
      <div className={styles.toolName}>
        Coding
      </div>
      <div className={styles.toolIcon}>
        <FaCode />
      </div>
    </div>
    <div
      className={styles.tool}
      data-selected={selected === 'Drawing'}
      onClick={() => onSelect('Drawing')}
    >
      <div className={styles.toolName}>
        Drawing
      </div>
      <div className={styles.toolIcon}>
        <FaPaintBrush />
      </div>
    </div>
    <div
      className={styles.tool}
      data-selected={selected === 'Writing'}
      onClick={() => onSelect('Writing')}
    >
      <div className={styles.toolName}>
        Writing
      </div>
      <div className={styles.toolIcon}>
        <FaFileTextO />
      </div>
    </div>
  </div>
);

Toolbar.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Toolbar;
