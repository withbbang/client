import React from 'react';
import { Loader } from 'components/loader/Loader';
import { Category } from 'modules/types';
import { Card } from 'components/card/Card';
import LeftSideBar from 'components/leftSideBar';

const CategoryManagePT = ({
  loading,
  categories,
  onCreateCategory,
  onUpdateCategory
}: typeCategoryManagePT): JSX.Element => (
  <div>
    <Loader loading={loading} />
    <LeftSideBar />
    <div>
      {categories &&
        categories.length > 0 &&
        categories.map((category: Category) => <Card key={category.ID} />)}
    </div>
    <input type="text" id="title" />
    <button onClick={() => onCreateCategory('title')}>카테고리 추가</button>
    <button onClick={() => onUpdateCategory()}>카테고리 갱신</button>
  </div>
);

interface typeCategoryManagePT {
  loading: boolean;
  categories?: Array<Category>;
  onCreateCategory: (id: string, priority?: number) => void;
  onUpdateCategory: () => void;
}

export default CategoryManagePT;
