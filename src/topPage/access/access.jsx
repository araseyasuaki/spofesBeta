// アクセス
import React, { useState, useEffect } from 'react';
import { IconSectionTitle } from '../../common/sectionTitle/sectionTitle'
import { LinkBtn } from '../../common/linkBtn/linkBtn'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './access.scss'

gsap.registerPlugin(ScrollTrigger);

const Access = () => {

  const [acRespon, setAcRespon] = useState(window.innerWidth <= 800);

  useEffect(() => {
    gsap.fromTo('.access ul li iframe',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.access iframe',
          start: 'top 70%',
        }
      }
    );
    gsap.fromTo('.access ul li p',
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
    gsap.fromTo('.ac-dec-span',
      {
        scaleX: 1,
      },
      {
        stagger: 0.2,
        delay: .4,
        scaleX: 0,
        transformOrigin: '100% 50%',
        scrollTrigger: {
          trigger: '.ac-dec-span',
          start: 'top 70%',
        }
      }
    );

    const handleResize = () => setAcRespon(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='access' id='access'>
      {acRespon ?
        <img src='/img/ac-mv-access-text.png'/> :
        <img src='/img/ac-pc-access-text.png'/>
      }
      <IconSectionTitle url={'/img/as-title-icon.png'} alt={'アクセスのタイトルのアイコン'} title={'アクセス'}/>
      <ul>
        <li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8414881514186!2d139.74941597511426!3d35.70551812864053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c4782eed4f3%3A0x5058b288249e640e!2z5p2x5Lqs44OJ44O844Og!5e0!3m2!1sja!2sjp!4v1721063681281!5m2!1sja!2sjp" title='Google Map' loading="lazy"/></li>
        <li>
          <p>丸の内線・南北線<span>後楽園駅</span><span className='ac-dec-span'/></p>
          <p>三田線<span>水道橋駅</span><span className='ac-dec-span'/></p>
          <p>JR総武線<span>水道橋駅</span><span className='ac-dec-span'/></p>
          <LinkBtn link={'https://maps.app.goo.gl/ZHz6B4DvxReGH7Yn7'} title={'Google Map'} imgNumber={'2'}/>
        </li>
      </ul>
    </section>
  )
}

export default Access