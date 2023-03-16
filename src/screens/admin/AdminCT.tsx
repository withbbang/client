import { AdminState } from 'middlewares/reduxTookits/adminSlice';
import { handleGetCookie } from 'modules/cookie';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPT from './AdminPT';

const AdminCT = (props: typeAdminCT): JSX.Element => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [auth, setAuth] = useState(30);

  useEffect(() => {
    !!!handleGetCookie('atk') && !!!handleGetCookie('rtk') && navigate('/');

    props.requestAdminInfo();
  }, []);

  useEffect(() => {
    if (props.id && props.auth !== undefined && props.auth > -1) {
      setId(props.id);
      setAuth(props.auth);
    }
  }, [props.id, props.auth]);

  const handleLogOut = () => {
    props.requestLogOut('ADMINISTER');
  };

  return (
    <AdminPT
      loading={props.isFetching}
      onLogOut={handleLogOut}
      id={id}
      auth={auth}
    />
  );
};

interface typeAdminCT extends AdminState {
  requestAdminInfo: () => void;
  requestLogOut: (id: string) => void;
}

export default AdminCT;
