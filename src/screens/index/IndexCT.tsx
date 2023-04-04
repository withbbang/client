import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { LogState } from 'middlewares/reduxTookits/logSlice';
import { ContentsState } from 'middlewares/reduxTookits/contentsSlice';
import IndexPT from './IndexPT';

const IndexCT = (props: typeIndexCT) => {
  const { title } = useParams();

  useEffect(() => {
    props.requestContents(title, props.id);
  }, [props.id, props.isLoggedIn, props.isLoggedOut]);

  return (
    <IndexPT
      loading={props.isFetching}
      isNight={props.isNight}
      items={props.contents}
    />
  );
};

interface typeIndexCT extends CommonState, LogState, ContentsState {
  requestContents: (title?: string, id?: string) => void;
}

export default IndexCT;
