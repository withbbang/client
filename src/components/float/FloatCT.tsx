import React from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import FloatPT from './FloatPT';

const FloatCT = (props: typeFloatCT): JSX.Element => {
  return (
    <FloatPT
      isNight={props.isNight}
      idx={props.idx}
      isDrag={props.isDrag}
      title={props.title}
      content={props.content}
      path={props.path}
      description={props.description}
      onModifyPopup={props.onModifyPopup}
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
      onDragOver={props.onDragOver}
    />
  );
};

interface typeFloatCT extends CommonState {
  idx: number;
  isDrag: boolean;
  title: string;
  content: string;
  path: string;
  description: string;
  onModifyPopup: (idx?: number) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
}

export default FloatCT;
