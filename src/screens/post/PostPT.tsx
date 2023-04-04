import React from 'react';
import { Loader } from 'components/loader/Loader';
import LeftSideBar from 'components/leftSideBar';

const PostPT = ({ loading }: typePostPT) => (
  <div>
    <Loader loading={loading} />
    <LeftSideBar />
    Post!
  </div>
);

interface typePostPT {
  loading?: boolean;
}

export default PostPT;
