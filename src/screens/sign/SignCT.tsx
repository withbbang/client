import React, { useEffect, useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import SignPT from './SignPT';

const SignCT = (props: any): JSX.Element => {
  useEffect(() => {
    props.requestKeyPair();

    const data = {
      id: 'ADMIN',
      password: '!'
    };

    props.requestSignIn(data);
  }, []);

  return <SignPT />;
};

export default SignCT;
