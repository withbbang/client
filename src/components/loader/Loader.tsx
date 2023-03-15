import React from 'react';
import styles from './Loader.module.scss';

export const Loader = (): JSX.Element => (
  <div className={styles.background}>
    <span className={styles.loader}></span>
  </div>
);
