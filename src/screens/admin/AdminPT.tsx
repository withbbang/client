import { Loader } from 'components/loader/Loader';
import React from 'react';

const AdminPT = ({ onLogOut, loading }: typeAdminPT): JSX.Element => {
  return (
    <div>
      <Loader loading={loading} />
      Hello
      <button onClick={onLogOut}>로그아웃</button>
    </div>
  );
};

interface typeAdminPT {
  onLogOut: () => void;
  loading: boolean;
}

export default AdminPT;
