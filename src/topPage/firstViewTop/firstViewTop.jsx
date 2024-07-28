// ファーストビュー
import React, { useState, useEffect } from 'react';
import './firstViewTop.scss';

const FirstView = () => {

  const [ftRespon, setftRespon] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setftRespon(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="first-viwe-Top">
      <ul className='ft-title-text-1'>
        <li><p>第27回</p></li>
        <li><p>スポーツフェスティバル</p></li>
        <li><p>Sport Festival</p></li>
      </ul>
      <div className='ft-video'>
        <video loop autoPlay muted>
          <source src="/video/2024-digest.mp4" type="video/mp4"/>
        </video>
      </div>
      {ftRespon ?
        <img className="ft-video-frame" src="/img/ft-mv-frame.svg" alt='動画フレームの装飾画像'/> :
        <img className="ft-video-frame" src="/img/ft-pc-frame.svg" alt='動画フレームの装飾画像'/>
      }
      <ul className='ft-dec-text-1'>
        <li>
          <div><div></div></div>
          <p>2024.09.20（金）</p>
        </li>
        <li>
          <div><div></div></div>
          <p>東京ドーム Tokyo Dome</p>
        </li>
      </ul>
      <ul className='ft-dec-text-2'>
        <li>
          <div><div></div></div>
          <p>日本電子専門学校</p>
        </li>
        <li>
          <div><div></div></div>
          <p>Japan Electronics College</p>
        </li>
      </ul>
      <img className="ft-new-challengers" src="/img/ft-new-challengers-text.png"/>
      <div className='ft-dec-box-1'>
        <div className='ft-dec-line-1'/>
        <div className='ft-dec-line-2'/>
      </div>
      <div className="ft-dec-bg-1"></div>
    </section>
  );
}

export default FirstView;




