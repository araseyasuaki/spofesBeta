// ファーストビュー
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './firstViewTop.scss';

const FirstView = () => {
  const [ftRespon, setftRespon] = useState(window.innerWidth <= 800);

  useEffect(() => {
    gsap.fromTo('.ft-dec-ex-1',
      {
        scale: 1,
      },
      {
        transformOrigin: '100% 50%',
        scaleX: 0,
        delay: 1,
        duration: 0.8,
        ease: 'power4.out',
      }
    );
    gsap.fromTo('.ft-dec-ex-2',
      {
        scale: 1,
        y: '-50%',
        x: '-50%',
      },
      {
        y: '-50%',
        x: '-50%',
        scale: .5,
        rotateY: 360,
        duration: 1,
        ease: 'power4.out',
      }
    );
    gsap.to(".ft-dec-ex-2",
      {
        delay: 1,
        ease: 'power4.out',
        duration: .8,
        opacity: 0,
      }
    );
    gsap.fromTo('.ft-title-text-1 li h1',
      {
        x: '-130%',
        opacity: 0,
      },
      {
        stagger: 0.2,
        opacity: 1,
        x: 0,
        delay: 1.6,
        duration: 0.5,
        ease: 'power4.out',
      }
    );
    gsap.fromTo('.ft-title-text-1 li h1 span',
      {
        scaleX: 1,
      },
      {
        stagger: 0.2,
        delay: 2,
        scaleX: 0,
        transformOrigin: '100% 50%',
        duration: 0.5,
        ease: 'power4.out',
      }
    );

    const handleResize = () => setftRespon(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="first-viwe-Top">
      <div className='ft-dec-ex-1'/>
      <img className='ft-dec-ex-2' src="/img/ft-new-challengers-text.png"/>
      <ul className='ft-title-text-1'>
        <li><h1>第27回<span/></h1></li>
        <li><h1>スポーツフェスティバル<span/></h1></li>
        <li><h1>Sport Festival<span/></h1></li>
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
          <div className='ft-dec-1'><div></div></div>
          <p>2024.09.20（金）</p>
        </li>
        <li>
          <div className='ft-dec-1'><div></div></div>
          <p>東京ドーム Tokyo Dome</p>
        </li>
      </ul>
      <ul className='ft-dec-text-2'>
        <li>
          <div className='ft-dec-1'><div></div></div>
          <p>日本電子専門学校</p>
        </li>
        <li>
          <div className='ft-dec-1'><div></div></div>
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



