import React from 'react';
import { Loader } from 'components/loader/Loader';
import LeftSideBar from 'components/leftSideBar';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import styles from './Log.module.scss';
import ErrorPopup from 'components/errorPopup';

const LogPT = ({
  onLogIn,
  loading,
  isNight,
  idRef,
  btnRef,
  passwordRef,
  onSetId,
  onSetPassword
}: typeLogPT): JSX.Element => {
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
          <div className={styles.box}>
            <input
              placeholder="ID"
              type="text"
              id="id"
              onChange={(e) => onSetId(e.target.value)}
              onKeyUp={(e) => onLogIn(e)}
              ref={idRef}
            />
            <input
              placeholder="PASSWORD"
              type="password"
              id="password"
              onChange={(e) => onSetPassword(e.target.value)}
              onKeyUp={(e) => onLogIn(e)}
              ref={passwordRef}
            />
            <button onClick={() => onLogIn()} ref={btnRef}>
              로그인
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

interface typeLogPT {
  onLogIn: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
  loading?: boolean;
  isNight?: boolean;
  idRef: React.MutableRefObject<HTMLInputElement>;
  passwordRef: React.MutableRefObject<HTMLInputElement>;
  btnRef: React.MutableRefObject<HTMLButtonElement>;
  onSetId: React.Dispatch<React.SetStateAction<string>>;
  onSetPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default LogPT;
