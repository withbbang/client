import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import ContentPT from './ContentPT';
import { useNavigate, useParams } from 'react-router-dom';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { ContentsState } from 'middlewares/reduxTookits/contentsSlice';

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
      props.requestHeartsCount(+contentId);
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

  return (
    <ContentPT
      loading={props.isFetching}
      isNight={props.isNight}
      title={title}
      content={content}
      markdownCheatSheets={markdownCheatSheets}
    />
  );
};

interface typeContentCT extends CommonState, LogState, ContentsState {
  requestContent: (id?: string, contentId?: number) => void;
  requestHeartsCount: (contentId?: number) => void;
}

export default ContentCT;
