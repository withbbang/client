import React from 'react';
import styles from './Float.module.scss';
import { Content } from 'modules/types';

const SearchPT = ({ isNight }: typeSearchPT): JSX.Element => {
  return (
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
    ></div>
  );
};

interface typeSearchPT {
  isNight?: boolean;
  snippet: string;
  didSearch: boolean;
  searchContents?: Array<Content>;
}

export default SearchPT;
