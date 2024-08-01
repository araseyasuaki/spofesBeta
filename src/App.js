import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import TopPage from './topPage/topPage';
import SubPage from './subPage/subPage';
import { gsap } from 'gsap'
import './fonts.scss';
import './App.scss';

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TopPage />} />
        <Route path="/subPage" element={<SubPage />} />
      </Routes>
    </>
  );
}

export default App;