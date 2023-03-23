import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import React from 'react';

const SignPT = ({
  loading,
  onConsoleLog,
  onSignUp,
  onSignOut
}: typeSignPT): JSX.Element => {
  return (
    <div>
      <Loader loading={loading} />
      <LeftSideBar />
      <h1 onClick={onConsoleLog}>Hello!</h1>
      <input type="text" id="id" />
      <input type="password" id="password" />
      <button onClick={() => onSignUp('id', 'password')}>가입</button>
      <button onClick={() => onSignOut('id', 'password')}>탈퇴</button>
    </div>
  );
};

interface typeSignPT {
  loading: boolean;
  onConsoleLog: () => void;
  onSignUp: (id: string, password: string) => void;
  onSignOut: (id: string, password: string) => void;
}

export default SignPT;
