import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import {
  CommonState,
  handleIsNight
} from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './Header.module.scss';
import SVG from 'modules/SVG';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    handleIsNight: (): void => {
      dispatch(handleIsNight());
    }
  };
};

const Header = ({ isNight, handleIsNight }: typeHeader): JSX.Element => (
  <div
    className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
  >
    <span>
      <SVG
        type="logo"
        width="200px"
        height="40px"
        consoleFill={isNight ? '#f2ff00' : '#6182b8'}
        logFill={isNight ? '#c792ea' : '#7c4dff'}
        bracketFill={isNight ? '#89ddff' : '#39adb5'}
        quoteFill={isNight ? '#c3e88d' : '#f6a434'}
      />
    </span>
    <span onClick={handleIsNight}>
      <SVG
        type={isNight ? 'night' : 'day'}
        fill={isNight ? '#fffb00' : '#fa0505'}
      />
    </span>
  </div>
);

interface typeHeader extends CommonState {
  handleIsNight: () => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
