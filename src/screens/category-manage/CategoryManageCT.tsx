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
  const [tempCategories, setTempCategories] = useState<Array<Category>>([]);
  const [title, setTitle] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const tempArr = [
    { ID: 1, TITLE: 'title_1', PRIORITY: 1, PATH: 'paht_1' },
    { ID: 2, TITLE: 'title_2', PRIORITY: 2, PATH: 'paht_2' },
    { ID: 3, TITLE: 'title_3', PRIORITY: 3, PATH: 'paht_3' },
    { ID: 4, TITLE: 'title_4', PRIORITY: 4, PATH: 'paht_4' },
    { ID: 5, TITLE: 'title_5', PRIORITY: 5, PATH: 'paht_5' },
    { ID: 6, TITLE: 'title_6', PRIORITY: 6, PATH: 'paht_6' },
    { ID: 7, TITLE: 'title_7', PRIORITY: 7, PATH: 'paht_7' },
    { ID: 8, TITLE: 'title_8', PRIORITY: 8, PATH: 'paht_8' },
    { ID: 9, TITLE: 'title_9', PRIORITY: 9, PATH: 'paht_9' },
    { ID: 10, TITLE: 'title_10', PRIORITY: 10, PATH: 'paht_10' },
    { ID: 11, TITLE: 'title_11', PRIORITY: 11, PATH: 'paht_11' },
    { ID: 12, TITLE: 'title_12', PRIORITY: 12, PATH: 'paht_12' },
    { ID: 13, TITLE: 'title_13', PRIORITY: 13, PATH: 'paht_13' },
    { ID: 14, TITLE: 'title_14', PRIORITY: 14, PATH: 'paht_14' }
  ];

  useEffect(() => {
    !!!handleGetCookie('atk') ||
    !!!handleGetCookie('rtk') ||
    !props.id ||
    !props.isLoggedIn
      ? navigate('/')
      : props.requestCategory();

    setCategories(tempArr);
  }, []);

  // useEffect(() => {
  //   props.categories !== undefined && setCategories(props.categories);
  // }, [props.categories]);

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

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('dragStart');
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('drag');
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('dragEnd');
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('dragOver');
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('dragEnter');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('dragLeave');
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
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
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
