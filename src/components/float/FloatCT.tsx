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
    />
  );
};

interface typeFloatCT extends CommonState {
  title: string;
  content: string;
  path: string;
  description: string;
}

export default FloatCT;
