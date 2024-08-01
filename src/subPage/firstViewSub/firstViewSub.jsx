import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './firstViewSub.scss'

const FirstViewSub = () => {

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
    gsap.fromTo('.firstViewSub h2',
      {
        x: '-130%',
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1.4,
        duration: 0.5,
        ease: 'power4.out',
      }
    );
    gsap.fromTo('.firstViewSub h2 span',
      {
        scaleX: 1,
      },
      {
        delay: 1.8,
        scaleX: 0,
        transformOrigin: '100% 50%',
        duration: 0.5,
        ease: 'power4.out',
      }
    );
  },[])

  return (
    <section className='firstViewSub'>
      <div className='ft-dec-ex-1' style={{ display: 'none' }}/>
      <img className='ft-dec-ex-2' src="/img/ft-new-challengers-text.png" style={{ display: 'none' }}/>
      <img className='fs-dec-img-1' src="/img/ft-new-challengers-text.png" alt="" />
      <h2>当日スケジュール＋詳しい競技紹介<span/></h2>
    </section>
  )
}

export default FirstViewSub;
