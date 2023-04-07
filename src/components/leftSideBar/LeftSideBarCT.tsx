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
  }, []);

  useEffect(() => {
    props.requestSideBarCategory(props.id);
  }, [props.id, props.isLoggedIn, props.isLoggedOut]);

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <LeftSideBarPT
      total={props.total}
      today={props.today}
      isNight={props.isNight}
      isLoggedIn={props.isLoggedIn}
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
}

export default LeftSideBarCT;
