import React, { useEffect } from 'react';
import { SectionTitle1 } from '../../common/sectionTitle/sectionTitle'
import { LinkBtn1 } from '../../common/linkBtn/linkBtn'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './warmUp.scss'

gsap.registerPlugin(ScrollTrigger);

const WarmUp = () => {

  useEffect(() => {
    gsap.fromTo('.wu-dec-text-1',
      {
        x: '-100%',
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        ease: 'power4.out',
        direction: .8,
        scrollTrigger: {
          trigger: '.wu-dec-text-1 p',
          start: 'top 70%',
        }
      }
    );
    gsap.fromTo('.wu-dec-text-1 div',
      {
        scaleX: 1,
      },
      {
        delay: .4,
        scaleX: 0,
        ease: 'power4.out',
        direction: .5,
        transformOrigin: '100% 50%',
        scrollTrigger: {
          trigger: '.wu-dec-text-1 div',
          start: 'top 80%',
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
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className='warmUp' id='warmUp'>
      <div className='wu-dec-box-1'>
        <img src='./img/wu-warm-up-video-text.png' alt='warmUpのテキスト画像'/>
        <div/>
      </div>
      <SectionTitle1 title={'準備体操動画'}/>
      <div className='wu-dec-text-1'>
        <p className='wu-dec-text-pc'>スポフェス前に体を動かして怪我を予防しよう！！</p>
        <p className='wu-dec-text-mv'>スポフェス前に体を動かして<br/>怪我を予防しよう！！</p>
        <div/>
      </div>
      <iframe src="https://www.youtube-nocookie.com/embed/mh93A87stAY?si=HjEc_G5KKaOGmuuc&amp;start=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
      <LinkBtn1 link={'https://youtu.be/mh93A87stAY?si=Jmlhe7dX5Fmz-QfL'} title={'YouTube'} imgNumber={'2'}/>
    </section>
  )
}

export default WarmUp