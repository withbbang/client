import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import LeftSideBarPT from './LeftSideBarPT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';
import { AdminState } from 'middlewares/reduxTookits/adminSlice';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';

const LeftSideBarCT = (props: typeLeftSideBarCT): JSX.Element => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    props.requestVisitCount();
    props.requestPublicKey();
    props.requestCategory();
  }, []);

  useEffect(() => {
    if (props.id && props.auth !== undefined && props.auth > -1) {
    }
  }, [props.id, props.auth]);

  const handleLogOut = (): void => {
    props.id ? props.requestLogOut(props.id) : alert('부적절한 요청입니다.');
  };

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  return (
    <LeftSideBarPT
      loading={props.isFetching}
      total={props.total}
      today={props.today}
      isLoggedIn={props.isLoggedIn}
      onLogOut={handleLogOut}
      id={props.id}
      toggle={toggle}
      onToggle={handleToggle}
      items={props.categories}
    />
  );
};

interface typeLeftSideBarCT
  extends CommonState,
    LogState,
    AdminState,
    CategoryManageState {
  requestPublicKey: () => void;
  requestVisitCount: () => void;
  requestCategory: () => void;
  requestLogIn: (id: string, password: string) => void;
  requestLogOut: (id: string) => void;
}

export default LeftSideBarCT;
