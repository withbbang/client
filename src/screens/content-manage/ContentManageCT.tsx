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
    useState<boolean>(false);

  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [confirmType, setConfirmType] = useState<string | undefined>();
  const [isConfirmPopupActive, setIsConfirmPopupActive] =
    useState<boolean>(false);

  const [markdownCheatSheets, setMarkdownCheatSheets] = useState<Array<string>>(
    []
  );
  const [categoryId, setCategoryId] = useState<number>(-1);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isDone, setIsDone] = useState<string>('N');

  useEffect(() => {
    if (
      !!!handleGetCookie('atk') ||
      !!!handleGetCookie('rtk') ||
      !props.id ||
      !props.isLoggedIn
    ) {
      navigate('/');
    } else {
      props.requestContent(props.id, contentId ? +contentId : 0);
      props.requestCategory(props.id);
    }
  }, []);

  useEffect(() => {
    if (props.content) {
      setCategoryId(props.content.CATEGORY_ID);
      setTitle(props.content.TITLE);
      props.content.CONTENT && setContent(props.content.CONTENT);
      setIsDone(props.content.IS_DONE);
      setIsFunctionPopupActive(false);
    } else {
      setCategoryId(-1);
      setTitle('');
      setContent('');
      setIsDone('N');
      setIsFunctionPopupActive(true);
    }
  }, [props.content]);

  const handleConfirmPopup = (type?: string) => {
    setConfirmType(type);
    switch (type) {
      case 'create':
        setConfirmMessage('생성하시겠습니까?');
        setIsConfirmPopupActive(!isConfirmPopupActive);
        break;
      default:
        break;
    }
  };

  const handleConfirmBtn = (type?: string) => {
    setConfirmType('');
    setConfirmMessage('');
    setIsConfirmPopupActive(!isConfirmPopupActive);
    switch (type) {
      case 'create':
        if (props.id) {
          props.requestCreateContent(categoryId, title, content, props.id);
          props.handleCodeMessage('', '');
        } else {
          props.handleCodeMessage('EMPTY USER INFO', '유저 정보 부재');
        }
        break;
      default:
        break;
    }
  };

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

    if (categoryId < 0) {
      props.handleCodeMessage(
        'NO SELECTED CATEGORY',
        'CATEGORY를 선택해주세요.'
      );
      handleBlur();
      return;
    }

    //TODO: 비교 필요
    handleConfirmPopup('create');
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
            <option value={-1}>선택</option>
            {props.categories.map((category, idx) => (
              <option key={idx} value={category.ID}>
                {category.TITLE}
              </option>
            ))}
          </select>
        )}
        <select
          defaultValue={isDone}
          onChange={(e) => setIsDone(e.target.value)}
        >
          <option value={'N'}>비노출</option>
          <option value={'Y'}>노출</option>
        </select>
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
      title={title}
      content={content}
      children={handleChildren}
      confirmType={confirmType}
      confirmMessage={confirmMessage}
      isConfirmPopupActive={isConfirmPopupActive}
      isFunctionPopupActive={isFunctionPopupActive}
      onConfirmBtn={handleConfirmBtn}
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
  requestCreateContent: (
    categoryId: number,
    title: string,
    content: string,
    isDone?: string,
    id?: string
  ) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default ContentManageCT;
