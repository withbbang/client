import React, { useEffect } from 'react';
import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import styles from './Index.module.scss';
import Card from 'components/card/Card';

const IndexPT = (props: any) => {
  return (
    <>
      <Loader loading={false} />
      <LeftSideBar />
      <div className={styles.wrap}>
        <div className={styles.innerWrap}>
          {Array.isArray(props.items) &&
            props.items.length > 0 &&
            props.items.map((item: any, idx: number) => (
              <Card key={idx} title={item.title} contents={item.contents} />
            ))}
        </div>
      </div>
    </>
  );
};

export default IndexPT;
