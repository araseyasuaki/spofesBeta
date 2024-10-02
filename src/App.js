import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from './pageHome';
import './App.scss';
import './fonts.scss';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<PageHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;