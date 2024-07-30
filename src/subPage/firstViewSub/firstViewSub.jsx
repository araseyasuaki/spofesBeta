import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './firstViewSub.scss'

const FirstViewSub = () => {

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
    gsap.fromTo('h2',
      {
        x: '-130%',
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1.6,
        duration: 0.5,
        ease: 'power4.out',
      }
    );
    gsap.fromTo('h2 span',
      {
        scaleX: 1,
      },
      {
        delay: 2,
        scaleX: 0,
        transformOrigin: '100% 50%',
        duration: 0.5,
        ease: 'power4.out',
      }
    );
  },[])

  return (
    <section className='firstViewSub'>
      <div className='ft-dec-ex-1'/>
      <img className='ft-dec-ex-2' src="/img/ft-new-challengers-text.png"/>
      <img className='fs-dec-img-1' src="/img/ft-new-challengers-text.png" alt="" />
      <h2>当日スケジュール＋詳しい競技紹介<span/></h2>
    </section>
  )
}

export default FirstViewSub