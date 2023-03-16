import { Loader } from 'components/loader/Loader';
import React from 'react';

const AdminPT = ({ onLogOut, id, auth, loading }: typeAdminPT): JSX.Element => {
  return (
    <div>
      <Loader loading={loading} />
      {id}
      <br />
      {auth}
      <br />
      <button onClick={onLogOut}>로그아웃</button>
    </div>
  );
};

interface typeAdminPT {
  onLogOut: () => void;
  id: string;
  auth: number;
  loading: boolean;
}

export default AdminPT;
