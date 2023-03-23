import { PostState } from 'middlewares/reduxTookits/postSlice';
import React from 'react';
import PostPT from './PostPT';

const PostCT = (props: typePostCT) => <PostPT loading={props.isFetching} />;

interface typePostCT extends PostState {}

export default PostCT;
