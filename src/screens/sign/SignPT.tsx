import React from 'react';

const SignPT = ({
  onConsoleLog,
  onSignUp,
  onSignOut
}: typeSignPT): JSX.Element => {
  return (
    <div>
      <h1 onClick={onConsoleLog}>Hello!</h1>
      <input type="text" id="id" />
      <input type="password" id="password" />
      <button onClick={() => onSignUp('id', 'password')}>가입</button>
      <button onClick={() => onSignOut('id', 'password')}>탈퇴</button>
    </div>
  );
};

interface typeSignPT {
  onConsoleLog: () => void;
  onSignUp: (id: string, password: string) => void;
  onSignOut: (id: string, password: string) => void;
}

export default SignPT;
