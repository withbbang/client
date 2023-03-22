import React, { useEffect } from 'react';
import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';

const IndexPT = () => {
  return (
    <div>
      <Loader loading={false} />
      <LeftSideBar />
    </div>
  );
};

export default IndexPT;
