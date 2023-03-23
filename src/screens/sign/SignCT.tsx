import React, { useEffect } from 'react';
import { JSEncrypt } from 'jsencrypt';
import SignPT from './SignPT';
import { SignState } from 'middlewares/reduxTookits/signSlice';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { useNavigate } from 'react-router-dom';

const SignCT = (props: typeSignCT): JSX.Element => {
  const navigate = useNavigate();
  const encrypt = new JSEncrypt();

  useEffect(() => {
    props.requestPublicKey();
  }, []);

  useEffect(() => {
    !props.isFetching &&
      props.isSuccess &&
      !props.isFail &&
      props.isSignUp &&
      !props.isSignOut &&
      navigate('/log');

    !props.isFetching &&
      props.isSuccess &&
      !props.isFail &&
      !props.isSignUp &&
      props.isSignOut &&
      navigate('/');
  }, [
    props.isFetching,
    props.isSuccess,
    props.isFail,
    props.isSignUp,
    props.isSignOut
  ]);

  const handleSignUp = (id: string, password: string) => {
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

    props.requestSignUp(ID, encrypted);
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

    props.requestSignOut(ID, encrypted);
  };

  return (
    <SignPT
      loading={props.isFetching}
      onSignUp={handleSignUp}
      onSignOut={handleSignOut}
    />
  );
};

interface typeSignCT extends CommonState, SignState {
  requestPublicKey: () => void;
  requestSignUp: (id: string, password: string) => void;
  requestSignOut: (id: string, password: string) => void;
}

export default SignCT;
