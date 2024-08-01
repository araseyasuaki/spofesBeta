import React from 'react';
import './pageChange.scss';

function PageChangeTop() {
  return (
    <nav className='pageChange'>
      <a href="/subPage">
        <p>当日<br/><span>スケジュール</span></p>
        <img src='/img/page-btn.png' alt='ページ遷移ボタンの装飾画像'/>
      </a>
      <div className='pc-box-1'/>
    </nav>
  );
}

function PageChangeSub() {
  return (
    <nav className='pageChange'>
      <a href="/">
        <p>TOP<br/><span>に戻ります</span></p>
        <img src='/img/page-btn.png' alt='ページ遷移ボタンの装飾画像'/>
      </a>
      <div className='pc-box-1'/>
    </nav>
  );
}

export { PageChangeTop, PageChangeSub };
