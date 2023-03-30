import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './Card.module.scss';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

const Card = ({
  isNight,
  id,
  contentTitle,
  categoryTitle,
  contents,
  path
}: typeCard): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    path ? navigate(path) : navigate(`/:${categoryTitle}/:${id}`);
  };

  return (
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
      onClick={handleNavigate}
    >
      <h3>{contentTitle}</h3>
      <p>{contents}</p>
    </div>
  );
};

interface typeCard extends CommonState {
  id: string;
  contentTitle: string;
  categoryTitle: string;
  contents: string;
  path?: string;
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
