import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './Card.module.scss';
import { useNavigate } from 'react-router-dom';
import SVG from 'modules/SVG';

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
  title,
  content,
  path,
  isAdmin,
  isDeleted
}: typeCard): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    path ? navigate(path) : alert('부적절한 요청입니다.');
  };

  return (
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
      onClick={handleNavigate}
    >
      {isAdmin && (
        <div className={styles.floatBtns}>
          <span>
            <SVG
              type={isDeleted === 'Y' ? 'restore' : 'trash'}
              width={isDeleted === 'Y' ? '20px' : '16px'}
              height={isDeleted === 'Y' ? '20px' : '16px'}
              fill={isNight ? '#fff' : '#000'}
            />
          </span>
        </div>
      )}
      <h3>{title}</h3>
      <p>{content ? content : title}</p>
      {id === 0 && (
        <span className={styles.add}>
          <SVG
            type="add"
            width="100px"
            height="100px"
            fill={isNight ? '#fff' : '#000'}
          />
        </span>
      )}
    </div>
  );
};

interface typeCard extends CommonState {
  id: number;
  title: string;
  content?: string;
  path?: string;
  isAdmin?: boolean;
  isDeleted?: string;
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
