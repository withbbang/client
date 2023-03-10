import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from 'screens/index';
import NotFound from 'screens/notFound';
import Sign from 'screens/sign';
import Log from 'screens/log';

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/log" element={<Log />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
