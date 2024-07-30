// 準備体操動画
import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../../common/sectionTitle/sectionTitle'
import { LinkBtn } from '../../common/linkBtn/linkBtn'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './warmUp.scss'

gsap.registerPlugin(ScrollTrigger);

const WarmUp = () => {

  const [wuRespon, setWuRespon] = useState(window.innerWidth <= 800);

  useEffect(() => {
    gsap.fromTo('.wu-dec-text',
      {
        x: '-100%',
        opacity: 0,
      },
      {
        stagger: 0.2,
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.wu-dec-text p',
          start: 'top 70%',
        }
      }
    );
    gsap.fromTo('.wu-dec-text div',
      {
        scaleX: 1,
      },
      {
        stagger: 0.2,
        delay: .4,
        scaleX: 0,
        transformOrigin: '100% 50%',
        scrollTrigger: {
          trigger: '.wu-dec-text div',
          start: 'top 70%',
        }
      }
    );
    gsap.fromTo('.warmUp iframe',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.warmUp iframe',
          start: 'top 70%',
        }
      }
    );

    const handleResize = () => setWuRespon(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='warmUp' id='warmUp'>
      <div className='wu-dec-box-1'>
        <img src='/img/wu-warm-up-video-text.png' alt='warmUpのテキスト画像'/>
        <div/>
      </div>
      <SectionTitle title={'準備体操動画'}/>
      <div className='wu-dec-text'>
        <p>スポフェス前に体を動かして{wuRespon ? <br/> : ''}怪我を予防しよう！！</p>
        <div/>
      </div>
      <iframe src="https://www.youtube-nocookie.com/embed/mh93A87stAY?si=HjEc_G5KKaOGmuuc&amp;start=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
      <LinkBtn link={'https://youtu.be/mh93A87stAY?si=Jmlhe7dX5Fmz-QfL'} title={'YouTube'} imgNumber={'2'}/>
    </section>
  )
}

export default WarmUp