import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { useNavigate, useParams } from 'react-router-dom';
import CommentUpdatePT from './CommentUpdatePT';

const CommentUpdateCT = (props: typeCommentManageCT): JSX.Element => {
  const navigate = useNavigate();
  const { commentId } = useParams();
  const [tap, setTap] = useState<string>('update');

  useEffect(() => {
    if (commentId === undefined) {
      if (window.confirm('선택된 코멘트가 없습니다.')) {
        window.close();
      }
    }
  });

  return (
    <CommentUpdatePT
      loading={props.isFetching}
      isNight={props.isNight}
      tap={tap}
      onSetTap={setTap}
    />
  );
};

interface typeCommentManageCT extends CommonState {}

export default CommentUpdateCT;
