import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonLight.scss';

const ButtonLight = ({ disabled, text, onClick }) => (
  <div
    className={styles.container}
    data-disabled={disabled}
    onClick={onClick}
  >
    <div className={styles.text}>
      {text}
    </div>
  </div>
);

ButtonLight.defaultProps = {
  disabled: false,
  text: 'Button',
  onClick: () => null,
};

ButtonLight.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonLight;
