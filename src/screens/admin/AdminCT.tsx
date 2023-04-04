import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { handleGetCookie } from 'modules/cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPT from './AdminPT';

const AdminCT = (props: typeAdminCT): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    !props.isLoggedIn &&
      props.isLoggedOut &&
      !!!handleGetCookie('atk') &&
      !!!handleGetCookie('rtk') &&
      navigate('/');
  }, [props.isLoggedIn, props.isLoggedOut]);

  const handleLogOut = () => {
    props.id ? props.requestLogOut(props.id) : alert('부적절한 요청입니다.');
  };

  return (
    <AdminPT
      loading={props.isFetching}
      onLogOut={handleLogOut}
      id={props.id}
      auth={props.auth}
    />
  );
};

interface typeAdminCT extends CommonState, LogState {
  requestLogOut: (id: string) => void;
}

export default AdminCT;
