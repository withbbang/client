import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import PopupPT from './PopupPT';
import { SignState } from 'middlewares/reduxTookits/signSlice';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';
import { PostState } from 'middlewares/reduxTookits/postSlice';

const PopupCT = (props: typePopupCT): JSX.Element => {
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
  }, [props.code, props.message]);

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
    <PopupPT isActive={isActive} message={props.message} onBtn={handleBtn} />
  );
};

interface typePopupCT
  extends CommonState,
    SignState,
    LogState,
    CategoryManageState,
    PostState {
  requestForceLogOut: (id: string) => void;
}

export default PopupCT;
