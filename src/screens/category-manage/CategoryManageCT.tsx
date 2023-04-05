import React, { useEffect, useState } from 'react';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';
import CategoryManagePT from './CategoryManagePT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';
import { Category } from 'modules/types';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { AuthorityState } from 'middlewares/reduxTookits/authoritySlice';

const CategoryManageCT = (props: typeCategoryManageCT): JSX.Element => {
  const navigate = useNavigate();

  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const pathRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const createBtnRef =
    React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const updateBtnRef =
    React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  const [categories, setCategories] = useState<Array<Category>>([]);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [draggingIdx, setDraggingIdx] = useState<number>(-1);
  const [toggle, setToggle] = useState<boolean>(false);

  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<number | undefined>();
  const [auth, setAuth] = useState<number>(20);
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    if (
      !!!handleGetCookie('atk') ||
      !!!handleGetCookie('rtk') ||
      !props.id ||
      !props.isLoggedIn
    ) {
      navigate('/');
    } else {
      props.requestCategory(props.id);
      props.requestAuthority(props.id);
    }
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

    if (!path) {
      props.handleCodeMessage('EMPTY PATH', 'PATH을 입력해주세요.');
      handleCreateBlur();
      return;
    }

    if (props.id) {
      props.requestCreateCategory(title, path, auth, props.id, priority);
      props.handleCodeMessage('', '');
    } else {
      props.handleCodeMessage('EMPTY USER INFO', '유저 정보 부재');
    }
    handleCreateBlur();
  };

  const handleUpdateCategory = () => {
    props.categories && props.requestUpdateCategory(props.categories);
    handleUpdateBlur();
  };

  const handleCreateBlur = () => {
    titleRef && titleRef.current.blur();
    pathRef && pathRef.current.blur();
    createBtnRef && createBtnRef.current.blur();
  };

  const handleUpdateBlur = () => {
    updateBtnRef && updateBtnRef.current.blur();
  };

  const handleToggle = () => {
    setToggle(!toggle);
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
    setCategories(
      newCategories.map((category: Category, idx: number) => {
        return { ...category, PRIORITY: idx + 1 };
      })
    );
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
      authorities={props.authorities}
      categories={categories}
      isDrag={isDrag}
      toggle={toggle}
      titleRef={titleRef}
      pathRef={pathRef}
      createBtnRef={createBtnRef}
      updateBtnRef={updateBtnRef}
      onToggle={handleToggle}
      onSetTitle={setTitle}
      onSetPath={setPath}
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
    CategoryManageState,
    AuthorityState {
  requestCategory: (id?: string) => void;
  requestCreateCategory: (
    title: string,
    path: string,
    auth: number,
    id?: string,
    priority?: number
  ) => void;
  requestUpdateCategory: (categories: Array<Category>) => void;
  requestAuthority: (id?: string) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default CategoryManageCT;
