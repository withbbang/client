import React, { useEffect, useState } from 'react';
import { JSEncrypt } from 'jsencrypt';
import IndexPT from './IndexPT';

const IndexCT = (props: any) => {
  useEffect(() => {
    // fetch('server/sign')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((result) => {
    //     console.log('result.key: ', result.key);
    //     const encrypt = new JSEncrypt();
    //     const plain = 'Hellow World';

    //     encrypt.setPublicKey(result.key);
    //     let encrypted;
    //     try {
    //       encrypted = encrypt.encrypt(plain);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //     console.log('encrypted: ', encrypted);

    //     fetch('server/sign', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({ data: encrypted })
    //     })
    //       .then((response) => response.json())
    //       .then((data) => console.log(data));
    //   });

    console.log(props);
    props.getUser();
  }, []);

  return <IndexPT />;
};

export default IndexCT;
