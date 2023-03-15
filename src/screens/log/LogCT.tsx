import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JSEncrypt } from 'jsencrypt';
import LogPT from './LogPT';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { handleGetCookie } from 'modules/cookie';

const LogCT = (props: typeLogCT): JSX.Element => {
  const navigate = useNavigate();
  const encrypt = new JSEncrypt();

  useEffect(() => {
    !!handleGetCookie('atk') && !!handleGetCookie('rtk') && navigate('/admin');

    props.requestPublicKey();
  }, []);

  useEffect(() => {
    props.publicKey && encrypt.setPublicKey(props.publicKey);
  }, [props.publicKey]);

  useEffect(() => {
    !props.isFetching &&
      props.isSuccess &&
      !props.isFail &&
      !props.isLoggedOut &&
      props.isLoggedIn &&
      navigate('/admin');

    !props.isFetching &&
      props.isSuccess &&
      !props.isFail &&
      props.isLoggedOut &&
      !props.isLoggedIn &&
      navigate('/');
  }, [
    props.isFetching,
    props.isSuccess,
    props.isFail,
    props.isLoggedIn,
    props.isLoggedOut
  ]);

  const handleConsoleLog = () => {
    console.log('publicKey: ', props.publicKey);
  };

  const handleLogIn = (id: string, password: string) => {
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

    props.requestLogIn({ id: ID, password: encrypted });
  };

  const handleLogOut = () => {
    props.requestLogOut({ id: 'ADMINISTER' });
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

interface typeLogCT extends CommonState, LogState {
  requestPublicKey: () => void;
  requestLogIn: ({ id, password }: { id: string; password: string }) => void;
  requestLogOut: ({ id }: { id: string }) => void;
}

export default LogCT;
