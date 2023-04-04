import React from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import { PostState } from 'middlewares/reduxTookits/postSlice';
import PostPT from './PostPT';

const PostCT = (props: typePostCT) => <PostPT loading={props.isFetching} />;

interface typePostCT extends CommonState, PostState {}

export default PostCT;
