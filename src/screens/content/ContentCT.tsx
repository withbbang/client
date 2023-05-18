import React, { useEffect, useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { ContentsState } from 'middlewares/reduxTookits/contentsSlice';
import ContentPT from './ContentPT';
import { HeartState } from 'middlewares/reduxTookits/heartSlice';
import { CommentState } from 'middlewares/reduxTookits/commentSlice';
import { synchronized } from 'modules/utils';

const ContentCT = (props: typeContentCT): JSX.Element => {
  const navigate = useNavigate();
  const encrypt = new JSEncrypt();
  const { contentId } = useParams();
  const [confirmMessage, setConfirmMessage] = useState<string>('');
  const [confirmType, setConfirmType] = useState<string | undefined>();
  const [isConfirmPopupActive, setIsConfirmPopupActive] =
    useState<boolean>(false);
  const [markdownCheatSheets, setMarkdownCheatSheets] = useState<Array<string>>(
    []
  );

  const [nickName, setNickName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  const [isSecret, setIsSecret] = useState<string>('N');

  const [reNickName, setReNickName] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [reComments, setReComments] = useState<string>('');
  const [reIsSecret, setReIsSecret] = useState<string>('N');

  const [isUpdate, setIsUpdate] = useState<number>(-1);
  const [isReComment, setIsReComment] = useState<number>(-1);

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

  const handleConfirmPopup = (type?: string) => {
    setConfirmType(type);
    switch (type) {
      case 'create':
        setConfirmMessage('생성하시겠습니까?');
        setIsConfirmPopupActive(!isConfirmPopupActive);
        break;
      case 'update':
        setConfirmMessage('수정하시겠습니까?');
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
      case 'create':
        if (contentId) {
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

              props.requestCreateComment(
                nickName,
                encrypted,
                +contentId,
                comments,
                isSecret
                //refId
              );
              setNickName('');
              setPassword('');
              setComments('');
              setIsSecret('N');
              props.handleCodeMessage('', '');
            });
        } else {
          props.handleCodeMessage('EMPTY CONTENT INFO', '컨텐트 정보 부재');
        }
        break;
      case 'update':
        // if (props.id && contentId) {
        //   props.requestUpdateContent(
        //     categoryId,
        //     +contentId,
        //     title,
        //     content,
        //     isDone,
        //     props.id
        //   );
        //   props.handleCodeMessage('', '');
        // } else {
        //   props.handleCodeMessage('EMPTY USER INFO', '유저 정보 부재');
        // }
        break;
      default:
        break;
    }
  };

  const handleCreateUpdateComment = () => {
    // if (e !== undefined && e.key !== 'Enter') {
    //   return;
    // }

    if (!nickName) {
      props.handleCodeMessage('EMPTY NICKNAME', 'NICKNAME을 입력해주세요.');
      return;
    }

    if (!password) {
      props.handleCodeMessage('EMPTY PASSWORD', 'PASSWORD을 입력해주세요.');
      return;
    }

    if (!comments) {
      props.handleCodeMessage('EMPTY COMMENT', 'COMMENT을 입력해주세요.');
      return;
    }

    //TODO: 비교 필요, UPDATE 작업, refId, isSecret 연결 필요
    handleConfirmPopup('create');
  };

  return (
    <ContentPT
      loading={props.isFetching}
      isNight={props.isNight}
      content={props.content}
      markdownCheatSheets={markdownCheatSheets}
      heart={props.heart}
      commentList={props.comments}
      nickName={nickName}
      password={password}
      comments={comments}
      isSecret={isSecret}
      isUpdate={isUpdate}
      isReComment={isReComment}
      isConfirmPopupActive={isConfirmPopupActive}
      confirmMessage={confirmMessage}
      confirmType={confirmType}
      onSetHeart={handleSetHeart}
      onSetNickName={setNickName}
      onSetPassword={setPassword}
      onSetComments={setComments}
      onSetIsSecret={setIsSecret}
      onSetIsUpdate={setIsUpdate}
      onSetIsReComment={setIsReComment}
      onConfirmBtn={handleConfirmBtn}
      onCreateUpdateComment={handleCreateUpdateComment}
    />
  );
};

interface typeContentCT
  extends CommonState,
    LogState,
    ContentsState,
    HeartState,
    CommentState {
  handleCodeMessage: (code: string, message: string) => void;
  requestPublicKey: () => void;
  requestContent: (id?: string, contentId?: number) => void;
  requestHeart: (contentId?: number) => void;
  requestSetHeart: (contentId?: number) => void;
  requestComments: (contentId?: number) => void;
  requestCreateComment: (
    nickName: string,
    password: string,
    contentId: number,
    comments: string,
    isSecret?: string,
    refId?: number
  ) => void;
}

export default ContentCT;
