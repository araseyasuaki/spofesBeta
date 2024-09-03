import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import './menuTop.scss';

const MenuSub = ({ pageBtn, setPageBtn }) => {
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

  const disableSmoothScroll = () => {
    document.documentElement.style.scrollBehavior = 'auto';
  };

  const enableSmoothScroll = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
  };

  const handlePageChange = () => {
    setPageBtn(!pageBtn);
    disableSmoothScroll();
    setTimeout(() => enableSmoothScroll(), 100);
  };

  useEffect(() => {
    if (menuBtn) {
      gsap.killTweensOf(".menuTop span");
      gsap.set(".menuTop span", { opacity: 0 });

      gsap.fromTo(".menuTop span",
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
      );
    } else {
      gsap.killTweensOf(".menuTop span");
      gsap.set(".menuTop span", { opacity: 0 });
    }
  }, [menuBtn]);

  return (
    <div className='menuTop'>
      <div className={menuBtn ? 'mt-active' : 'mt-inactive'} onClick={menuBtn ? toggleMenu : null}/>
      <div className='mt-btn' onClick={toggleMenu}>
        <div className={`mt-ber-1 ${menuBtn ? 'mt-ber-1-off' : 'mt-ber-1-on'}`}/>
        <div className='mt-dec-ex-1'>
          <p className={`${menuBtn ? 'mt-text-off' : ''}`} data-notranslate>MENU</p>
        </div>
        <div className={`mt-ber-2 ${menuBtn ? 'mt-ber-2-off' : 'mt-ber-2-on'}`}/>
      </div>
      <nav className={menuBtn ? 'mt-nav-on' : ''}>
        <dl>
          <dt>CATCH PHRASE</dt>
          <dd><a href="#catchCopy" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('キャッチフレーズ紹介')}</a></dd>
          <dt>PICK UP</dt>
          <dd><a href="#pickUp" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('ピックアップ')}</a></dd>
          <dt>DATE AND TIME</dt>
          <dd><a href="#openTime" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('開催日時')}</a></dd>
          <dt>ENTRY TIME</dt>
          <dd><a href="#admissionTime" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('入場時間')}</a></dd>
          <dt>SPORTS DISCIPLINES</dt>
          <dd><a href="#compTop" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('競技紹介')}</a></dd>
          <dt>TOKYO DOME</dt>
          <dd><a href="#domeMap" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('ドーム内地図')}</a></dd>
          <dt>WARM-UP VIDEO</dt>
          <dd><a href="#warmUp" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('準備体操動画')}</a></dd>
          <dt>ACCESS</dt>
          <dd><a href="#access" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('アクセス')}</a></dd>
          <dt>FESTIVAL RULES</dt>
          <dd><a href="#notes" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('ドーム内注意事項')}</a></dd>
        </dl>
        <div>
          <div onClick={handlePageChange}>
            <p>当日<br/><span>スケジュール</span></p>
            <img src='./img/page-btn.png'/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuSub;