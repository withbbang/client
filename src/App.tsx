import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from 'screens/index';
import NotFound from 'screens/notFound';
import Sign from 'screens/sign';
import Log from 'screens/log';
import CategoryManage from './screens/category-manage';
import ContentManage from './screens/content-manage';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/log" element={<Log />} />
        <Route path="/admin/category-manage" element={<CategoryManage />} />
        <Route path="/admin/content-manage" element={<ContentManage />} />
        <Route path="/:path" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
