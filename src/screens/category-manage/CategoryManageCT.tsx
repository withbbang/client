import React, { useEffect } from 'react';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';
import CategoryManagePT from './CategoryManagePT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';

const CategoryManageCT = (props: typeCategoryManageCT): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    !!!handleGetCookie('atk') && !!!handleGetCookie('rtk') && navigate('/');

    props.requestCategory();
  }, []);

  return <CategoryManagePT loading={props.isFetching} />;
};

interface typeCategoryManageCT extends CategoryManageState {
  requestCategory: () => void;
  requestCreateCategory: (title: string, priority?: number) => void;
  requestUpdateCategory: (title: string, priority?: number) => void;
}

export default CategoryManageCT;
