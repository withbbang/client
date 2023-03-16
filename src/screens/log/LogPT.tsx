import React from 'react';
import { Loader } from 'components/loader/Loader';

const LogPT = ({
  onConsoleLog,
  onLogIn,
  onLogOut,
  loading
}: typeLogPT): JSX.Element => {
  return (
    <div>
      <Loader loading={loading} />
      <div onClick={onConsoleLog}>Hello!</div>
      <input type="text" id="id" />
      <input type="password" id="password" />
      <button onClick={() => onLogIn('id', 'password')}>로그인</button>
      <button onClick={onLogOut}>로그아웃</button>
    </div>
  );
};

interface typeLogPT {
  onConsoleLog: () => void;
  onLogIn: (id: string, password: string) => void;
  onLogOut: () => void;
  loading: boolean;
}

export default LogPT;
