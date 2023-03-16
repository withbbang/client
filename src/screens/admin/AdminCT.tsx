import { AdminState } from 'middlewares/reduxTookits/adminSlice';
import { handleGetCookie } from 'modules/cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPT from './AdminPT';

const AdminCT = (props: typeAdminCT): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    !!!handleGetCookie('atk') && !!!handleGetCookie('rtk') && navigate('/');

    props.requestAdminInfo();
  }, []);

  const handleLogOut = () => {
    props.requestLogOut('ADMINISTER');
  };

  return <AdminPT loading={props.isFetching} onLogOut={handleLogOut} />;
};

interface typeAdminCT extends AdminState {
  requestAdminInfo: () => void;
  requestLogOut: (id: string) => void;
}

export default AdminCT;
