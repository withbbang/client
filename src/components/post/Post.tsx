import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { useNavigate } from 'react-router-dom';
import styles from './Post.module.scss';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

const Post = ({ isNight, id, title, content, path }: postCard): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
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

interface postCard extends CommonState {
  idx: number;
  id: number;
  title: string;
  content?: string;
  path: string;
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
