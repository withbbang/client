import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { JSEncrypt } from 'jsencrypt';
import LogPT from './LogPT';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { handleGetCookie } from 'modules/cookie';
import { AdminState } from 'middlewares/reduxTookits/adminSlice';

const LogCT = (props: typeLogCT): JSX.Element => {
  const navigate = useNavigate();
  const encrypt = new JSEncrypt();

  useEffect(() => {
    // props.isLoggedIn &&
    //   !props.isLoggedOut &&
    //   !!handleGetCookie('atk') &&
    //   !!handleGetCookie('rtk') &&
    //   navigate('/admin');

    props.requestPublicKey();
  }, []);

  const handleConsoleLog = () => {
    console.log('publicKey: ', props.publicKey);
  };

  const handleLogIn = (id: string, password: string) => {
    // 공개키값 세팅은 최초 1회만 하는게 아니라 암호화를 진행 할 때마다 해줘야함.
    props.publicKey && encrypt.setPublicKey(props.publicKey);
    const ID = (document.getElementById(id) as HTMLInputElement).value;
    const PASSWORD = (document.getElementById(password) as HTMLInputElement)
      .value;

    if (!ID) {
      alert('ID를 입력해주세욥!');
      return;
    }

    if (!PASSWORD) {
      alert('비밀번호를 입력해주세욥!');
      return;
    }

    let encrypted: string | boolean = '';
    try {
      encrypted = encrypt.encrypt(PASSWORD);
    } catch (e) {
      console.error('암호화 에러');
      return;
    }

    if (encrypted === false) {
      console.error('암호화 에러');
      return;
    }

    props.requestLogIn(ID, encrypted);
  };

  const handleLogOut = () => {
    props.id && props.requestLogOut(props.id);
  };

  return (
    <LogPT
      onConsoleLog={handleConsoleLog}
      onLogIn={handleLogIn}
      onLogOut={handleLogOut}
      loading={props.isFetching}
    />
  );
};

interface typeLogCT extends CommonState, LogState, AdminState {
  requestPublicKey: () => void;
  requestLogIn: (id: string, password: string) => void;
  requestLogOut: (id: string) => void;
}

export default LogCT;
