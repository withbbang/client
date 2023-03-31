import React from 'react';
import styles from './Float.module.scss';

const FloatPT = ({
  isNight,
  title,
  content,
  path,
  description
}: typeFloatPT): JSX.Element => {
  return (
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
    >
      <div className={styles.innerWrap}>
        <h3>카테고리: {title}</h3>
        <p>경로: {path}</p>
        <p>권한: {description}</p>
      </div>
    </div>
  );
};

interface typeFloatPT {
  isNight?: boolean;
  title: string;
  content?: string;
  path?: string;
  description: string;
}

export default FloatPT;
