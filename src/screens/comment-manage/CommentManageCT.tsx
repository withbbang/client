import React, { useEffect, useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { useNavigate, useParams } from 'react-router-dom';
import CommentManagePT from './CommentManagePT';
import { redirectPostAPI } from 'modules/apis';

const CommentManageCT = (props: typeCommentManageCT): JSX.Element => {
  const navigate = useNavigate();
  const encrypt = new JSEncrypt();
  const { commentId } = useParams();
  const [type, setType] = useState<string>('delete');

  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [confirmType, setConfirmType] = useState<string | undefined>();
  const [isConfirmPopupActive, setIsConfirmPopupActive] =
    useState<boolean>(false);

  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (commentId === undefined) {
      if (window.confirm('선택된 코멘트가 없습니다.')) {
        window.close();
      }
    } else {
      props.requestPublicKey();
    }
  }, []);

  const handleConfirmPopup = (type: string) => {
    setConfirmType(type);
    switch (type) {
      case 'update':
        handleSynchronize(type);
        break;
      case 'delete':
        setConfirmMessage('삭제하시겠습니까?');
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
      case 'delete':
        handleSynchronize(type);
        break;
      default:
        break;
    }
  };

  const handleUpdateDeleteComment = (type: string) => {
    if (!password) {
      props.handleCodeMessage('EMPTY PASSWORD', 'PASSWORD을 입력해주세요.');
      return;
    }

    handleConfirmPopup(type);
  };

  const handleCancel = () => {
    window.close();
  };

  const handleSynchronize = (type: string) => {
    if (commentId) {
      props.publicKey && encrypt.setPublicKey(props.publicKey);

      let encrypted: string | boolean = '';
      try {
        encrypted = encrypt.encrypt(password);
      } catch (e) {
        props.handleCodeMessage('ENCRYPT ERROR', '암호화 에러');
        return;
      }

      if (encrypted === false) {
        props.handleCodeMessage('ENCRYPT ERROR', '암호화 에러');
        return;
      }

      if (type === 'update') {
        redirectPostAPI('/server/common/update-comment-page', {
          commentId: +commentId,
          password: encrypted
        });
      } else if (type === 'delete') {
        //TODO: 댓글 삭제 완료 후 창 닫히도록 구현 필요
        props.requestDeleteComment(+commentId, encrypted);
      }

      setPassword('');
      props.handleCodeMessage('', '');
    } else {
      props.handleCodeMessage('EMPTY COMMENT INFO', '코멘트 정보 부재');
    }
  };

  return (
    <CommentManagePT
      loading={props.isFetching}
      isNight={props.isNight}
      type={type}
      password={password}
      isConfirmPopupActive={isConfirmPopupActive}
      confirmMessage={confirmMessage}
      confirmType={confirmType}
      onSetType={setType}
      onSetPassword={setPassword}
      onConfirmBtn={handleConfirmBtn}
      onCancel={handleCancel}
      onUpdateDeleteComment={handleUpdateDeleteComment}
    />
  );
};

interface typeCommentManageCT extends CommonState {
  handleCodeMessage: (code: string, message: string) => void;
  requestPublicKey: () => void;
  requestDeleteComment: (commentId: number, password: string) => void;
}

export default CommentManageCT;
