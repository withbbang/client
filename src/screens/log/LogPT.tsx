import React from 'react';
import { Loader } from 'components/loader/Loader';
import LeftSideBar from 'components/leftSideBar';

const LogPT = ({
  onLogIn,
  onLogOut,
  loading,
  onSetId,
  onSetPassword
}: typeLogPT): JSX.Element => {
  return (
    <div>
      <Loader loading={loading} />
      <LeftSideBar />
      <input
        type="text"
        id="id"
        onChange={(e) => onSetId(e.target.value)}
        onKeyUp={(e) => onLogIn(e)}
      />
      <input
        type="password"
        id="password"
        onChange={(e) => onSetPassword(e.target.value)}
        onKeyUp={(e) => onLogIn(e)}
      />
      <button onClick={() => onLogIn()}>로그인</button>
      <button onClick={onLogOut}>로그아웃</button>
    </div>
  );
};

interface typeLogPT {
  onLogIn: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
  onLogOut: () => void;
  loading: boolean;
  onSetId: React.Dispatch<React.SetStateAction<string>>;
  onSetPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default LogPT;
