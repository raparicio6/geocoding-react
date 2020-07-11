/* eslint-disable react/button-has-type */
import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function CustomButton({ label, className, type }) {
  return (
    <button className={`${styles.button} ${className}`} type={type}>
      {label}
    </button>
  );
}

CustomButton.propTypes = {
  label: string.isRequired,
  className: string,
  type: string
};

CustomButton.defaultProps = {
  className: '',
  type: 'button'
};

export default CustomButton;