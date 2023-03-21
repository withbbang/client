import React, { useEffect } from 'react';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';
import CategoryManagePT from './CategoryManagePT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';
import { Category } from 'modules/types';

const CategoryManageCT = (props: typeCategoryManageCT): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    !!!handleGetCookie('atk') && !!!handleGetCookie('rtk') && navigate('/');

    props.requestCategory();
  }, []);

  const handleCreateCategory = (id: string, priority?: number) => {
    const title = (document.getElementById(id) as HTMLInputElement).value;

    if (!title) {
      alert('제목을 입력해주세욥!');
      return;
    }

    props.requestCreateCategory(title);
  };

  const handleUpdateCategory = () => {
    props.requestUpdateCategory(props.categories);
  };

  return (
    <CategoryManagePT
      loading={props.isFetching}
      categories={props.categories}
      onCreateCategory={handleCreateCategory}
      onUpdateCategory={handleUpdateCategory}
    />
  );
};

interface typeCategoryManageCT extends CategoryManageState {
  requestCategory: () => void;
  requestCreateCategory: (title: string, priority?: number) => void;
  requestUpdateCategory: (categories: Array<Category>) => void;
}

export default CategoryManageCT;
