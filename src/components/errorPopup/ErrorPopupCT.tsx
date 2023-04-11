import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import ErrorPopupPT from './ErrorPopupPT';
import { SignState } from 'middlewares/reduxTookits/signSlice';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';
import { useNavigate } from 'react-router-dom';

const ErrorPopupCT = (props: typeErrorPopupCT): JSX.Element => {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<string>('');

  useEffect(() => {
    let code = -1;
    if (props.code !== undefined) code = +props.code;
    else return;

    if (!isNaN(code) && code !== 0) {
      if (code >= 40 && code <= 90) {
        setErrorType('auth');
      } else {
        setErrorType('server');
      }
      setIsActive(true);
    } else if (isNaN(code) && props.code !== '') {
      setIsActive(true);
      setErrorType('client');
    }
  }, [props.code, props.message]);

  const handleBtn = () => {
    switch (errorType) {
      case 'auth':
        if (props.id) {
          props.requestForceLogOut(props.id);
          navigate('/');
        } else {
          props.handleCodeMessage('EMPTY USER INFO', '유저 정보 부재');
        }
        break;
      case 'server':
      case 'client':
        props.handleCodeMessage('', '');
        break;
      default:
        break;
    }

    setIsActive(false);
    setErrorType('');
  };

  return (
    <ErrorPopupPT
      isActive={isActive}
      message={props.message}
      isNight={props.isNight}
      onBtn={handleBtn}
    />
  );
};

interface typeErrorPopupCT
  extends CommonState,
    SignState,
    LogState,
    CategoryManageState {
  requestForceLogOut: (id: string) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default ErrorPopupCT;
