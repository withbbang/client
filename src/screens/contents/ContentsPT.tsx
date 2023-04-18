import React from 'react';
import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ErrorPopup from 'components/errorPopup';
import Card from 'components/card/Card';
import { Content } from 'modules/types';
import styles from './Contents.module.scss';

const ContentsPT = ({ loading, isNight, contents }: typeContentsPT) => {
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
        <div className={styles.innerWrap}>
          <Card
            id={0}
            title={''}
            content={''}
            path={'/admin/content-manage/'}
          />
          {Array.isArray(contents) &&
            contents.length > 0 &&
            contents.map((item: any, idx: number) => (
              <Card
                key={idx}
                id={item.ID}
                title={item.TITLE}
                content={item.CONTENT}
                path={
                  item.PATH ? item.PATH : `/admin/content-manage/${item.ID}`
                }
                isAdmin={true}
                isDeleted={item.isDeleted}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

interface typeContentsPT {
  loading?: boolean;
  isNight?: boolean;
  contents?: Array<Content>;
}

export default ContentsPT;
