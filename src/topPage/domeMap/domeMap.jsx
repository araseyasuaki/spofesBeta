import React, { useEffect } from 'react';
import { SectionTitle1 } from '../../common/sectionTitle/sectionTitle'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './domeMap.scss'

gsap.registerPlugin(ScrollTrigger);

const DomeMap = () => {

  useEffect(() => {
    gsap.fromTo('.dm-dec-bg',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.dm-dec-bg',
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section className='domeMap' id='domeMap'>
      <img className='dm-dec-text-pc' src='./img/dm-pc-tokyo-dome-text.png' alt='tokyoDomeのテキスト画像'/>
      <img className='dm-dec-text-mv' src='./img/dm-mv-tokyo-dome-text.png' alt='tokyoDomeのテキスト画像'/>
      <SectionTitle1 title={'ドーム内地図'}/>
      <img className='dm-dec-bg dm-dec-bg-pc' src="./img/dm-pc-map-img.png" alt='東京ドーム内地図の画像'/>
      <img className='dm-dec-bg dm-dec-bg-mv' src="./img/dm-mv-map-img.png" alt='東京ドーム内地図の画像'/>
    </section>
  )
}

export default DomeMap