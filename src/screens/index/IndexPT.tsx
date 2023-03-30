import React from 'react';
import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import styles from './Index.module.scss';
import Card from 'components/card/Card';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Popup from 'components/popup';

const IndexPT = ({ isNight, items }: typeIndexPT) => {
  return (
    <>
      <Loader loading={false} />
      <Header />
      <LeftSideBar />
      <Popup />
      <div
        className={
          isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap
        }
      >
        {Array.isArray(items) && items.length > 0 ? (
          <div className={styles.innerWrap}>
            {items.map((item: any, idx: number) => (
              <Card
                key={idx}
                id={item.ID}
                contentTitle={item.CONTENT_TITLE}
                categoryTitle={item.CATEGORY_TITLE}
                contents={item.CONTENT}
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
  isNight?: boolean;
  items?: Array<any>;
}

export default IndexPT;
