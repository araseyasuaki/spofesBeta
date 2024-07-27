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
        <img className={`${menuBtn ? 'img-off' : ''}`} src='/img/menu.png' alt='Menu icon' />
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
            <li><span>01</span>クラス対抗リレー</li>
            <li><span>02</span>運命共同体</li>
            <li><span>03</span>だるま運びレース</li>
            <li><span>04</span>借り物競争</li>
            <li><span>05</span>ウルトラクイズ</li>
            <li><span>06</span>THE 決戦！！</li>
            <li><span>07</span>なわ取り合戦</li>
            <li><span>08</span>だるま神輿</li>
          </ol>
          <ol>
            <li><span>09</span>一球入魂</li>
            <li><span>10</span>玉げた</li>
            <li><span>11</span>ゲーム対戦</li>
            <li><span>12</span>色別対抗リレー</li>
            <li><span>13</span>ベースランニング</li>
            <li><span>14</span>スピードガン</li>
            <li><span>15</span>応援団長は君だ！</li>
            <li><span>16</span>謎解き</li>
          </ol>
        </div>
        <dl className='ms-dec-link-img'>
          <dt>Competition Manual</dt>
          <dd>
            競技マニュアル
            <img src="/img/link-btn-img-2.png" alt="" />
          </dd>
        </dl>
        <div className='ms-link'>
          <Link to="/">
            <p>TOP<br/><span>に戻ります</span></p>
            <img src='/img/page-btn.png'/>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MenuSub;