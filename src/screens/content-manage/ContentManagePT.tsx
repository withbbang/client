import React from 'react';
import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import styles from './ContentManage.module.scss';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ErrorPopup from 'components/errorPopup';
import { Content } from 'modules/types';

const ContentManagePT = ({
  loading,
  isNight,
  content
}: typeContentManagePT) => {
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
      ></div>
      <Footer />
    </>
  );
};

interface typeContentManagePT {
  loading?: boolean;
  isNight?: boolean;
  content?: Content;
}

export default ContentManagePT;
