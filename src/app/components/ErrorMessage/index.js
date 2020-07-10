import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function ErrorMessage({ text }) {
  return <div className={`m-top-4 row center ${styles.error}`}>{text}</div>;
}

ErrorMessage.propTypes = {
  text: string.isRequired
};

export default ErrorMessage;
