import React from 'react';
import { Loader } from 'components/loader/Loader';
import { Authority, Category } from 'modules/types';
import LeftSideBar from 'components/leftSideBar';
import Header from 'components/header/Header';
import Popup from 'components/popup';
import styles from './CategoryManage.module.scss';
import Footer from 'components/footer/Footer';
import Float from 'components/float';
import SVG from 'modules/SVG';

const CategoryManagePT = ({
  loading,
  isNight,
  authorities,
  categories,
  isDrag,
  toggle,
  titleRef,
  pathRef,
  createBtnRef,
  updateBtnRef,
  onToggle,
  onSetTitle,
  onSetPath,
  onCreateCategory,
  onUpdateCategory,
  onDragStart,
  onDrag,
  onDragEnd,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop
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
              idx={idx}
              isDrag={isDrag}
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
              onDrop={onDrop}
            />
          ))}
        </div>
      ) : (
        <div className={[styles.innerWrap, styles.nothing].join(' ')}>
          컨텐츠가 없습니다~!
        </div>
      )}
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
        <div className={styles.toggle} onClick={onToggle}>
          <SVG type="doubleArrow" width="30px" height="30px" fill="#fff" />
        </div>
        <div className={styles.innerBox}>
          <input
            placeholder="TITLE"
            type="text"
            id="title"
            onChange={(e) => onSetTitle(e.target.value)}
            onKeyUp={(e) => onCreateCategory(e)}
            ref={titleRef}
          />
          <input
            placeholder="PATH"
            type="text"
            id="path"
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
  toggle: boolean;
  titleRef: React.MutableRefObject<HTMLInputElement>;
  pathRef: React.MutableRefObject<HTMLInputElement>;
  createBtnRef: React.MutableRefObject<HTMLButtonElement>;
  updateBtnRef: React.MutableRefObject<HTMLButtonElement>;
  onToggle: () => void;
  onSetTitle: React.Dispatch<React.SetStateAction<string>>;
  onSetPath: React.Dispatch<React.SetStateAction<string>>;
  onCreateCategory: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
  onUpdateCategory: () => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragEnter: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
}

export default CategoryManagePT;
