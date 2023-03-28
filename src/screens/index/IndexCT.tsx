import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import React, { useEffect, useState } from 'react';
import IndexPT from './IndexPT';

const IndexCT = (props: typeIndexCT) => {
  const [items, setItems] = useState<Array<TempItem>>([]);
  useEffect(() => {
    setItems([
      {
        title: 'title_0',
        contents:
          'contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0contents_0'
      },
      {
        title: 'title_1',
        contents:
          'contents_1contents_1contents_1contents_1contents_1contents_1contents_1contents_1contents_1'
      },
      {
        title: 'title_2',
        contents:
          'contents_2contents_2contents_2contents_2contents_2contents_2contents_2contents_2contents_2'
      },
      {
        title: 'title_3',
        contents:
          'contents_3contents_3contents_3contents_3contents_3contents_3contents_3contents_3contents_3'
      },
      {
        title: 'title_4',
        contents:
          'contents_4contents_4contents_4contents_4contents_4contents_4contents_4contents_4contents_4'
      },
      {
        title: 'title_5',
        contents:
          'contents_5contents_5contents_5contents_5contents_5contents_5contents_5contents_5contents_5'
      },
      {
        title: 'title_6',
        contents:
          'contents_6contents_6contents_6contents_6contents_6contents_6contents_6contents_6contents_6'
      },
      {
        title: 'title_7',
        contents:
          'contents_7contents_7contents_7contents_7contents_7contents_7contents_7contents_7contents_7'
      },
      {
        title: 'title_8',
        contents:
          'contents_8contents_8contents_8contents_8contents_8contents_8contents_8contents_8contents_8'
      },
      {
        title: 'title_9',
        contents:
          'contents_9contents_9contents_9contents_9contents_9contents_9contents_9contents_9contents_9'
      }
    ]);
  }, []);

  return <IndexPT isNight={props.isNight} items={items} />;
};

interface typeIndexCT extends CommonState {}

interface TempItem {
  title: string;
  contents: string;
}

export default IndexCT;
