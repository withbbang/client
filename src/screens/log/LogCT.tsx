import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JSEncrypt } from 'jsencrypt';
import LogPT from './LogPT';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { handleGetCookie } from 'modules/cookie';

const LogCT = (props: typeLogCT): JSX.Element => {
  const navigate = useNavigate();
  const idRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const btnRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const encrypt = new JSEncrypt();

  useEffect(() => {
    props.isLoggedIn &&
    !props.isLoggedOut &&
    !!handleGetCookie('atk') &&
    !!handleGetCookie('rtk')
      ? navigate('/')
      : props.requestPublicKey();
  }, [props.isLoggedIn, props.isLoggedOut]);

  const handleLogIn = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    e?.preventDefault();

    if (e !== undefined && e.key !== 'Enter') {
      return;
    }

    if (!id) {
      props.handleCodeMessage('EMPTY ID', 'ID를 입력해주세요.');
      handleBlur();
      return;
    }

    if (!password) {
      props.handleCodeMessage('EMPTY PASSWORD', 'PASSWORD를 입력해주세요.');
      handleBlur();
      return;
    }

    // 공개키값 세팅은 최초 1회만 하는게 아니라 암호화를 진행 할 때마다 해줘야함.
    props.publicKey && encrypt.setPublicKey(props.publicKey);

    let encrypted: string | boolean = '';
    try {
      encrypted = encrypt.encrypt(password);
    } catch (e) {
      props.handleCodeMessage('ENCRYPT ERROR', '암호화 에러');
      handleBlur();
      return;
    }

    if (encrypted === false) {
      props.handleCodeMessage('ENCRYPT ERROR', '암호화 에러');
      handleBlur();
      return;
    }

    props.requestLogIn(id, encrypted);
    props.handleCodeMessage('', '');
    handleBlur();
  };

  const handleBlur = () => {
    idRef.current && idRef.current.blur();
    passwordRef.current && passwordRef.current.blur();
    btnRef.current && btnRef.current.blur();
  };

  return (
    <LogPT
      onLogIn={handleLogIn}
      loading={props.isFetching}
      isNight={props.isNight}
      idRef={idRef}
      passwordRef={passwordRef}
      btnRef={btnRef}
      onSetId={setId}
      onSetPassword={setPassword}
    />
  );
};

interface typeLogCT extends CommonState, LogState {
  requestPublicKey: () => void;
  requestLogIn: (id: string, password: string) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default LogCT;
