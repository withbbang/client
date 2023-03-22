import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import React, { useEffect } from 'react';

const IndexPT = () => {
  return (
    <div>
      <Loader loading={false} />
      <LeftSideBar />
    </div>
  );
};

export default IndexPT;
