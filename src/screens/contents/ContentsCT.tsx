import React, { useEffect, useState } from 'react';
import { ContentManageState } from 'middlewares/reduxTookits/contentManageSlice';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import ContentsPT from './ContentsPT';
import { handleGetCookie } from 'modules/cookie';
import { useNavigate } from 'react-router-dom';

const ContentsCT = (props: typeContentsCT) => {
  const navigate = useNavigate();

  const [confirmType, setConfirmType] = useState<string | undefined>();
  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [isConfirmPopupActive, setIsConfirmPopupActive] =
    useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);

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

  const handleConfirmBtn = (type?: string) => {
    switch (type) {
      case 'deleteRestore':
        if (props.id) {
          props.contents &&
            props.requestDeleteRestoreContent(
              props.contents[selectedIdx].ID,
              props.id
            );
          props.handleCodeMessage('', '');
        } else {
          props.handleCodeMessage('EMPTY USER INFO', '유저 정보 부재');
        }
        break;
    }

    setConfirmMessage('');
    setSelectedIdx(-1);
    setIsConfirmPopupActive(!isConfirmPopupActive);
  };

  const handleConfirmPopup = (type?: string, idx?: number) => {
    setConfirmType(type);

    switch (type) {
      case 'deleteRestore':
        idx !== undefined &&
        idx > -1 &&
        props.contents &&
        props.contents[idx].IS_DELETED === 'Y'
          ? setConfirmMessage('복원하시겠습니까?')
          : setConfirmMessage('삭제하시겠습니까?');
        break;
      default:
        break;
    }

    setIsConfirmPopupActive(!isConfirmPopupActive);
  };

  const handleDeleteRestore = (idx?: number) => {
    if (idx !== undefined && idx > -1) {
      setSelectedIdx(idx);
      handleConfirmPopup('deleteRestore', idx);
    } else {
      setSelectedIdx(-1);
      handleConfirmPopup();
    }
  };

  return (
    <ContentsPT
      loading={props.isFetching}
      isNight={props.isNight}
      contents={props.contents}
      isConfirmPopupActive={isConfirmPopupActive}
      confirmMessage={confirmMessage}
      confirmType={confirmType}
      onDeleteRestore={handleDeleteRestore}
      onConfirmBtn={handleConfirmBtn}
    />
  );
};

interface typeContentsCT extends CommonState, LogState, ContentManageState {
  requestContents: (id?: string) => void;
  requestDeleteRestoreContent: (contentId: number, id?: string) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default ContentsCT;
