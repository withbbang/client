import React, { useEffect, useState } from 'react';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';
import CategoryManagePT from './CategoryManagePT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';
import { Category } from 'modules/types';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { AuthorityState } from 'middlewares/reduxTookits/authoritySlice';
import styles from 'components/functionPopup/FunctionPopup.module.scss';

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
  const [isConfirmPopupActive, setIsConfirmPopupActive] =
    useState<boolean>(false);
  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [confirmType, setConfirmType] = useState<string | undefined>();
  const [isFunctionPopupActive, setIsFunctionPopupActive] =
    useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const [isModifiedOrder, setIsModifiedOrder] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [path, setPath] = useState<string>('');
  const [auth, setAuth] = useState<number>(20);

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
    if (props.categories !== undefined) {
      setCategories(props.categories);
      setIsModifiedOrder(false);
    }
  }, [props.categories]);

  const handleBlur = () => {
    titleRef && titleRef.current.blur();
    pathRef && pathRef.current.blur();
    createBtnRef && createBtnRef.current.blur();
  };

  const handleUpdateBlur = () => {
    updateBtnRef && updateBtnRef.current.blur();
  };

  const handleConfirmBtn = (type?: string) => {
    setConfirmType(type);
    setConfirmMessage('');
    setIsConfirmPopupActive(!isConfirmPopupActive);
    switch (type) {
      case 'create':
        if (props.id) {
          props.requestCreateCategory(title, path, auth, props.id);
          props.handleCodeMessage('', '');
        } else {
          props.handleCodeMessage('EMPTY USER INFO', '유저 정보 부재');
        }
        break;
      case 'singleUpdate':
        if (props.id) {
          props.requestSingleUpdateCategory(
            categories[selectedIdx].IS_DELETED,
            title,
            props.id,
            path,
            categories[selectedIdx].ID,
            auth
          );
          props.handleCodeMessage('', '');
        } else {
          props.handleCodeMessage('EMPTY USER INFO', '유저 정보 부재');
        }
        handleModifyPopup();
        break;
      case 'multiUpdate':
        if (props.id) {
          props.requestMultiUpdateCategory(categories, props.id);
          props.handleCodeMessage('', '');
        } else {
          props.handleCodeMessage('EMPTY USER INFO', '유저 정보 부재');
        }
        setIsModifiedOrder(false);
        break;
      case 'deleteRestore':
        if (props.id) {
          props.requestDeleteRestoreCategory(
            categories[selectedIdx].IS_DELETED,
            categories[selectedIdx].ID,
            props.id
          );
          props.handleCodeMessage('', '');
        } else {
          props.handleCodeMessage('EMPTY USER INFO', '유저 정보 부재');
        }
        handleDeleteRestore();
        break;
      default:
        break;
    }
  };

  const handleConfirmPopup = (type?: string, idx?: number) => {
    setConfirmType(type);
    switch (type) {
      case 'create':
        setConfirmMessage('생성하시겠습니까?');
        setIsConfirmPopupActive(!isConfirmPopupActive);
        break;
      case 'singleUpdate':
      case 'multiUpdate':
        setConfirmMessage('수정하시겠습니까?');
        setIsConfirmPopupActive(!isConfirmPopupActive);
        break;
      case 'deleteRestore':
        idx !== undefined && idx > -1 && categories[idx].IS_DELETED === 'Y'
          ? setConfirmMessage('복원하시겠습니까?')
          : setConfirmMessage('삭제하시겠습니까?');
        setIsConfirmPopupActive(!isConfirmPopupActive);
        break;
      default:
        break;
    }
  };

  const handleCreateCategory = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    e?.preventDefault();

    if (e !== undefined && e.key !== 'Enter') {
      return;
    }

    if (!title) {
      props.handleCodeMessage('EMPTY TITLE', 'TITLE을 입력해주세요.');
      handleBlur();
      return;
    }

    if (!path) {
      props.handleCodeMessage('EMPTY PATH', 'PATH을 입력해주세요.');
      handleBlur();
      return;
    }

    handleConfirmPopup('create');
    handleBlur();
  };

  const handleSingleUpdateCategory = (
    e?: React.KeyboardEvent<HTMLInputElement>
  ) => {
    e?.preventDefault();

    if (e !== undefined && e.key !== 'Enter') {
      return;
    }

    if (!title) {
      props.handleCodeMessage('EMPTY TITLE', 'TITLE을 입력해주세요.');
      handleBlur();
      return;
    }

    if (!path) {
      props.handleCodeMessage('EMPTY PATH', 'PATH을 입력해주세요.');
      handleBlur();
      return;
    }

    //TODO: 객체 비교 공부하기
    const originCategory = props.categories && props.categories[selectedIdx];
    const copiedCategory = {
      ...categories[selectedIdx],
      TITLE: title,
      PATH: path,
      AUTH: auth
    };
    if (JSON.stringify(originCategory) === JSON.stringify(copiedCategory)) {
      props.handleCodeMessage('SAME INPUTS', '입력값이 동일합니다.');
      handleBlur();
      return;
    }

    handleConfirmPopup('singleUpdate');
    handleBlur();
  };

  const handleMultiUpdateCategory = () => {
    if (!isModifiedOrder) {
      props.handleCodeMessage(
        'NOT MODIFIED ORDER',
        '순서가 변경되지 않았습니다.'
      );
      return;
    }

    handleConfirmPopup('multiUpdate');
  };

  const handleSetToggle = () => {
    if (toggle) {
      handleConfirmPopup();
      setTimeout(() => {
        setTitle('');
        setPath('');
      }, 500);
    }

    setToggle(!toggle);
  };

  const handleModifyPopup = (idx?: number) => {
    if (idx !== undefined && idx > -1) {
      // useState의 set함수는 기본적으로 비동기이다.
      // 따라서 setSelectedIdx(selectedIdx) 이후
      // 바로 해당 selectedIdx에 있는 값을 가져올 수 없다.
      const { TITLE, PATH, AUTH } = categories[idx];
      setSelectedIdx(idx);
      setTitle(TITLE);
      setPath(PATH);
      setAuth(AUTH);
    } else {
      setSelectedIdx(-1);
      setTitle('');
      setPath('');
      setAuth(-1);
    }

    setIsFunctionPopupActive(!isFunctionPopupActive);
  };

  const handleDeleteRestore = (idx?: number) => {
    if (idx !== undefined && idx > -1) {
      setSelectedIdx(idx);
      handleConfirmPopup('deleteRestore', idx);
    } else {
      setSelectedIdx(-1);
      handleConfirmPopup();
    }
  };

  const handleCheckOrder = () => {
    if (props.categories) {
      setIsModifiedOrder(
        props.categories.some(
          (category: Category, idx: number) =>
            category.ID !== categories[idx].ID
        )
      );
    } else {
      setIsModifiedOrder(false);
    }
  };

  const handleRevertOrder = () => {
    if (props.categories && isModifiedOrder) {
      setCategories(props.categories);
      setIsModifiedOrder(false);
    }
  };

  const handleChildren =
    selectedIdx > -1 ? (
      <div className={styles.categoryBox}>
        <input
          placeholder="TITLE"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyUp={(e) => handleSingleUpdateCategory(e)}
          ref={titleRef}
        />
        <input
          placeholder="PATH"
          type="text"
          id="path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
          onKeyUp={(e) => handleSingleUpdateCategory(e)}
          ref={pathRef}
        />
        {Array.isArray(props.authorities) && props.authorities.length > 0 && (
          <select
            defaultValue={categories[selectedIdx].AUTH}
            onChange={(e) => setAuth(+e.target.value)}
          >
            {props.authorities.map((authority, idx) => (
              <option key={idx} value={authority.AUTH}>
                {authority.DESCRIPTION}
              </option>
            ))}
          </select>
        )}
        <button onClick={() => handleSingleUpdateCategory()} ref={createBtnRef}>
          카테고리 수정
        </button>
      </div>
    ) : null;

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    setIsDrag(true);
    setDraggingIdx(idx);
    e.currentTarget.style.opacity = '0.4';
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>, idx: number) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDrag(false);
    setDraggingIdx(-1);
    e.currentTarget.style.opacity = '';
    handleCheckOrder();
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

  const handleDrag = (e: React.DragEvent<HTMLDivElement>, idx: number) => {};

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
      title={title}
      path={path}
      toggle={toggle}
      isConfirmPopupActive={isConfirmPopupActive}
      isFunctionPopupActive={isFunctionPopupActive}
      confirmMessage={confirmMessage}
      confirmType={confirmType}
      isModifiedOrder={isModifiedOrder}
      titleRef={titleRef}
      pathRef={pathRef}
      createBtnRef={createBtnRef}
      updateBtnRef={updateBtnRef}
      children={handleChildren}
      onSetToggle={handleSetToggle}
      onSetTitle={setTitle}
      onSetPath={setPath}
      onRevertOrder={handleRevertOrder}
      onConfirmBtn={handleConfirmBtn}
      onModifyPopup={handleModifyPopup}
      onDeleteRestore={handleDeleteRestore}
      onCreateCategory={handleCreateCategory}
      onMultiUpdateCategory={handleMultiUpdateCategory}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
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
  requestSingleUpdateCategory: (
    isDeleted: string,
    title: string,
    id: string,
    path: string,
    categoryId: number,
    auth: number,
    priority?: number
  ) => void;
  requestMultiUpdateCategory: (
    categories: Array<Category>,
    id?: string
  ) => void;
  requestDeleteRestoreCategory: (
    isDeleted: string,
    categoryId: number,
    id?: string
  ) => void;
  requestAuthority: (id?: string) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default CategoryManageCT;
