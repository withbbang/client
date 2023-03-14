import React from 'react';

const SignPT = ({ onConsoleLog, onSignIn }: typeSignPT): JSX.Element => {
  return (
    <div>
      <h1 onClick={onConsoleLog}>Hello!</h1>
      <input type="text" id="id" />
      <input type="password" id="password" />
      <button onClick={() => onSignIn('id', 'password')}>로그인</button>
    </div>
  );
};

interface typeSignPT {
  onConsoleLog: () => void;
  onSignIn: (id: string, password: string) => void;
}

export default SignPT;
