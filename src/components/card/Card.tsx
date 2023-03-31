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

const Card = ({ isNight, title, content, path }: typeCard): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    path ? navigate(path) : alert('부적절한 요청입니다.');
  };

  return (
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
      onClick={handleNavigate}
    >
      <h3>{title}</h3>
      <p>{content ? content : title}</p>
    </div>
  );
};

interface typeCard extends CommonState {
  id: string;
  title: string;
  content: string;
  path?: string;
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
