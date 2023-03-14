import React from 'react';

const LogPT = ({ onConsoleLog, onLogIn, onLogOut }: typeLogPT): JSX.Element => {
  return (
    <div>
      <h1 onClick={onConsoleLog}>Hello!</h1>
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
}

export default LogPT;
