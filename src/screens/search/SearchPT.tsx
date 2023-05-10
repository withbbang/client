import React from 'react';
import styles from './Search.module.scss';
import { Loader } from 'components/loader/Loader';
import Header from 'components/header/Header';
import LeftSideBar from 'components/leftSideBar';
import ErrorPopup from 'components/errorPopup';
import Footer from 'components/footer/Footer';
import { Content } from 'modules/types';
import Post from 'components/post/Post';

const SearchPT = ({
  loading,
  isNight,
  snippet,
  didSearch,
  searchContents,
  snippetRef,
  onSetSnippet,
  onSearchContents
}: typeSearchPT): JSX.Element => {
  return (
    <>
      <Loader loading={loading} />
      <Header />
      <LeftSideBar />
      <ErrorPopup />
      <div
        className={
          isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap
        }
      >
        <div className={styles.innerWrap}>
          <div className={styles.option}>
            <input
              placeholder="검색어를 입력하세요"
              type="text"
              id="snippet"
              value={snippet}
              onChange={(e) => onSetSnippet(e.target.value)}
              onKeyUp={(e) => onSearchContents(e)}
              ref={snippetRef}
            />
            {didSearch && (
              <span>
                {Array.isArray(searchContents) && searchContents.length > 0
                  ? '총 ' + searchContents.length + '개의 포스트를 찾았습니다.'
                  : '검색 결과가 없습니다.'}
              </span>
            )}
          </div>
          {didSearch
            ? Array.isArray(searchContents) &&
              searchContents.length > 0 &&
              searchContents.map((content: any, idx: number) => (
                <Post
                  key={idx}
                  idx={idx}
                  id={content.ID}
                  title={content.TITLE}
                  content={content.CONTENT}
                  path={content.PATH}
                />
              ))
            : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

interface typeSearchPT {
  loading?: boolean;
  isNight?: boolean;
  snippet: string;
  didSearch: boolean;
  searchContents?: Array<Content>;
  snippetRef: React.MutableRefObject<HTMLInputElement>;
  onSetSnippet: React.Dispatch<React.SetStateAction<string>>;
  onSearchContents: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default SearchPT;
