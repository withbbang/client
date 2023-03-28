import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './Footer.module.scss';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

const Footer = ({ isNight }: typeFooter): JSX.Element => (
  <div
    className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
  >
    Footer!
  </div>
);

interface typeFooter extends CommonState {
  isNight?: boolean;
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
