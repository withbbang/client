import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { ContentsState } from 'middlewares/reduxTookits/contentsSlice';
import ContentPT from './ContentPT';
import { HeartState } from 'middlewares/reduxTookits/heartSlice';

const ContentCT = (props: typeContentCT): JSX.Element => {
  const navigate = useNavigate();
  const { contentId } = useParams();
  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [confirmType, setConfirmType] = useState<string | undefined>();
  const [isConfirmPopupActive, setIsConfirmPopupActive] =
    useState<boolean>(false);

  const testComments = [
    {
      ID: 1,
      NICKNAME: '상남자1',
      COMMENTS: '좋은 정보 고맙습니다.',
      CREATE_DT: '2023.05.15',
      UPDATE_DT: '2023.05.15',
      IS_SECRET: 'N'
    },
    {
      ID: 2,
      REF_ID: 1,
      NICKNAME: '상남자2',
      COMMENTS: '좋은 정보 고맙습니다.',
      CREATE_DT: '2023.05.15',
      UPDATE_DT: '2023.05.15',
      IS_SECRET: 'Y'
    },
    {
      ID: 3,
      REF_ID: 1,
      NICKNAME: '상남자3',
      COMMENTS: '좋은 정보 고맙습니다.',
      CREATE_DT: '2023.05.15',
      UPDATE_DT: '2023.05.15',
      IS_SECRET: 'N'
    },
    {
      ID: 4,
      NICKNAME: '상남자4',
      COMMENTS: '좋은 정보 고맙습니다.',
      CREATE_DT: '2023.05.15',
      UPDATE_DT: '2023.05.15',
      IS_SECRET: 'N'
    },
    {
      ID: 5,
      NICKNAME: '상남자5',
      COMMENTS: '좋은 정보 고맙습니다.',
      CREATE_DT: '2023.05.15',
      UPDATE_DT: '2023.05.15',
      IS_SECRET: 'Y'
    },
    {
      ID: 6,
      REF_ID: 5,
      NICKNAME: '상남자6',
      COMMENTS: '좋은 정보 고맙습니다.',
      CREATE_DT: '2023.05.15',
      UPDATE_DT: '2023.05.15',
      IS_SECRET: 'N'
    },
    {
      ID: 7,
      NICKNAME: '상남자7',
      COMMENTS: '좋은 정보 고맙습니다.',
      CREATE_DT: '2023.05.15',
      UPDATE_DT: '2023.05.15',
      IS_SECRET: 'Y'
    },
    {
      ID: 8,
      REF_ID: 7,
      NICKNAME: '상남자8',
      COMMENTS: '좋은 정보 고맙습니다.',
      CREATE_DT: '2023.05.15',
      UPDATE_DT: '2023.05.15',
      IS_SECRET: 'Y'
    },
    {
      ID: 9,
      REF_ID: 7,
      NICKNAME: '상남자9',
      COMMENTS: '좋은 정보 고맙습니다.',
      CREATE_DT: '2023.05.15',
      UPDATE_DT: '2023.05.15',
      IS_SECRET: 'Y'
    },
    {
      ID: 10,
      REF_ID: 7,
      NICKNAME: '상남자10',
      COMMENTS: '좋은 정보 고맙습니다.',
      CREATE_DT: '2023.05.15',
      UPDATE_DT: '2023.05.15',
      IS_SECRET: 'Y'
    }
  ];

  const [markdownCheatSheets, setMarkdownCheatSheets] = useState<Array<string>>(
    []
  );

  const [nickName, setNickName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  const [isSecret, setIsSecret] = useState<string>('N');

  useEffect(() => {
    if (contentId) {
      props.requestContent(props.id, +contentId);
      props.requestHeart(+contentId);
      props.requestComments(+contentId);
    }
  }, []);

  const handleSetHeart = () => {
    contentId
      ? props.requestSetHeart(+contentId)
      : props.handleCodeMessage('EMPTY CONTENTID ERROR', '컨텐트 아이디 에러');
  };

  const handleConfirmPopup = (type?: string) => {
    setConfirmType(type);
    switch (type) {
      case 'create':
        setConfirmMessage('생성하시겠습니까?');
        setIsConfirmPopupActive(!isConfirmPopupActive);
        break;
      case 'update':
        setConfirmMessage('수정하시겠습니까?');
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
        if (contentId) {
          props.requestCreateComment(
            nickName,
            password,
            +contentId,
            comments,
            isSecret
            //refId
          );
          props.handleCodeMessage('', '');
        } else {
          props.handleCodeMessage('EMPTY CONTENT INFO', '컨텐트 정보 부재');
        }
        break;
      case 'update':
        // if (props.id && contentId) {
        //   props.requestUpdateContent(
        //     categoryId,
        //     +contentId,
        //     title,
        //     content,
        //     isDone,
        //     props.id
        //   );
        //   props.handleCodeMessage('', '');
        // } else {
        //   props.handleCodeMessage('EMPTY USER INFO', '유저 정보 부재');
        // }
        break;
      default:
        break;
    }
  };

  const handleCreateUpdateComment = () => {
    // if (e !== undefined && e.key !== 'Enter') {
    //   return;
    // }

    if (!nickName) {
      props.handleCodeMessage('EMPTY NICKNAME', 'NICKNAME을 입력해주세요.');
      return;
    }

    if (!password) {
      props.handleCodeMessage('EMPTY PASSWORD', 'PASSWORD을 입력해주세요.');
      return;
    }

    if (!comments) {
      props.handleCodeMessage('EMPTY COMMENT', 'COMMENT을 입력해주세요.');
      return;
    }

    //TODO: 비교 필요, UPDATE 작업, refId, isSecret 연결 필요
    handleConfirmPopup('create');
  };

  return (
    <ContentPT
      loading={props.isFetching}
      isNight={props.isNight}
      content={props.content}
      markdownCheatSheets={markdownCheatSheets}
      heart={props.heart}
      isConfirmPopupActive={isConfirmPopupActive}
      confirmMessage={confirmMessage}
      confirmType={confirmType}
      onSetHeart={handleSetHeart}
      onConfirmBtn={handleConfirmBtn}
      onCreateUpdateComment={handleCreateUpdateComment}
      testComments={testComments}
    />
  );
};

interface typeContentCT
  extends CommonState,
    LogState,
    ContentsState,
    HeartState {
  handleCodeMessage: (code: string, message: string) => void;
  requestContent: (id?: string, contentId?: number) => void;
  requestHeart: (contentId?: number) => void;
  requestSetHeart: (contentId?: number) => void;
  requestComments: (contentId?: number) => void;
  requestCreateComment: (
    nickName: string,
    password: string,
    contentId: number,
    comments: string,
    isSecret?: string,
    refId?: number
  ) => void;
}

export default ContentCT;
