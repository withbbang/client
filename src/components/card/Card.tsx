import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './Card.module.scss';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

const Card = ({ isNight, title, contents }: typeCard): JSX.Element => (
  <div
    className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
  >
    <h3>{title}</h3>
    <p>{contents}</p>
  </div>
);

interface typeCard extends CommonState {
  title: string;
  contents: string;
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
