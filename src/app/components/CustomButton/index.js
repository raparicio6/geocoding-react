/* eslint-disable react/button-has-type */
import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { string, bool } from 'prop-types';

import styles from './styles.module.scss';

function CustomButton({ label, className, type, loading, disabled, ...props }) {
  return (
    <button className={`${styles.button} ${className}`} type={type} disabled={disabled || loading} {...props}>
      {loading ? (
        <div className="row center middle">
          <div style={{ opacity: 0 }}>{label}</div>
          <div style={{ position: 'absolute' }}>
            <CircularProgress className={styles.spinner} />
          </div>
        </div>
      ) : (
        label
      )}
    </button>
  );
}

CustomButton.propTypes = {
  label: string.isRequired,
  className: string,
  disabled: bool,
  loading: bool,
  type: string
};

CustomButton.defaultProps = {
  className: '',
  disabled: false,
  loading: false,
  type: 'button'
};

export default CustomButton;
