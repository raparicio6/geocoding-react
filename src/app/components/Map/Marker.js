import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function Marker({ color }) {
  return (
    <>
      <div
        className={`${styles.pin} ${styles.bounce}`}
        style={{ backgroundColor: color, cursor: 'pointer' }}
      />
      <div className={styles.pulse} />
    </>
  );
}

Marker.propTypes = {
  color: string
};

Marker.defaultProps = {
  color: 'blue'
};

export default Marker;
