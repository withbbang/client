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
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [draggingIdx, setDraggingIdx] = useState<number>(-1);

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

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    setIsDrag(true);
    setDraggingIdx(idx);
    e.currentTarget.style.opacity = '0.4';
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>, idx: number) => {};

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDrag(false);
    setDraggingIdx(-1);
    e.currentTarget.style.opacity = '';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    e.stopPropagation();
    e.preventDefault();
    const newCategories = [...categories];
    const draggedItem = newCategories[draggingIdx];
    newCategories.splice(draggingIdx, 1);
    newCategories.splice(idx, 0, draggedItem);
    setCategories(newCategories);
    setDraggingIdx(idx);
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    idx: number
  ) => {};

  const handleDragLeave = (
    e: React.DragEvent<HTMLDivElement>,
    idx: number
  ) => {};

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, idx: number) => {};

  return (
    <CategoryManagePT
      loading={props.isFetching}
      isNight={props.isNight}
      categories={categories}
      isDrag={isDrag}
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
      onDrop={handleDrop}
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
