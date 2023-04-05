import SVG from 'modules/SVG';
import React from 'react';
import styles from './Float.module.scss';

const FloatPT = ({
  isNight,
  idx,
  isDrag,
  title,
  content,
  path,
  description,
  onModifyPopup,
  onDragStart,
  onDragEnd,
  onDragOver
}: typeFloatPT): JSX.Element => {
  return (
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
      draggable
      onDragStart={(e) => onDragStart(e, idx)}
      onDragEnd={(e) => onDragEnd(e, idx)}
      onDragOver={(e) => onDragOver(e, idx)}
    >
      <div className={styles.innerWrap}>
        <div className={styles.floatBtns}>
          <span onClick={() => onModifyPopup(idx)}>
            <SVG
              type="modify"
              width="15px"
              height="15px"
              fill={isNight ? '#fff' : '#000'}
            />
          </span>
          <span>
            <SVG
              type="trash"
              width="16px"
              height="16px"
              fill={isNight ? '#fff' : '#000'}
            />
          </span>
        </div>
        <h3>카테고리: {title}</h3>
        <p>경로: {path}</p>
        <p>권한: {description}</p>
      </div>
    </div>
  );
};

interface typeFloatPT {
  isNight?: boolean;
  idx: number;
  isDrag: boolean;
  title: string;
  content?: string;
  path?: string;
  description: string;
  onModifyPopup: (idx?: number) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
}

export default FloatPT;
