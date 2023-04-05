import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './ConfirmPopup.module.scss';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

const ConfirmPopup = ({
  isActive,
  confirmMessage,
  isNight,
  onCancle,
  onConfirm
}: typeConfirmPopup): JSX.Element => {
  return (
    <>
      {isActive ? (
        <div
          className={
            isNight
              ? [styles.background, styles.night].join(' ')
              : styles.background
          }
        >
          <div className={styles.modal_body}>
            <span>{confirmMessage}</span>
            <div>
              <button onClick={() => onCancle(!isActive)}>취소</button>
              <button onClick={onConfirm}>확인</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

interface typeConfirmPopup extends CommonState {
  isActive: boolean;
  confirmMessage: string;
  onCancle: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPopup);
