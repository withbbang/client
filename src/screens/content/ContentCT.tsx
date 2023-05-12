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

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [markdownCheatSheets, setMarkdownCheatSheets] = useState<Array<string>>(
    []
  );

  useEffect(() => {
    if (contentId) {
      props.requestContent(props.id, +contentId);
      props.requestHeart(+contentId);
    }
  }, []);

  useEffect(() => {
    if (props.content) {
      setTitle(props.content.TITLE);
      props.content.CONTENT && setContent(props.content.CONTENT);
    } else {
      setTitle('');
      setContent('');
    }
  }, [props.content]);

  const handleSetHeart = () => {
    contentId
      ? props.requestSetHeart(+contentId)
      : props.handleCodeMessage('EMPTY CONTENTID ERROR', '컨텐트 아이디 에러');
  };
  return (
    <ContentPT
      loading={props.isFetching}
      isNight={props.isNight}
      title={title}
      content={content}
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
