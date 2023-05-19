import React from 'react';
import styles from './CommentManage.module.scss';
import { Loader } from 'components/loader/Loader';
import ErrorPopup from 'components/errorPopup';
import ConfirmPopup from 'components/confirmPopup/ConfirmPopup';

const CommentManagePT = ({
  loading,
  isNight,
  type,
  password,
  isConfirmPopupActive,
  confirmMessage,
  confirmType,
  onSetType,
  onSetPassword,
  onConfirmBtn,
  onCancel,
  onDeleteComment
}: typeCommentManagePT) => {
  return (
    <>
      <Loader loading={loading} />
      <ErrorPopup />
      <ConfirmPopup
        isActive={isConfirmPopupActive}
        confirmMessage={confirmMessage}
        confirmType={confirmType}
        onConfirm={onConfirmBtn}
      />
      <div
        className={
          isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap
        }
      >
        <div className={styles.innerWrap}>
          <div className={styles.header}>댓글 수정/삭제</div>
          <div className={styles.tap}>
            <span
              className={type === 'update' ? styles.active : ''}
              onClick={() => onSetType('update')}
            >
              수정
            </span>
            <span
              className={type === 'delete' ? styles.active : ''}
              onClick={() => onSetType('delete')}
            >
              삭제
            </span>
          </div>
          <div className={styles.content}>
            <span>비밀번호를 입력해주세요.</span>
            <input
              placeholder="PASSWORD"
              type="password"
              id="password"
              value={password}
              onChange={(e) => onSetPassword(e.target.value)}
            />
            <div className={styles.buttons}>
              <button onClick={onCancel}>취소</button>
              <button onClick={() => onDeleteComment(type)}>확인</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface typeCommentManagePT {
  loading?: boolean;
  isNight?: boolean;
  type: string;
  password: string;
  isConfirmPopupActive: boolean;
  confirmMessage: string;
  confirmType?: string;
  onSetType: React.Dispatch<React.SetStateAction<string>>;
  onSetPassword: React.Dispatch<React.SetStateAction<string>>;
  onConfirmBtn: (type?: string) => void;
  onCancel: () => void;
  onDeleteComment: (type: string) => void;
}

export default CommentManagePT;
