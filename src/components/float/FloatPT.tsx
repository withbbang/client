import React from 'react';
import styles from './Float.module.scss';

const FloatPT = ({
  isNight,
  title,
  content,
  path,
  description,
  onDragStart,
  onDrag,
  onDragEnd,
  onDragOver,
  onDragEnter,
  onDragLeave
}: typeFloatPT): JSX.Element => {
  return (
    <div
      className={isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap}
      draggable
      onDragStart={(e) => onDragStart(e)}
      onDrag={(e) => onDrag(e)}
      onDragEnd={(e) => onDragEnd(e)}
      onDragOver={(e) => onDragOver(e)}
      onDragEnter={(e) => onDragEnter(e)}
      onDragLeave={(e) => onDragLeave(e)}
    >
      <div className={styles.innerWrap}>
        <h3>카테고리: {title}</h3>
        <p>경로: {path}</p>
        <p>권한: {description}</p>
      </div>
    </div>
  );
};

interface typeFloatPT {
  isNight?: boolean;
  title: string;
  content?: string;
  path?: string;
  description: string;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
}

export default FloatPT;
