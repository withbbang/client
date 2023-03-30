import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import LeftSideBarPT from './LeftSideBarPT';
import { useNavigate } from 'react-router-dom';

const LeftSideBarCT = (props: typeLeftSideBarCT): JSX.Element => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    props.requestVisitCount();
    props.requestSideBarCategory(props.id);
  }, []);

  const handleLogOut = (): void => {
    props.id ? props.requestLogOut(props.id) : alert('부적절한 요청입니다.');
  };

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  const handleNavigate = (title: string) => {
    navigate(`/${title}`);
  };

  return (
    <LeftSideBarPT
      total={props.total}
      today={props.today}
      isNight={props.isNight}
      isLoggedIn={props.isLoggedIn}
      onLogOut={handleLogOut}
      id={props.id}
      toggle={toggle}
      onToggle={handleToggle}
      onNavigate={handleNavigate}
      items={props.sideBarCategories}
    />
  );
};

interface typeLeftSideBarCT extends CommonState, LogState {
  requestPublicKey: () => void;
  requestVisitCount: () => void;
  requestSideBarCategory: (id?: string) => void;
  requestLogIn: (id: string, password: string) => void;
  requestLogOut: (id: string) => void;
}

export default LeftSideBarCT;
