import React from 'react';
import { Link } from 'react-router-dom';
import './pageChange.scss';

const disableSmoothScroll = () => {
  document.documentElement.style.scrollBehavior = 'auto';
};

const enableSmoothScroll = () => {
  document.documentElement.style.scrollBehavior = 'smooth';
};

const handlePageChange = () => {
  disableSmoothScroll();
  setTimeout(() => enableSmoothScroll(), 100);
};

function PageChangeTop() {
  return (
    <nav className='pageChange'>
      <Link to="/schedulePage" onClick={handlePageChange}>
        <p>当日<br/><span>スケジュール</span></p>
        <img src='./img/page-btn.png' alt='ページ遷移ボタンの装飾画像'/>
      </Link>
      <div className='pc-box-1'/>
    </nav>
  );
}

function PageChangeSub() {
  return (
    <nav className='pageChange'>
      <Link to="/" onClick={handlePageChange}>
        <p>TOP<br/><span>に戻ります</span></p>
        <img src='./img/page-btn.png' alt='ページ遷移ボタンの装飾画像'/>
      </Link>
      <div className='pc-box-1'/>
    </nav>
  );
}

export { PageChangeTop, PageChangeSub };

