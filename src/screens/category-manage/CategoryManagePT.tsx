import React from 'react';
import { Loader } from 'components/loader/Loader';
import { Category } from 'modules/types';
import LeftSideBar from 'components/leftSideBar';
import Header from 'components/header/Header';
import Popup from 'components/popup';
import styles from './CategoryManage.module.scss';
import Footer from 'components/footer/Footer';
import Float from 'components/float';

const CategoryManagePT = ({
  loading,
  isNight,
  categories,
  titleRef,
  createBtnRef,
  updateBtnRef,
  onSetTitle,
  onCreateCategory,
  onUpdateCategory,
  onDragStart,
  onDrag,
  onDragEnd,
  onDragOver,
  onDragEnter,
  onDragLeave
}: typeCategoryManagePT): JSX.Element => (
  <>
    <Loader loading={loading} />
    <Header />
    <LeftSideBar />
    <Popup />
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
    >
      {Array.isArray(categories) && categories.length > 0 ? (
        <div className={styles.innerWrap}>
          {categories.map((category: any, idx: number) => (
            <Float
              key={idx}
              title={category.TITLE}
              content={category.CONTENT}
              path={category.PATH}
              description={category.DESCRIPTION}
              onDragStart={onDragStart}
              onDrag={onDrag}
              onDragEnd={onDragEnd}
              onDragOver={onDragOver}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
            />
          ))}
        </div>
      ) : (
        <div className={[styles.innerWrap, styles.nothing].join(' ')}>
          컨텐츠가 없습니다~!
        </div>
      )}
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
  loading: boolean;
  isNight?: boolean;
  categories?: Array<Category>;
  titleRef: React.MutableRefObject<HTMLInputElement>;
  createBtnRef: React.MutableRefObject<HTMLButtonElement>;
  updateBtnRef: React.MutableRefObject<HTMLButtonElement>;
  onSetTitle: React.Dispatch<React.SetStateAction<string>>;
  onCreateCategory: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
  onUpdateCategory: () => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
}

export default CategoryManagePT;
