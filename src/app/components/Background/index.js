import React from 'react';
import { node } from 'prop-types';

import styles from './styles.module.scss';

function Background({ children }) {
  return (
    <div className={`column ${styles.background}`}>
      <div className={`column ${styles.container}`}>{children}</div>
    </div>
  );
}

Background.propTypes = {
  children: node.isRequired
};

export default Background;
