import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './firstViewTop.scss'

const FirstViewTop = () => {

  useEffect(() => {
    const ftDecEx1 = document.querySelector('.ft-dec-ex-1');
    const ftDecEx2 = document.querySelector('.ft-dec-ex-2');

    if (ftDecEx1) ftDecEx1.style.display = 'block';
    if (ftDecEx2) ftDecEx2.style.display = 'block';
    gsap.fromTo(ftDecEx1,
      {
        scale: 1,
      },
      {
        transformOrigin: '100% 50%',
        scaleX: 0,
        delay: 1,
        duration: 0.8,
        ease: 'power4.out',
        onComplete: () => {
          if (ftDecEx1) ftDecEx1.style.display = 'none';
        }
      }
    );
    gsap.fromTo(ftDecEx2,
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
    gsap.to(ftDecEx2,
      {
        delay: 1,
        ease: 'power4.out',
        duration: .8,
        opacity: 0,
        onComplete: () => {
          if (ftDecEx2) ftDecEx2.style.display = 'none';
        }
      }
    );
    gsap.fromTo('.ft-dec-text-ex-1',
      {
        x: '-130%',
        opacity: 0,
      },
      {
        stagger: 0.2,
        opacity: 1,
        x: 0,
        delay: 1.4,
        duration: 0.5,
        ease: 'power4.out',
      }
    );
    gsap.fromTo('.ft-dec-text-ex-2',
      {
        scaleX: 1,
      },
      {
        stagger: 0.2,
        delay: 1.8,
        scaleX: 0,
        transformOrigin: '100% 50%',
        duration: 0.5,
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <section className='firstViewTop'>
      <div className='ft-dec-ex-1' style={{ display: 'none' }} />
      <img className='ft-dec-ex-2' src="./img/ft-new-challengers-text.png" style={{ display: 'none' }} />
      <div className='ft-dec-box-1'>
        <h1 className='ft-title-text-1'>
          <span className='ft-dec-text-ex-1 ft-dec-text-ex-3'>第27回<span className='ft-dec-text-ex-2'/></span>
          <span className='ft-dec-text-ex-1'>スポーツフェスティバル<span className='ft-dec-text-ex-2'/></span>
          <span className='ft-dec-text-ex-1 ft-dec-text-ex-3'>Sports Festival<span className='ft-dec-text-ex-2'/></span>
        </h1>
        {/* <div className='ft-video-img'>
          <img src="./img/ft-video-img.jpg" alt="スポフェスのビデオの写真" />
        </div> */}
        <div className='ft-video-img'>
          <video loop autoPlay muted playsInline>
            <source src="./video/2024-digest.mp4" type="video/mp4" />
          </video>
        </div>
        <img className='ft-pc-fram-img' src='./img/ft-pc-frame.svg' alt='パソコンの動画の装飾用のフレーム画像'/>
        <img className='ft-mv-fram-img' src='./img/ft-mv-frame.svg' alt='スマホの動画の装飾用のフレーム画像'/>
        <img className='ft-dec-text-img' src="./img/ft-new-challengers-text.png" alt="cewChallengersのテキスト画像" />
      </div>
      <ul className='ft-dec-text-1'>
        <li>2024.09.20（金）</li>
        <li>東京ドーム Tokyo Dome</li>
      </ul>
      <ul className='ft-dec-text-2'>
        <li>日本電子専門学校</li>
        <li>Japan Electronics College</li>
      </ul>
      <div className='ft-dec-box-2'>
        <div className='ft-dec-line-1'/>
        <div className='ft-dec-line-2'/>
      </div>
      <div className='ft-dec-box-3'/>
    </section>
  )
}

export default FirstViewTop