import React, { useEffect, useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { useNavigate, useParams } from 'react-router-dom';
import CommentManagePT from './CommentManagePT';
import { synchronized } from 'modules/utils';

const CommentManageCT = (props: typeCommentManageCT): JSX.Element => {
  const navigate = useNavigate();
  const encrypt = new JSEncrypt();
  const { commentId } = useParams();
  const [type, setType] = useState<string>('update');

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
    }
  });

  const handleConfirmPopup = (type: string) => {
    setConfirmType(type);
    switch (type) {
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
        if (commentId) {
          synchronized()
            .then(() => props.requestPublicKey())
            .then(() => {
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

              props.requestDeleteComment(+commentId, encrypted);
              setPassword('');
              props.handleCodeMessage('', '');
            });
        } else {
          props.handleCodeMessage('EMPTY COMMENT INFO', '코멘트 정보 부재');
        }
        break;
      default:
        break;
    }
  };

  const handleDeleteComment = (type: string) => {
    if (!password) {
      props.handleCodeMessage('EMPTY PASSWORD', 'PASSWORD을 입력해주세요.');
      return;
    }

    handleConfirmPopup(type);
  };

  const handleCancel = () => {
    window.close();
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
      onDeleteComment={handleDeleteComment}
    />
  );
};

interface typeCommentManageCT extends CommonState {
  handleCodeMessage: (code: string, message: string) => void;
  requestPublicKey: () => void;
  requestDeleteComment: (commentId: number, password: string) => void;
}

export default CommentManageCT;
