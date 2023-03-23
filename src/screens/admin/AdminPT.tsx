import React from 'react';
import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';

const AdminPT = ({ onLogOut, id, auth, loading }: typeAdminPT): JSX.Element => {
  return (
    <div>
      <Loader loading={loading} />
      <LeftSideBar />
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
  id?: string;
  auth?: number;
  loading: boolean;
}

export default AdminPT;
