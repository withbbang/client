import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from 'screens/index';
import NotFound from 'screens/notFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
