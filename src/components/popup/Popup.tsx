import React, { useEffect, useState } from 'react';
import { PropState } from 'middlewares/configureReducer';
import {
  LogState,
  requestForceLogOut
} from 'middlewares/reduxTookits/logSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { SignState } from 'middlewares/reduxTookits/signSlice';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';
import { PostState } from 'middlewares/reduxTookits/postSlice';
import styles from './Popup.module.scss';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';

const mapStateToProps = (
  state: PropState
): CommonState | SignState | LogState | CategoryManageState | PostState => {
  return {
    ...state.common,
    ...state.sign,
    ...state.log,
    ...state.post,
    ...state.categoryManage
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestForceLogOut: (id: string): void => {
      dispatch(requestForceLogOut({ id }));
    }
  };
};

const Popup = (props: typePopup): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<string>('');

  useEffect(() => {
    let code = -1;
    if (props.code !== undefined) code = +props.code;
    else return;

    if (!isNaN(code) && code >= 30 && code <= 90) {
      setIsActive(true);
      setErrorType('auth');
    }
  }, [props.code]);

  const handleBtn = () => {
    switch (errorType) {
      case 'auth':
        props.id
          ? props.requestForceLogOut(props.id)
          : alert('부적절한 요청입니다.');
        break;
      default:
        break;
    }

    setIsActive(false);
    setErrorType('');
  };

  return (
    <>
      {isActive ? (
        <div className={styles.background}>
          <div className={styles.modal_body}>
            <h2>{props.message}</h2>
            <button onClick={handleBtn}>확인</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

interface typePopup extends LogState {
  requestForceLogOut: (id: string) => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
