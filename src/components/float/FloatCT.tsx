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
      path={props.path}
      isDeleted={props.isDeleted}
      description={props.description}
      onModifyPopup={props.onModifyPopup}
      onDeleteRestore={props.onDeleteRestore}
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
  path: string;
  isDeleted: string;
  description: string;
  onModifyPopup: (idx?: number) => void;
  onDeleteRestore: (idx?: number) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, idx: number) => void;
}

export default FloatCT;
