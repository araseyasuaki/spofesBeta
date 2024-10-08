import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './menuSub.scss';

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
      gsap.killTweensOf(".menuSub span");
      gsap.set(".menuSub span", { opacity: 0 });

      gsap.fromTo(".menuSub span",
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
      gsap.killTweensOf(".menuSub span");
      gsap.set(".menuSub span", { opacity: 0 });
    }
  }, [menuBtn]);

  return (
    <div className='menuSub'>
      <div className={menuBtn ? 'ms-active' : 'ms-inactive'} onClick={menuBtn ? toggleMenu : null}/>
      <div className='ms-btn' onClick={toggleMenu}>
        <div className={`ms-ber-1 ${menuBtn ? 'ms-ber-1-off' : 'ms-ber-1-on'}`}/>
        <div className='ms-dec-ex-1'>
          <p className={`${menuBtn ? 'ms-text-off' : ''}`} data-notranslate>MENU</p>
        </div>
        <div className={`ms-ber-2 ${menuBtn ? 'ms-ber-2-off' : 'ms-ber-2-on'}`}/>
      </div>
      <nav className={menuBtn ? 'ms-nav-on' : ''}>
        <dl>
          <dt>SCHEDULE</dt>
          <dd><a href="#schedule" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('スケジュール')}</a></dd>
        </dl>
        <dl>
          <dt>SPORTS DISCIPLINES</dt>
          <dd><a href="#compSub" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('詳しい競技紹介')}</a></dd>
        </dl>
        <div className='ms-nav-list'>
          <ol>
            <li className='ms-dec-text-nav-1'><a href="#cs-content-1" onClick={menuBtn ? toggleMenu : null}><p>01</p>{wrapTextInSpans('クラス対抗リレー')}<span className='ms-dec-text-nav-2'>{wrapTextInSpans('(予選)')}</span></a></li>
            <li><a href="#cs-content-2" onClick={menuBtn ? toggleMenu : null}><p>02</p>{wrapTextInSpans('運命共同体')}</a></li>
            <li><a href="#cs-content-3" onClick={menuBtn ? toggleMenu : null}><p>03</p>{wrapTextInSpans('だるま運びレース')}</a></li>
            <li className='ms-dec-text-nav-1'><a href="#cs-content-4" onClick={menuBtn ? toggleMenu : null}><p>04</p>{wrapTextInSpans('クラス対抗リレー')}<span className='ms-dec-text-nav-2'>{wrapTextInSpans('(準決勝)')}</span></a></li>
            <li><a href="#cs-content-5" onClick={menuBtn ? toggleMenu : null}><p>05</p>{wrapTextInSpans('借り物競争')}</a></li>
            <li><a href="#cs-content-6" onClick={menuBtn ? toggleMenu : null}><p>--</p>{wrapTextInSpans('ウルトラクイズ')}</a></li>
            <li><a href="#cs-content-7" onClick={menuBtn ? toggleMenu : null}><p>06</p>{wrapTextInSpans('THE 決戦！！')}</a></li>
            <li><a href="#cs-content-8" onClick={menuBtn ? toggleMenu : null}><p>07</p>{wrapTextInSpans('なわ取り合戦')}</a></li>
            <li><a href="#cs-content-9" onClick={menuBtn ? toggleMenu : null}><p>08</p>{wrapTextInSpans('だるま神輿')}</a></li>
          </ol>
          <ol>
            <li><a href="#cs-content-10" onClick={menuBtn ? toggleMenu : null}><p>09</p>{wrapTextInSpans('一球入魂')}</a></li>
            <li><a href="#cs-content-11" onClick={menuBtn ? toggleMenu : null}><p>10</p>{wrapTextInSpans('玉げた')}</a></li>
            <li><a href="#cs-content-12" onClick={menuBtn ? toggleMenu : null}><p>11</p><span>T</span><span>o</span><span className='ms-dec-text-1'>p</span><span>o</span><span className='ms-dec-text-2'>f</span><span>f</span><span>i</span><span>g</span><span>h</span><span>t</span><span>e</span><span>r</span><span>s</span></a></li>
            <li className='ms-dec-text-nav-1'><a href="#cs-content-13" onClick={menuBtn ? toggleMenu : null}><p>12</p>{wrapTextInSpans('クラス対抗リレー')}<span className='ms-dec-text-nav-2'>{wrapTextInSpans('(決勝)')}</span></a></li>
            <li><a href="#cs-content-14" onClick={menuBtn ? toggleMenu : null}><p>13</p>{wrapTextInSpans('色別対抗リレー')}</a></li>
            <li><a href="#cs-content-15" onClick={menuBtn ? toggleMenu : null}><p>--</p>{wrapTextInSpans('ベースランニング')}</a></li>
            <li><a href="#cs-content-16" onClick={menuBtn ? toggleMenu : null}><p>--</p>{wrapTextInSpans('スピードガン')}</a></li>
            <li><a href="#cs-content-17" onClick={menuBtn ? toggleMenu : null}><p>--</p>{wrapTextInSpans('応援団長は君だ！')}</a></li>
            <li><a href="#cs-content-18" onClick={menuBtn ? toggleMenu : null}><p>--</p>{wrapTextInSpans('謎解き')}</a></li>
          </ol>
        </div>
        <dl className='ms-pdf-link'>
          <dt>Competition Manual</dt>
          <dd>
            <a href="/spofes/manual.pdf" rel="noopener noreferrer">
              {wrapTextInSpans('競技マニュアル')}
              <img src="./img/link-btn-img-2.png" alt="リンクボタンの装飾画像" />
            </a>
          </dd>
        </dl>
        <dl>
          <dt>FESTIVAL RULES</dt>
          <dd><a href="#attention" onClick={menuBtn ? toggleMenu : null}>{wrapTextInSpans('競技注意事項')}</a></dd>
        </dl>
        <div className='ms-top-link' onClick={handlePageChange}>
          <div>
            <p>TOP<br/><span>に戻ります</span></p><img src='./img/page-btn.png'/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuSub;