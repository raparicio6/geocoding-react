import React from 'react';
import { string } from 'prop-types';
import { Input } from '@material-ui/core';

import styles from './styles.module.scss';

function CustomInput({ name, className, ...props }) {
  return <Input className={`${styles.input} ${className}`} name={name} {...props} />;
}

CustomInput.propTypes = {
  name: string.isRequired,
  className: string
};

CustomInput.defaultProps = {
  className: ''
};

export default CustomInput;
