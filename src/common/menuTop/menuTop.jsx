import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './menuTop.scss';

const MenuSub = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  const toggleMenu = () => {
    setMenuBtn(!menuBtn);
  };

  return (
    <div className='menuTop'>
      <div onClick={toggleMenu}>
        <div className={`menuBer-1 ${menuBtn ? 'menuBer-1-off' : ''}`}/>
        <p className={`${menuBtn ? 'text-off' : ''}`}>MENU</p>
        <div className={`menuBer-2 ${menuBtn ? 'menuBer-2-off' : ''}`}/>
      </div>
      <nav className={menuBtn ? 'nav-on' : ''}>
        <dl>
          <dt>CATCH PHRASE</dt>
          <dd>キャッチフレーズ紹介</dd>
          <dt>PICK UP</dt>
          <dd>ピックアップ</dd>
          <dt>DATE AND TIME</dt>
          <dd>開催日時</dd>
          <dt>ENTRY TIME</dt>
          <dd>入場時間</dd>
          <dt>SPORTS DISCIPLINES</dt>
          <dd>競技紹介</dd>
          <dt>TOKYO DOME</dt>
          <dd>ドーム内地図</dd>
          <dt>WARM-UP VIDEO</dt>
          <dd>準備体操動画</dd>
          <dt>ACCESS</dt>
          <dd>アクセス</dd>
          <dt>FESTIVAL RULES</dt>
          <dd>ドーム内注意事項</dd>
        </dl>
        <div>
          <Link to="/subPage">
            <p>当日<br/><span>スケジュール</span></p>
            <img src='/img/page-btn.png'/>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MenuSub;