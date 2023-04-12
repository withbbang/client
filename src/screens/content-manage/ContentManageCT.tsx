import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import ContentManagePT from './ContentManagePT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';
import { ContentManageState } from 'middlewares/reduxTookits/contentManageSlice';
import styles from 'components/functionPopup/FunctionPopup.module.scss';
import { CategoryManageState } from 'middlewares/reduxTookits/categoryManageSlice';

const ContentManageCT = (props: typeContentManageCT) => {
  const navigate = useNavigate();
  const { contentId } = useParams();

  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const contentRef =
    React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const createUpdateBtnRef =
    React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const [isFunctionPopupActive, setIsFunctionPopupActive] =
    useState<boolean>(true);

  const [markdownCheatSheets, setMarkdownCheatSheets] = useState(Array<string>);
  const [categoryId, setCategoryId] = useState<number>(-1);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string | undefined>();

  useEffect(() => {
    if (
      !!!handleGetCookie('atk') ||
      !!!handleGetCookie('rtk') ||
      !props.id ||
      !props.isLoggedIn
    ) {
      navigate('/');
    } else {
      contentId && props.requestContent(props.id, props.contentId);
      props.requestCategory(props.id);
    }
  }, []);

  useEffect(() => {
    if (props.content) {
      setCategoryId(props.content.CATEGORY_ID);
      setTitle(props.content.TITLE);
      setContent(props.content.CONTENT);
    }
  }, [props.content]);

  const handleBlur = () => {
    titleRef && titleRef.current.blur();
    contentRef && contentRef.current.blur();
    createUpdateBtnRef && createUpdateBtnRef.current.blur();
  };

  const handleCreateUpdateCategory = (
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

    if (!content) {
      props.handleCodeMessage('EMPTY CONTENT', 'CONTENT을 입력해주세요.');
      handleBlur();
      return;
    }

    //TODO: 비교 필요
    // const originCategory = props.categories && props.categories[selectedIdx];
    // const copiedCategory = {
    //   ...categories[selectedIdx],
    //   TITLE: title,
    //   PATH: path,
    //   AUTH: auth
    // };
    // if (JSON.stringify(originCategory) === JSON.stringify(copiedCategory)) {
    //   props.handleCodeMessage('SAME INPUTS', '입력값이 동일합니다.');
    //   handleBlur();
    //   return;
    // }

    //TODO: update 혹은 create api
    handleBlur();
  };

  const handleCreateUpdatePopup = () => {
    setIsFunctionPopupActive(!isFunctionPopupActive);
  };

  const handleTextAreaTab = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();

      const el = document.getElementById('content') as HTMLTextAreaElement;

      el.setRangeText('  ', el.selectionStart, el.selectionStart, 'end');
    }
  };

  const handleChildren = (
    <div className={styles.contentBox}>
      <div className={styles.option}>
        <input
          placeholder="TITLE"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyUp={(e) => handleCreateUpdateCategory(e)}
          ref={titleRef}
        />
        {Array.isArray(props.categories) && props.categories.length > 0 && (
          <select
            defaultValue={categoryId}
            onChange={(e) => setCategoryId(+e.target.value)}
          >
            {props.categories.map((category, idx) => (
              <option key={idx} value={category.ID}>
                {category.TITLE}
              </option>
            ))}
          </select>
        )}
      </div>
      <textarea
        placeholder="CONTENT"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={(e) => handleTextAreaTab(e)}
        ref={contentRef}
      />
      <button
        onClick={() => handleCreateUpdateCategory()}
        ref={createUpdateBtnRef}
      >
        확인
      </button>
    </div>
  );

  return (
    <ContentManagePT
      loading={props.isFetching}
      isNight={props.isNight}
      markdownCheatSheets={markdownCheatSheets}
      categoryId={categoryId}
      title={title}
      content={content}
      children={handleChildren}
      isFunctionPopupActive={isFunctionPopupActive}
      setCategoryId={setCategoryId}
      setTitle={setTitle}
      setContent={setContent}
      onCreateUpdatePopup={handleCreateUpdatePopup}
    />
  );
};

interface typeContentManageCT
  extends CommonState,
    LogState,
    CategoryManageState,
    ContentManageState {
  contentId?: number;
  requestCategory: (id?: string) => void;
  requestContent: (id?: string, contentId?: number) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default ContentManageCT;
