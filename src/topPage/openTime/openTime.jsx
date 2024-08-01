  // 開催日
import React, { useState, useEffect } from 'react';
import { IconSectionTitle } from '../../common/sectionTitle/sectionTitle'
import LinkBtn from '../../common/linkBtn/linkBtn'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './openTime.scss'

gsap.registerPlugin(ScrollTrigger);

const OpenTime = () => {

  const [otMvRespon, setOtMvRespon] = useState();

  useEffect(() => {
    gsap.fromTo('.openTime ul li',
      {
        x: '-100%',
        opacity: 0,
      },
      {
        stagger: 0.2,
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.openTime ul',
          start: 'top 70%',
        }
      }
    );
    gsap.fromTo('.openTime ul li div',
      {
        scaleX: 1,
      },
      {
        stagger: 0.2,
        delay: .4,
        scaleX: 0,
        transformOrigin: '100% 50%',
        scrollTrigger: {
          trigger: '.openTime ul',
          start: 'top 70%',
        }
      }
    );

    const otMvNewLine = () => setOtMvRespon(window.innerWidth <= 800);
    window.addEventListener('resize', otMvNewLine);
    return () => {
      window.removeEventListener('resize', otMvNewLine);
    };
  }, []);

  return (
    <section className='openTime' id='openTime'>
      <div className='ot-dec-box-1'>
        <img src='/img/ot-date-and-time-text.png' alt='dateAndTimeのテキスト画像'/>
        <div/>
      </div>
      <IconSectionTitle url={'/img/op-title-icon.png'} alt={'開催日時・場所のタイトルのアイコン'} title={'開催日時・場所'}/>
      <ul>
        <li>
          <p>日時<span>2024年9月20日(金)</span></p>
          <div/>
        </li>
        <li>
          <p>競技開始時間<span>午前10:00</span></p>
          <small>※入場時間は色別で異なります</small>
          <div/>
        </li>
        <li>
          <p>終了時間<span>午後03:00</span></p>
          <div/>
        </li>
        <li>
          <p>会場<span>東京ドーム・22番ゲート</span>{otMvRespon ? <br/> : ""}<span>東京都文京区後楽1-3-61</span></p>
          <div/>
        </li>
      </ul>
      <LinkBtn link={'#access'} title={'詳しいアクセス'} imgNumber={'1'}/>
    </section>
  )
}

export default OpenTime