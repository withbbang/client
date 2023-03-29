import React from 'react';
import styles from './Popup.module.scss';

const PopupPT = ({ isActive, message, onBtn }: typePopupPT) => {
  return (
    <>
      {isActive ? (
        <div className={styles.background}>
          <div className={styles.modal_body}>
            <h2>{message}</h2>
            <button onClick={onBtn}>확인</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

interface typePopupPT {
  isActive: boolean;
  message?: string;
  onBtn: () => void;
}

export default PopupPT;
