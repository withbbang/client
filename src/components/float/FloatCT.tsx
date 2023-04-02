import React from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import FloatPT from './FloatPT';

const FloatCT = (props: typeFloatCT): JSX.Element => {
  return (
    <FloatPT
      isNight={props.isNight}
      title={props.title}
      content={props.content}
      path={props.path}
      description={props.description}
      onDragStart={props.onDragStart}
      onDrag={props.onDrag}
      onDragEnd={props.onDragEnd}
      onDragOver={props.onDragOver}
      onDragEnter={props.onDragEnter}
      onDragLeave={props.onDragLeave}
    />
  );
};

interface typeFloatCT extends CommonState {
  title: string;
  content: string;
  path: string;
  description: string;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
}

export default FloatCT;
