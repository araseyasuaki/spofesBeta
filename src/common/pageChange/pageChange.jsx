import React from 'react';
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

function PageChange({ text1, text2 }) {
  return (
    <nav className='pageChange'>
      <div onClick={handlePageChange}>
        <p>{text1}<br/><span>{text2}</span></p>
        <img src='./img/page-btn.png' alt='ページ遷移ボタンの装飾画像'/>
      </div>
    </nav>
  );
}

export default PageChange;

