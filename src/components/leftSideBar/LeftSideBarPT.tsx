import React from 'react';
import { Loader } from 'components/loader/Loader';
import styles from './LeftSideBar.module.scss';
import { Arrow, DoubleArrow, LogOut } from 'modules/svg';

const LeftSideBarPT = ({
  loading,
  total,
  today,
  isLoggedIn,
  onLogOut,
  id
}: typeLeftSideBarPT): JSX.Element => {
  return (
    <>
      <Loader loading={loading} />
      <div
        //   className={
        //     props.sideToggle ? styles.wrap : [styles.wrap, styles.off].join(" ")
        //   }
        className={styles.wrap}
      >
        <div className={styles.inner_wrap}>
          <div className={styles.visitor_count}>
            <div className={styles.visitor}>Total {total ? total : 0}</div>
            <div className={styles.visitor}>Today {today ? today : 0}</div>
            <div
              className={styles.close}
              // onClick={() => props.setSideToggle(!props.sideToggle)}
            >
              <DoubleArrow width="25px" height="25px" fill="#fff" />
            </div>
          </div>
          {isLoggedIn && id ? (
            <div className={[styles.user, styles.log_in].join(' ')}>
              <div className={styles.avatar}>{/* <img src={img} /> */}</div>
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
          <div className={styles.menu}>
            <div className={styles.banner} />
            <div className={styles.svg}>
              <DoubleArrow width="30px" height="30px" fill="#fff" />
            </div>
            Javascript
            <div className={styles.svg_}>
              <Arrow width="25px" height="25px" fill="#fff" />
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.banner} />
            <div className={styles.svg}>
              <DoubleArrow width="30px" height="30px" fill="#fff" />
            </div>
            Python
            <div className={styles.svg_}>
              <Arrow width="25px" height="25px" fill="#fff" />
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.banner} />
            <div className={styles.svg}>
              <DoubleArrow width="30px" height="30px" fill="#fff" />
            </div>
            Java
            <div className={styles.svg_}>
              <Arrow width="25px" height="25px" fill="#fff" />
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.banner} />
            <div className={styles.svg}>
              <DoubleArrow width="30px" height="30px" fill="#fff" />
            </div>
            Learning
            <div className={styles.svg_}>
              <Arrow width="25px" height="25px" fill="#fff" />
            </div>
          </div>
          {isLoggedIn && (
            <div className={styles.log_out} onClick={onLogOut}>
              Log Out
              <div className={styles.svg}>
                <LogOut width="20px" height="20px" fill="#fff" />
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
}

export default LeftSideBarPT;
