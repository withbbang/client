import React, { useEffect } from 'react';
import { ContentManageState } from 'middlewares/reduxTookits/contentManageSlice';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import ContentsPT from './ContentsPT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';

const ContentsCT = (props: typeContentsCT) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !!!handleGetCookie('atk') ||
      !!!handleGetCookie('rtk') ||
      !props.id ||
      !props.isLoggedIn
    ) {
      navigate('/');
    } else {
      props.requestContents(props.id);
    }
  }, []);

  return (
    <ContentsPT
      loading={props.isFetching}
      isNight={props.isNight}
      contents={props.contents}
    />
  );
};

interface typeContentsCT extends CommonState, LogState, ContentManageState {
  requestContents: (id?: string) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default ContentsCT;
