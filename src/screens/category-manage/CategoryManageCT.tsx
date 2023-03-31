import React, { useEffect, useState } from 'react';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';
import CategoryManagePT from './CategoryManagePT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';
import { Category } from 'modules/types';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';

const CategoryManageCT = (props: typeCategoryManageCT): JSX.Element => {
  const navigate = useNavigate();
  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const createBtnRef =
    React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const updateBtnRef =
    React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    !!!handleGetCookie('atk') ||
    !!!handleGetCookie('rtk') ||
    !props.id ||
    !props.isLoggedIn
      ? navigate('/')
      : props.requestCategory();
  }, []);

  useEffect(() => {
    props.categories !== undefined && setCategories(props.categories);
  }, [props.categories]);

  const handleCreateCategory = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    e?.preventDefault();

    if (e !== undefined && e.key !== 'Enter') {
      return;
    }

    if (!title) {
      props.handleCodeMessage('EMPTY TITLE', 'TITLE을 입력해주세요.');
      handleCreateBlur();
      return;
    }

    props.requestCreateCategory(title);
    props.handleCodeMessage('', '');
    handleCreateBlur();
  };

  const handleUpdateCategory = () => {
    props.categories && props.requestUpdateCategory(props.categories);
    handleUpdateBlur();
  };

  const handleCreateBlur = () => {
    titleRef && titleRef.current.blur();
    createBtnRef && createBtnRef.current.blur();
  };

  const handleUpdateBlur = () => {
    updateBtnRef && updateBtnRef.current.blur();
  };

  return (
    <CategoryManagePT
      loading={props.isFetching}
      isNight={props.isNight}
      categories={categories}
      titleRef={titleRef}
      createBtnRef={createBtnRef}
      updateBtnRef={updateBtnRef}
      onSetTitle={setTitle}
      onCreateCategory={handleCreateCategory}
      onUpdateCategory={handleUpdateCategory}
    />
  );
};

interface typeCategoryManageCT
  extends CommonState,
    LogState,
    CategoryManageState {
  requestCategory: () => void;
  requestCreateCategory: (title: string, priority?: number) => void;
  requestUpdateCategory: (categories: Array<Category>) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default CategoryManageCT;
