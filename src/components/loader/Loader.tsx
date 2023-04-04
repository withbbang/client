import React from 'react';
import styles from './Loader.module.scss';

export const Loader = ({ loading }: { loading?: boolean }): JSX.Element => (
  <div
    className={styles.background}
    style={loading ? { display: '' } : { display: 'none' }}
  >
    <span className={styles.loader}></span>
  </div>
);
