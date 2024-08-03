import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './common/scrollToTop/ScrollToTop'
import TopPage from './topPage/topPage';
import SubPage from './subPage/subPage';
import './App.scss';
import './fonts.scss';

function App() {
  return (
    <BrowserRouter basename='/'>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/schedulePage" element={<SubPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
