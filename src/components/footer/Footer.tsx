import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import SVG from 'modules/SVG';
import styles from './Footer.module.scss';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

const Footer = ({ isNight }: typeFooter): JSX.Element => {
  const navigate = useNavigate();

  const handleWebSite = (url: string) => {
    window.location.href = url;
  };

  return (
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
    >
      <div className={styles.top}>
        <div>
          <span onClick={() => navigate('/')}>
            <SVG
              type="logo"
              width="180px"
              height="36px"
              consoleFill={isNight ? '#f2ff00' : '#6182b8'}
              logFill={isNight ? '#c792ea' : '#7c4dff'}
              bracketFill={isNight ? '#89ddff' : '#39adb5'}
              quoteFill={isNight ? '#c3e88d' : '#f6a434'}
            />
          </span>
        </div>
        <div>
          <span onClick={() => handleWebSite('https://github.com/withbbang')}>
            <SVG
              type="GitHub"
              width="20px"
              height="20px"
              fill={isNight ? '#fff' : '#000'}
            />
          </span>
          <span
            onClick={() =>
              handleWebSite(
                'https://www.instagram.com/cheeseonionbbangnigasajunbbang/'
              )
            }
          >
            <SVG
              type="instagram"
              width="30px"
              height="30px"
              fill={isNight ? '#fff' : '#000'}
            />
          </span>
        </div>
      </div>
      <div
        className={
          isNight ? [styles.bottom, styles.night].join(' ') : styles.bottom
        }
      >
        © 2023 BreadKim. All Rights Reserved.
      </div>
    </div>
  );
};

interface typeFooter extends CommonState {
  isNight?: boolean;
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
