import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import LeftSideBarPT from './LeftSideBarPT';
import { useNavigate } from 'react-router-dom';
import { Category } from 'modules/types';

const LeftSideBarCT = (props: typeLeftSideBarCT): JSX.Element => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [categories, setCategories] = useState<Array<Category> | undefined>([]);

  useEffect(() => {
    props.requestVisitCount();
  }, []);

  useEffect(() => {
    props.requestSideBarCategory(props.id);
  }, [props.id]);

  useEffect(() => {
    setCategories(props.sideBarCategories);
  }, [props.sideBarCategories]);

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
      items={categories}
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
