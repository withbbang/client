import React, { useEffect, useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import SignPT from './SignPT';
import { SignState } from 'middlewares/reduxTookits/signSlice';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';

const SignCT = (props: typeSignCT): JSX.Element => {
  const encrypt = new JSEncrypt();

  useEffect(() => {
    props.requestPublicKey();
  }, []);

  useEffect(() => {
    props.publicKey && encrypt.setPublicKey(props.publicKey);
  }, [props.publicKey]);

  useEffect(() => {
    !props.isFetching &&
      props.isSuccess &&
      !props.isFail &&
      props.isSignUp &&
      !props.isSignOut &&
      console.log('가입 완료!');

    !props.isFetching &&
      props.isSuccess &&
      !props.isFail &&
      !props.isSignUp &&
      props.isSignOut &&
      console.log('탈퇴 완료!');
  }, [
    props.isFetching,
    props.isSuccess,
    props.isFail,
    props.isSignUp,
    props.isSignOut
  ]);

  const handleConsoleLog = () => {
    console.log('publicKey: ', props.publicKey);
  };

  const handleSignUp = (id: string, password: string) => {
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

    props.requestSignUp({ id: ID, password: encrypted });
  };

  const handleSignOut = (id: string, password: string) => {
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

    props.requestSignOut({ id: ID, password: encrypted });
  };

  return (
    <SignPT
      onConsoleLog={handleConsoleLog}
      onSignUp={handleSignUp}
      onSignOut={handleSignOut}
    />
  );
};

interface typeSignCT extends CommonState, SignState {
  requestPublicKey: () => void;
  requestSignUp: ({ id, password }: { id: string; password: string }) => void;
  requestSignOut: ({ id, password }: { id: string; password: string }) => void;
}

export default SignCT;
