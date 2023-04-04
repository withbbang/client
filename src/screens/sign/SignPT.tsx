import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import React from 'react';

const SignPT = ({ loading, onSignUp, onSignOut }: typeSignPT): JSX.Element => {
  return (
    <div>
      <Loader loading={loading} />
      <LeftSideBar />
      <input type="text" id="id" />
      <input type="password" id="password" />
      <button onClick={() => onSignUp('id', 'password')}>가입</button>
      <button onClick={() => onSignOut('id', 'password')}>탈퇴</button>
    </div>
  );
};

interface typeSignPT {
  loading?: boolean;
  onSignUp: (id: string, password: string) => void;
  onSignOut: (id: string, password: string) => void;
}

export default SignPT;
