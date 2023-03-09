import React, { useEffect, useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import SignPT from './SignPT';

const SignCT = (props: any): JSX.Element => {
  useEffect(() => {
    console.log(props);
    props.requestKeyPair();
  }, []);

  return <SignPT />;
};

export default SignCT;
