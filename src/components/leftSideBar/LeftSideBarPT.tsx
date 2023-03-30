import React from 'react';
import styles from './LeftSideBar.module.scss';
import SVG from 'modules/SVG';

const LeftSideBarPT = ({
  total,
  today,
  isNight,
  isLoggedIn,
  onLogOut,
  id,
  toggle,
  onToggle,
  onNavigate,
  items
}: typeLeftSideBarPT): JSX.Element => {
  return (
    <>
      <div
        className={
          toggle
            ? isNight
              ? [styles.wrap, styles.night].join(' ')
              : styles.wrap
            : isNight
            ? [styles.wrap, styles.off, styles.night].join(' ')
            : [styles.wrap, styles.off].join(' ')
        }
      >
        <div className={styles.inner_wrap}>
          <div
            className={
              isNight
                ? [styles.visitor_count, styles.night].join(' ')
                : styles.visitor_count
            }
          >
            <div className={styles.visitor}>Total {total ? total : 0}</div>
            <div className={styles.visitor}>Today {today ? today : 0}</div>
            <div
              className={
                toggle
                  ? isNight
                    ? [styles.toggle, styles.night].join(' ')
                    : styles.toggle
                  : isNight
                  ? [styles.toggle, styles.off, styles.night].join(' ')
                  : [styles.toggle, styles.off].join(' ')
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
                <div
                  className={styles.menu}
                  onClick={() => onNavigate(item.TITLE)}
                  key={idx}
                >
                  <div className={styles.banner} />
                  <div className={styles.svg}>
                    <SVG
                      type={item.TITLE}
                      width="30px"
                      height="30px"
                      fill={isNight ? '#fff' : '#000'}
                    />
                  </div>
                  {item.TITLE}
                  <div className={styles.svg_}>
                    <SVG
                      type="arrow"
                      width="30px"
                      height="30px"
                      fill={isNight ? '#fff' : '#000'}
                    />
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
  total?: number;
  today?: number;
  isNight?: boolean;
  isLoggedIn?: boolean;
  onLogOut: () => void;
  id?: string;
  toggle: boolean;
  onToggle: () => void;
  onNavigate: (path: string) => void;
  items?: Array<any>;
}

export default LeftSideBarPT;
