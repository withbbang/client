import React, { useEffect, useState } from 'react';
import IndexPT from './IndexPT';

const IndexCT = () => {
  useEffect(() => {
    fetch('test')
      .then((res) => {
        return res.json();
      })
      .then((result) => console.log(result));

    fetch('server/b')
      .then((res) => {
        return res.json();
      })
      .then((result) => console.log(result));
  }, []);

  return <IndexPT />;
};

export default IndexCT;
