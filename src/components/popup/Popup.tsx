import React, { useEffect, useState } from 'react';
import { PropState } from 'middlewares/configureReducer';
import { LogState, requestLogOut } from 'middlewares/reduxTookits/logSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { SignState } from 'middlewares/reduxTookits/signSlice';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';
import { PostState } from 'middlewares/reduxTookits/postSlice';
import styles from './Popup.module.scss';

const mapStateToProps = (
  state: PropState
): SignState | LogState | CategoryManageState | PostState => {
  return {
    ...state.sign,
    ...state.log,
    ...state.post,
    ...state.categoryManage
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {
    requestLogOut: (id: string): void => {
      dispatch(requestLogOut({ id }));
    }
  };
};

const Popup = (props: typePopup): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let code = -1;
    if (props.code !== undefined) code = +props.code;
    else return;

    if (!isNaN(code) && code >= 30 && code <= 90) setIsActive(true);
  }, [props.code]);

  const handleLogOut = () => {
    props.id ? props.requestLogOut(props.id) : alert('부적절한 요청입니다.');
    setIsActive(false);
  };

  return (
    <>
      {isActive ? (
        <div className={styles.background}>
          <div className={styles.modal_body}>
            <h2>{props.message}</h2>
            <button onClick={handleLogOut}>확인</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

interface typePopup extends LogState {
  requestLogOut: (id: string) => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
