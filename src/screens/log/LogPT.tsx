import { Loader } from 'components/loader/Loader';
import React from 'react';

const LogPT = ({
  onConsoleLog,
  onLogIn,
  onLogOut,
  loading
}: typeLogPT): JSX.Element => {
  return <Loader />;
};

interface typeLogPT {
  onConsoleLog: () => void;
  onLogIn: (id: string, password: string) => void;
  onLogOut: () => void;
  loading: boolean;
}

export default LogPT;
