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
  onDragStart,
  onDrag,
  onDragEnd,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop
}: typeFloatPT): JSX.Element => {
  return (
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
      draggable
      onDragStart={(e) => onDragStart(e, idx)}
      onDrag={(e) => onDrag(e, idx)}
      onDragEnd={(e) => onDragEnd(e, idx)}
      onDragOver={(e) => onDragOver(e, idx)}
      onDragEnter={(e) => onDragEnter(e, idx)}
      onDragLeave={(e) => onDragLeave(e, idx)}
      onDrop={(e) => onDrop(e, idx)}
    >
      <div className={styles.innerWrap}>
        <div className={styles.floatBtns}>
          <SVG
            type="modify"
            width="15px"
            height="15px"
            fill={isNight ? '#fff' : '#000'}
          />
          <SVG
            type="trash"
            width="16px"
            height="16px"
            fill={isNight ? '#fff' : '#000'}
          />
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
  onDragStart: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragEnter: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
}

export default FloatPT;
