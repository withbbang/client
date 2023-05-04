import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from 'screens/index';
import NotFound from 'screens/notFound';
import Sign from 'screens/sign';
import Log from 'screens/log';
import CategoryManage from './screens/category-manage';
import ContentManage from './screens/content-manage';
import Contents from './screens/contents';
import Search from 'screens/search';
import Content from './screens/content';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/log" element={<Log />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin/category-manage" element={<CategoryManage />} />
        <Route path="/admin/contents" element={<Contents />} />
        <Route path="/admin/content-manage" element={<ContentManage />} />
        <Route
          path="/admin/content-manage/:contentId"
          element={<ContentManage />}
        />
        <Route path="/:path" element={<Index />} />
        <Route path="/:path/:contentId" element={<Content />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
