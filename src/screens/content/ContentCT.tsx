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
  return (
    <ContentPT
      loading={props.isFetching}
      isNight={props.isNight}
      content={props.content}
      markdownCheatSheets={markdownCheatSheets}
      heart={props.heart}
      onSetHeart={handleSetHeart}
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
}

export default ContentCT;
