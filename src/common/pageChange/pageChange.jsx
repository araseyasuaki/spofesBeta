import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './pageChange.scss'

function PageChange() {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className='pageChange'>
      {currentPath !== '/' && (
        <Link to="/">
          <p>TOP<br/><span>に戻ります</span></p>
          <img src='/img/page-btn.png'/>
        </Link>
      )}
      {currentPath !== '/subPage' && (
        <Link to="/subPage">
          <p>当日<br/><span>スケジュール</span></p>
          <img src='/img/page-btn.png'/>
        </Link>
      )}
      <div className='pc-box-1'/>
    </nav>
  );
}

export default PageChange;