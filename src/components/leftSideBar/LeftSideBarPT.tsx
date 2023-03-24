import React from 'react';
import { Loader } from 'components/loader/Loader';
import styles from './LeftSideBar.module.scss';
import SVG from 'modules/SVG';
import Popup from 'components/popup/Popup';

const LeftSideBarPT = ({
  loading,
  total,
  today,
  isLoggedIn,
  onLogOut,
  id,
  toggle,
  onToggle,
  items
}: typeLeftSideBarPT): JSX.Element => {
  return (
    <>
      <Loader loading={loading} />
      <Popup />
      <div
        className={toggle ? styles.wrap : [styles.wrap, styles.off].join(' ')}
      >
        <div className={styles.inner_wrap}>
          <div className={styles.visitor_count}>
            <div className={styles.visitor}>Total {total ? total : 0}</div>
            <div className={styles.visitor}>Today {today ? today : 0}</div>
            <div
              className={
                toggle ? styles.toggle : [styles.toggle, styles.off].join(' ')
              }
              onClick={onToggle}
            >
              <SVG type="doubleArrow" width="30px" height="30px" fill="#fff" />
            </div>
          </div>
          {isLoggedIn && id ? (
            <div className={[styles.user, styles.log_in].join(' ')}>
              {/* <div className={styles.avatar}><img src={img} /></div> */}
              <div className={styles.infos}>
                <span>{id}</span>
                {id}
              </div>
            </div>
          ) : (
            <div className={styles.user}>
              <input
              //   onChange={(e) => props.setEmail(e.target.value)}
              //   onKeyPress={(e) => props.onEmailPress(e)}
              //   type="email"
              //   placeholder="Email..."
              //   ref={props.emailRef}
              />
              {/* <button onClick={props.doRequestLogin}>Login</button> */}
              <button>Login</button>
            </div>
          )}
          {items &&
            Array.isArray(items) &&
            items.length > 0 &&
            items.map((item, idx) => {
              return (
                <div className={styles.menu} key={idx}>
                  <div className={styles.banner} />
                  <div className={styles.svg}>
                    <SVG
                      type="doubleArrow"
                      width="30px"
                      height="30px"
                      fill="#fff"
                    />
                  </div>
                  {item.TITLE}
                  <div className={styles.svg_}>
                    <SVG type="arrow" width="30px" height="30px" fill="#fff" />
                  </div>
                </div>
              );
            })}
          {isLoggedIn && (
            <div className={styles.log_out} onClick={onLogOut}>
              Log Out
              <div className={styles.svg}>
                <SVG type="logOut" width="20px" height="20px" fill="#fff" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

interface typeLeftSideBarPT {
  loading: boolean;
  total?: number;
  today?: number;
  isLoggedIn?: boolean;
  onLogOut: () => void;
  id?: string;
  toggle: boolean;
  onToggle: () => void;
  items?: Array<any>;
}

export default LeftSideBarPT;
