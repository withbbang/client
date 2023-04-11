import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import ContentManagePT from './ContentManagePT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';
import { ContentManageState } from 'middlewares/reduxTookits/contentManageSlice';

const ContentManageCT = (props: typeContentManageCT) => {
  const navigate = useNavigate();
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
      props.requestContent(props.id, props.contentId);
    }
  }, []);

  useEffect(() => {
    if (props.content !== undefined) {
      setCategoryId(props.content.CATEGORY_ID);
      setTitle(props.content.TITLE);
      setContent(props.content.CONTENT);
    }
  }, [props.content]);

  return <ContentManagePT loading={props.isFetching} isNight={props.isNight} />;
};

interface typeContentManageCT
  extends CommonState,
    LogState,
    ContentManageState {
  contentId?: number;
  requestContent: (id?: string, contentId?: number) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default ContentManageCT;
