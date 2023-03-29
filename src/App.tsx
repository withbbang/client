import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from 'screens/index';
import NotFound from 'screens/notFound';
import Sign from 'screens/sign';
import Log from 'screens/log';
import Admin from 'screens/admin';
import Post from './screens/post';
import CategoryManage from './screens/category-manage';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/log" element={<Log />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/post" element={<Post />} />
        <Route path="/admin/category-manage" element={<CategoryManage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
