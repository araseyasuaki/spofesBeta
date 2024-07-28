import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './menuSub.scss';

const MenuSub = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const [isClassAdded, setIsClassAdded] = useState(false);

  const toggleMenu = () => {
    setMenuBtn(prevMenuBtn => !prevMenuBtn);
    setTimeout(() => {
      setIsClassAdded(true);
    }, 1000);
  };

  return (
    <div className='menuSub'>
      <div onClick={toggleMenu}>
        <div className={`menuBer-1 ${menuBtn ? 'menuBer-1-off' : ''}`}/>
        <p className={`${menuBtn ? 'text-off' : ''}`}>MENU</p>
        <div className={`menuBer-2 ${menuBtn ? 'menuBer-2-off' : ''}`}/>
      </div>
      <nav className={menuBtn ? 'nav-on' : ''}>
        <dl>
          <dt>SCHEDULE</dt>
          <dd>スケジュール</dd>
        </dl>
        <dl>
          <dt>SPORTS DISCIPLINES</dt>
          <dd>詳しい競技紹介</dd>
        </dl>
        <div className='ms-list'>
          <ol>
            <li><a href="#cs-content-1"><span>01</span>クラス対抗リレー</a></li>
            <li><a href="#cs-content-2"><span>02</span>運命共同体</a></li>
            <li><a href="#cs-content-3"><span>03</span>だるま運びレース</a></li>
            <li><a href="#cs-content-4"><span>04</span>借り物競争</a></li>
            <li><a href="#cs-content-12"><span>05</span>ウルトラクイズ</a></li>
            <li><a href="#cs-content-5"><span>06</span>THE 決戦！！</a></li>
            <li><a href="#cs-content-6"><span>07</span>なわ取り合戦</a></li>
            <li><a href="#cs-content-7"><span>08</span>だるま神輿</a></li>
          </ol>
          <ol>
            <li><a href="#cs-content-8"><span>09</span>一球入魂</a></li>
            <li><a href="#cs-content-9"><span>10</span>玉げた</a></li>
            <li><a href="#cs-content-10"><span>11</span>ゲーム対戦</a></li>
            <li><a href="#cs-content-11"><span>12</span>色別対抗リレー</a></li>
            <li><a href="#cs-content-13"><span>13</span>ベースランニング</a></li>
            <li><a href="#cs-content-14"><span>14</span>スピードガン</a></li>
            <li><a href="#cs-content-15"><span>15</span>応援団長は君だ！</a></li>
            <li><a href="#cs-content-16"><span>16</span>謎解き</a></li>
          </ol>
        </div>
        <dl className='ms-dec-link-img'>
          <dt>Competition Manual</dt>
          <dd>
            競技マニュアル
            <a href=""><img src="/img/link-btn-img-2.png" alt="" /></a>
          </dd>
        </dl>
        <div className='ms-link'>
          <Link to="/">
            <p>TOP<br/><span>に戻ります</span></p><img src='/img/page-btn.png'/>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MenuSub;