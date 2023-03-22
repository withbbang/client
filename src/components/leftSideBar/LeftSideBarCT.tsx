import React, { useEffect } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import LeftSideBarPT from './LeftSideBarPT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';
import { AdminState } from 'middlewares/reduxTookits/adminSlice';

const LeftSideBarCT = (props: typeLeftSideBarCT): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    !!!handleGetCookie('atk') && !!!handleGetCookie('rtk') && navigate('/');

    props.requestVisitCount();
    props.requestPublicKey();
  }, []);

  const handleLogOut = () => {
    props.id ? props.requestLogOut(props.id) : alert('부적절한 요청입니다.');
  };

  return (
    <LeftSideBarPT
      loading={props.isFetching}
      total={props.total}
      today={props.today}
      isLoggedIn={props.isLoggedIn}
      onLogOut={handleLogOut}
      id={props.id}
    />
  );
};

interface typeLeftSideBarCT extends CommonState, LogState, AdminState {
  requestPublicKey: () => void;
  requestVisitCount: () => void;
  requestLogIn: (id: string, password: string) => void;
  requestLogOut: (id: string) => void;
}

export default LeftSideBarCT;
