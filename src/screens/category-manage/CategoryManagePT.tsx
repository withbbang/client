import React from 'react';
import { Loader } from 'components/loader/Loader';
import { Authority, Category } from 'modules/types';
import LeftSideBar from 'components/leftSideBar';
import Header from 'components/header/Header';
import ErrorPopup from 'components/errorPopup';
import styles from './CategoryManage.module.scss';
import Footer from 'components/footer/Footer';
import Float from 'components/float';
import SVG from 'modules/SVG';
import ConfirmPopup from 'components/confirmPopup/ConfirmPopup';
import FunctionPopup from 'components/functionPopup/FunctionPopup';

const CategoryManagePT = ({
  loading,
  isNight,
  authorities,
  categories,
  isDrag,
  title,
  path,
  toggle,
  isConfirmPopupActive,
  isFunctionPopupActive,
  confirmMessage,
  confirmType,
  isModifiedOrder,
  titleRef,
  pathRef,
  createBtnRef,
  updateBtnRef,
  children,
  onSetToggle,
  onSetTitle,
  onSetPath,
  onSetIsConfirmPopupActive,
  onRevertOrder,
  onConfirmBtn,
  onModifyPopup,
  onSingleUpdateCategory,
  onCreateCategory,
  onMultiUpdateCategory,
  onDragStart,
  onDragEnd,
  onDragOver
}: typeCategoryManagePT): JSX.Element => (
  <>
    <Loader loading={loading} />
    <Header />
    <LeftSideBar />
    <ErrorPopup />
    <ConfirmPopup
      isActive={isConfirmPopupActive}
      confirmMessage={confirmMessage}
      confirmType={confirmType}
      onConfirm={onConfirmBtn}
    />
    <FunctionPopup
      isActive={isFunctionPopupActive}
      children={children}
      onClose={onModifyPopup}
    />
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
    >
      <div className={styles.innerWrap}>
        <div className={styles.count}>
          <span>
            {Array.isArray(categories) && categories.length} categories
          </span>
          <div>
            <button disabled={!isModifiedOrder} onClick={onMultiUpdateCategory}>
              순서저장
            </button>
            <button disabled={!isModifiedOrder} onClick={onRevertOrder}>
              되돌리기
            </button>
          </div>
        </div>
        <div
          className={
            Array.isArray(categories) && categories.length > 0
              ? styles.contents
              : [styles.contents, styles.noContents].join(' ')
          }
        >
          {Array.isArray(categories) && categories.length > 0
            ? categories.map((category: any, idx: number) => (
                <Float
                  key={idx}
                  idx={idx}
                  isDrag={isDrag}
                  title={category.TITLE}
                  content={category.CONTENT}
                  path={category.PATH}
                  description={category.DESCRIPTION}
                  onModifyPopup={onModifyPopup}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  onDragOver={onDragOver}
                />
              ))
            : '컨텐츠가 없습니다~!'}
        </div>
      </div>
      <div
        className={
          toggle
            ? isNight
              ? [styles.createBox, styles.night].join(' ')
              : styles.createBox
            : isNight
            ? [styles.createBox, styles.off, styles.night].join(' ')
            : [styles.createBox, styles.off].join(' ')
        }
      >
        <div className={styles.toggle} onClick={onSetToggle}>
          <SVG type="doubleArrow" width="30px" height="30px" fill="#fff" />
        </div>
        <div className={styles.innerBox}>
          <input
            placeholder="TITLE"
            type="text"
            id="title"
            value={title}
            onChange={(e) => onSetTitle(e.target.value)}
            onKeyUp={(e) => onCreateCategory(e)}
            ref={titleRef}
          />
          <input
            placeholder="PATH"
            type="text"
            id="path"
            value={path}
            onChange={(e) => onSetPath(e.target.value)}
            onKeyUp={(e) => onCreateCategory(e)}
            ref={pathRef}
          />
          {Array.isArray(authorities) && authorities.length > 0 && (
            <select>
              {authorities.map((authority, idx) => (
                <option key={idx} value={authority.AUTH}>
                  {authority.DESCRIPTION}
                </option>
              ))}
            </select>
          )}
          <button onClick={() => onCreateCategory()} ref={createBtnRef}>
            카테고리 추가
          </button>
        </div>
      </div>
      {/* <input
            type="text"
            id="title"
            onChange={(e) => onSetTitle(e.target.value)}
            onKeyUp={(e) => onCreateCategory(e)}
            ref={titleRef}
          />
          <button onClick={() => onCreateCategory()} ref={createBtnRef}>
            카테고리 추가
          </button>
          <button onClick={() => onUpdateCategory()} ref={updateBtnRef}>
            카테고리 갱신
          </button> */}
    </div>
    <Footer />
  </>
);

interface typeCategoryManagePT {
  loading?: boolean;
  isNight?: boolean;
  authorities?: Array<Authority>;
  categories?: Array<Category>;
  isDrag: boolean;
  title: string;
  path: string;
  toggle: boolean;
  isConfirmPopupActive: boolean;
  isFunctionPopupActive: boolean;
  confirmMessage: string;
  confirmType?: string;
  isModifiedOrder: boolean;
  titleRef: React.MutableRefObject<HTMLInputElement>;
  pathRef: React.MutableRefObject<HTMLInputElement>;
  createBtnRef: React.MutableRefObject<HTMLButtonElement>;
  updateBtnRef: React.MutableRefObject<HTMLButtonElement>;
  children: JSX.Element | null;
  onSetToggle: () => void;
  onSetTitle: React.Dispatch<React.SetStateAction<string>>;
  onSetPath: React.Dispatch<React.SetStateAction<string>>;
  onSetIsConfirmPopupActive: React.Dispatch<React.SetStateAction<boolean>>;
  onRevertOrder: () => void;
  onConfirmBtn: (type?: string) => void;
  onModifyPopup: (idx?: number) => void;
  onSingleUpdateCategory: () => void;
  onCreateCategory: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
  onMultiUpdateCategory: () => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
}

export default CategoryManagePT;
