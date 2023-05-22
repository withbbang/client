import React from 'react';
import LeftSideBar from 'components/leftSideBar';
import Loader from 'components/loader/Loader';

const SignPT = ({ loading, onSignUp, onSignOut }: typeSignPT): JSX.Element => {
  return (
    <div>
      <Loader />
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
