import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import ContentManagePT from './ContentManagePT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';

const ContentManageCT = (props: typeContentManageCT) => {
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
      //TODO: 특정 컨텐트 가져오기
    }
  }, []);

  return <ContentManagePT loading={props.isFetching} isNight={props.isNight} />;
};

interface typeContentManageCT extends CommonState, LogState {
  handleCodeMessage: (code: string, message: string) => void;
}

export default ContentManageCT;
