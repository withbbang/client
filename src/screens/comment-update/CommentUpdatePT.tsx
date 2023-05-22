import React from 'react';
import styles from './CommentUpdate.module.scss';
import Loader from 'components/loader/Loader';
import ErrorPopup from 'components/errorPopup';

const CommentUpdatePT = ({
  loading,
  isNight,
  tap,
  onSetTap
}: typeCommentUpdatePT) => {
  return (
    <>
      <Loader />
      <ErrorPopup />
      <div
        className={
          isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap
        }
      >
        <div className={styles.innerWrap}>
          <div className={styles.header}>댓글 수정/삭제</div>
          <div className={styles.tap}>
            <span
              className={tap === 'update' ? styles.active : ''}
              onClick={() => onSetTap('update')}
            >
              수정
            </span>
            <span
              className={tap === 'delete' ? styles.active : ''}
              onClick={() => onSetTap('delete')}
            >
              삭제
            </span>
          </div>
          <div className={styles.content}>
            <span>비밀번호를 입력해주세요.</span>
            <input />
            <div className={styles.buttons}>
              <button>취소</button>
              <button>확인</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface typeCommentUpdatePT {
  loading?: boolean;
  isNight?: boolean;
  tap: string;
  onSetTap: React.Dispatch<React.SetStateAction<string>>;
}

export default CommentUpdatePT;
