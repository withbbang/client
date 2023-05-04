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
  idx,
  id,
  title,
  content,
  path,
  isAdmin,
  isDeleted,
  onDeleteRestore
}: typeCard): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  const handleDeleteRestore = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    onDeleteRestore && onDeleteRestore(idx);
  };

  return (
    <div
      className={
        isNight
          ? isDeleted === 'Y'
            ? [styles.wrap, styles.night, styles.deleted].join(' ')
            : [styles.wrap, styles.night].join(' ')
          : isDeleted === 'Y'
          ? [styles.wrap, styles.deleted].join(' ')
          : styles.wrap
      }
      onClick={handleNavigate}
    >
      {isAdmin && (
        <div className={styles.floatBtns}>
          <span onClick={(e) => handleDeleteRestore(e)}>
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
  idx: number;
  id: number;
  title: string;
  content?: string;
  path: string;
  isAdmin?: boolean;
  isDeleted?: string;
  onDeleteRestore?: (idx?: number) => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
