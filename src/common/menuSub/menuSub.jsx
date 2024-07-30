import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import './menuSub.scss';

const MenuSub = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef(null);

  const wrapTextInSpans = (text) => {
    return text.split('').map((char, index) => <span key={index}>{char}</span>);
  };

  const toggleMenu = () => {
    if (!isAnimating) {
      setMenuBtn(!menuBtn);
    }
  };

  if(menuBtn){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  useEffect(() => {
    if(menuBtn){
      setIsAnimating(true);
      gsap.from(menuRef.current.querySelectorAll('span'), {
        opacity: 0,
        ease: 'power2.out',
        delay: 0.2,
        stagger: {
          amount: 0.7,
          from: 'random'
        },
        onComplete: () => setIsAnimating(false)
      })
    }
  }, [menuBtn])

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
        <div className='ms-list' ref={menuRef}>
          <ol>
            <li><a href="#cs-content-1"><p>01</p>{wrapTextInSpans('クラス対抗リレー')}</a></li>
            <li><a href="#cs-content-2"><p>02</p>{wrapTextInSpans('運命共同体')}</a></li>
            <li><a href="#cs-content-3"><p>03</p>{wrapTextInSpans('だるま運びレース')}</a></li>
            <li><a href="#cs-content-4"><p>04</p>{wrapTextInSpans('借り物競争')}</a></li>
            <li><a href="#cs-content-12"><p>05</p>{wrapTextInSpans('ウルトラクイズ')}</a></li>
            <li><a href="#cs-content-5"><p>06</p>{wrapTextInSpans('THE 決戦！！')}</a></li>
            <li><a href="#cs-content-6"><p>07</p>{wrapTextInSpans('なわ取り合戦')}</a></li>
            <li><a href="#cs-content-7"><p>08</p>{wrapTextInSpans('だるま神輿')}</a></li>
          </ol>
          <ol>
            <li><a href="#cs-content-8"><p>09</p>{wrapTextInSpans('一球入魂')}</a></li>
            <li><a href="#cs-content-9"><p>10</p>{wrapTextInSpans('玉げた')}</a></li>
            <li><a href="#cs-content-10"><p>11</p>{wrapTextInSpans('ゲーム対戦')}</a></li>
            <li><a href="#cs-content-11"><p>12</p>{wrapTextInSpans('色別対抗リレー')}</a></li>
            <li><a href="#cs-content-13"><p>13</p>{wrapTextInSpans('ベースランニング')}</a></li>
            <li><a href="#cs-content-14"><p>14</p>{wrapTextInSpans('スピードガン')}</a></li>
            <li><a href="#cs-content-15"><p>15</p>{wrapTextInSpans('応援団長は君だ！')}</a></li>
            <li><a href="#cs-content-16"><p>16</p>{wrapTextInSpans('謎解き')}</a></li>
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