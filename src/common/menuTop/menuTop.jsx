import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import './menuTop.scss';

const MenuSub = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  const wrapTextInSpans = (text) => {
    return text.split('').map((char, index) => <span key={index}>{char}</span>);
  };

  const toggleMenu = () => {
    setMenuBtn(!menuBtn);
  };

  if(menuBtn){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  useEffect(() => {
      gsap.from("menuTop span",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: 'power2.out',
          delay: 0.2,
          stagger: {
            amount: 0.5,
            from: 'random'
          },
        }
      )
  }, [menuBtn])

  return (
    <div className='menuTop'>
      <div className={menuBtn ? 'active' : 'inactive'} onClick={menuBtn ? toggleMenu : null}/>
      <div className='menuBtn' onClick={toggleMenu}>
        <div className={`menuBer-1 ${menuBtn ? 'menuBer-1-off' : 'mt-ber-1-on'}`}/>
        <p className={`${menuBtn ? 'text-off' : ''}`}>MENU</p>
        <div className={`menuBer-2 ${menuBtn ? 'menuBer-2-off' : 'mt-ber-2-on'}`}/>
      </div>
      <nav className={menuBtn ? 'nav-on' : ''}>
        <dl>
          <dt>CATCH PHRASE</dt>
          <dd><a href="#catchCopy">{wrapTextInSpans('キャッチフレーズ紹介')}</a></dd>
          <dt>PICK UP</dt>
          <dd><a href="#pickUp">{wrapTextInSpans('ピックアップ')}</a></dd>
          <dt>DATE AND TIME</dt>
          <dd><a href="#openTime">{wrapTextInSpans('開催日時')}</a></dd>
          <dt>ENTRY TIME</dt>
          <dd><a href="#admissionTime">{wrapTextInSpans('入場時間')}</a></dd>
          <dt>SPORTS DISCIPLINES</dt>
          <dd><a href="#compTop">{wrapTextInSpans('競技紹介')}</a></dd>
          <dt>TOKYO DOME</dt>
          <dd><a href="#domeMap">{wrapTextInSpans('ドーム内地図')}</a></dd>
          <dt>WARM-UP VIDEO</dt>
          <dd><a href="#warmUp">{wrapTextInSpans('準備体操動画')}</a></dd>
          <dt>ACCESS</dt>
          <dd><a href="#access">{wrapTextInSpans('アクセス')}</a></dd>
          <dt>FESTIVAL RULES</dt>
          <dd><a href="#notes">{wrapTextInSpans('ドーム内注意事項')}</a></dd>
        </dl>
        <div>
          <Link to="/schedulePage">
            <p>当日<br/><span>スケジュール</span></p>
            <img src='./img/page-btn.png'/>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MenuSub;