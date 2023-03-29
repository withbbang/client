import React, { useEffect, useState } from 'react';
import { PropState } from 'middlewares/configureReducer';
import {
  CommonState,
  handleIsNight
} from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './Header.module.scss';
import SVG from 'modules/SVG';
import { LogState, requestLogOut } from 'middlewares/reduxTookits/logSlice';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state: PropState): CommonState | LogState => {
  return {
    ...state.common,
    ...state.log
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    handleIsNight: (): void => {
      dispatch(handleIsNight());
    },
    requestLogOut: (id: string): void => {
      dispatch(requestLogOut({ id }));
    }
  };
};

const Header = (props: typeHeader): JSX.Element => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    !!!handleGetCookie('atk') &&
    !!!handleGetCookie('rtk') &&
    !props.id &&
    !props.isLoggedIn
      ? setIsLoggedIn(false)
      : setIsLoggedIn(true);
  }, [props.id, props.isLoggedIn]);

  const handleLog = () => {
    isLoggedIn
      ? props.id
        ? props.requestLogOut(props.id)
        : console.log('오류 팝업')
      : navigate('/log');
  };

  return (
    <div
      className={
        props.isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap
      }
    >
      <div>
        <span onClick={() => navigate('/')}>
          <SVG
            type="logo"
            width="200px"
            height="40px"
            consoleFill={props.isNight ? '#f2ff00' : '#6182b8'}
            logFill={props.isNight ? '#c792ea' : '#7c4dff'}
            bracketFill={props.isNight ? '#89ddff' : '#39adb5'}
            quoteFill={props.isNight ? '#c3e88d' : '#f6a434'}
          />
        </span>
      </div>
      <div>
        <span onClick={props.handleIsNight}>
          <SVG
            type={props.isNight ? 'night' : 'day'}
            fill={props.isNight ? '#fffb00' : '#fa0505'}
          />
        </span>
        <span>
          <SVG type="search" fill={props.isNight ? '#fff' : '#000'} />
        </span>
        <span className={styles.log} onClick={handleLog}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </span>
      </div>
    </div>
  );
};

interface typeHeader extends CommonState, LogState {
  handleIsNight: () => void;
  requestLogOut: (id: string) => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
