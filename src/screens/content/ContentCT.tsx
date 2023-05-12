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

  const [markdownCheatSheets, setMarkdownCheatSheets] = useState<Array<string>>(
    []
  );

  useEffect(() => {
    if (contentId) {
      props.requestContent(props.id, +contentId);
      props.requestHeart(+contentId);
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
}

export default ContentCT;
