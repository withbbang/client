import React from 'react';
import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import styles from './Index.module.scss';
import Card from 'components/card/Card';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ErrorPopup from 'components/errorPopup';
import { Content } from 'modules/types';

const IndexPT = ({ loading, isNight, items }: typeIndexPT) => {
  return (
    <>
      <Loader loading={loading} />
      <Header />
      <LeftSideBar />
      <ErrorPopup />
      <div
        className={
          isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap
        }
      >
        {Array.isArray(items) && items.length > 0 ? (
          <div className={styles.innerWrap}>
            {items.map((item: Content, idx: number) => (
              <Card
                key={idx}
                idx={idx}
                id={item.ID}
                title={item.TITLE}
                content={item.CONTENT}
                path={item.PATH}
              />
            ))}
          </div>
        ) : (
          <div className={[styles.innerWrap, styles.nothing].join(' ')}>
            컨텐츠가 없습니다~!
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

interface typeIndexPT {
  loading?: boolean;
  isNight?: boolean;
  items?: Array<Content>;
}

export default IndexPT;
