import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JSEncrypt } from 'jsencrypt';
import LogPT from './LogPT';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { handleGetCookie } from 'modules/cookie';

const LogCT = (props: typeLogCT): JSX.Element => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const encrypt = new JSEncrypt();

  useEffect(() => {
    props.isLoggedIn &&
      !props.isLoggedOut &&
      !!handleGetCookie('atk') &&
      !!handleGetCookie('rtk') &&
      navigate('/');

    props.requestPublicKey();
  }, []);

  useEffect(() => {
    props.isLoggedIn &&
      !props.isLoggedOut &&
      !!handleGetCookie('atk') &&
      !!handleGetCookie('rtk') &&
      navigate('/');
  }, [props.isLoggedIn, props.isLoggedOut]);

  const handleLogIn = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (e !== undefined && e.key !== 'Enter') {
      return;
    }

    if (!id) {
      alert('ID를 입력해주세욥!!!');
      return;
    }

    if (!password) {
      alert('비밀번호를 입력해주세욥!!!');
      return;
    }

    // 공개키값 세팅은 최초 1회만 하는게 아니라 암호화를 진행 할 때마다 해줘야함.
    props.publicKey && encrypt.setPublicKey(props.publicKey);

    let encrypted: string | boolean = '';
    try {
      encrypted = encrypt.encrypt(password);
    } catch (e) {
      console.error('암호화 에러');
      return;
    }

    if (encrypted === false) {
      console.error('암호화 에러');
      return;
    }

    props.requestLogIn(id, encrypted);
  };

  const handleLogOut = () => {
    props.id ? props.requestLogOut(props.id) : alert('부적절한 요청입니다.');
  };

  return (
    <LogPT
      onLogIn={handleLogIn}
      onLogOut={handleLogOut}
      loading={props.isFetching}
      onSetId={setId}
      onSetPassword={setPassword}
    />
  );
};

interface typeLogCT extends CommonState, LogState {
  requestPublicKey: () => void;
  requestLogIn: (id: string, password: string) => void;
  requestLogOut: (id: string) => void;
}

export default LogCT;
