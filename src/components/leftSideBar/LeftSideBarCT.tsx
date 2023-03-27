import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import LeftSideBarPT from './LeftSideBarPT';
import { useNavigate } from 'react-router-dom';
import { Category } from 'modules/types';

const LeftSideBarCT = (props: typeLeftSideBarCT): JSX.Element => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    props.requestVisitCount();
    props.requestSideBarCategory();
  }, []);

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
      items={props.sideBarCategories}
    />
  );
};

interface typeLeftSideBarCT extends CommonState, LogState {
  requestPublicKey: () => void;
  requestVisitCount: () => void;
  requestSideBarCategory: () => void;
  requestLogIn: (id: string, password: string) => void;
  requestLogOut: (id: string) => void;
}

export default LeftSideBarCT;
