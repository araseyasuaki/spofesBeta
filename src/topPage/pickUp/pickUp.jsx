import React, { useEffect, useState, useRef } from 'react';
import { SectionTitle1 } from '../../common/sectionTitle/sectionTitle';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './pickUp.scss';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useEffect(() => {
    gsap.fromTo('.pu-slider',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.pu-slider',
          start: 'top 70%',
        }
      }
    );
    }, []);

  return (
    <section className='pickUp' id='pickUp'>
      <div className='pu-dec-box-1'>
        <div className='pu-dec-box-2'>
          <img src='./img/pu-memories-up-text.png' alt='pickUpのテキスト画像'/>
          <div/>
        </div>
      </div>
      <SectionTitle1 title={'photo memories'}/>
      <section className='pu-slider'>
        <div class="pu-wrap" ontouchstart="">
          <ul>
            <li>
              <div><img src="./img/pu-slider-img-1.png" alt="大玉送りをしている学生"/></div>
              <div><img src="./img/pu-slider-img-2.png" alt="頭上に紙風船をつけている騎馬戦"/></div>
            </li>
            <li>
              <div><img src="./img/pu-slider-img-3.png" alt="一斉に走り出す学生"/></div>
              <div><img src="./img/pu-slider-img-4.png" alt="玉入れをしている学生"/></div>
            </li>
            <li>
              <div><img src="./img/pu-slider-img-5.png" alt="大人数で肩を組んで楽しそうに写真を撮っている"/></div>
              <div><img src="./img/pu-slider-img-6.png" alt="リレー１位の優勝トロフィーを掲げている"/></div>
            </li>
          </ul>
          <ul>
            <li>
              <div><img src="./img/pu-slider-img-1.png" alt="大玉送りをしている学生"/></div>
              <div><img src="./img/pu-slider-img-2.png" alt="頭上に紙風船をつけている騎馬戦"/></div>
            </li>
            <li>
              <div><img src="./img/pu-slider-img-3.png" alt="一斉に走り出す学生"/></div>
              <div><img src="./img/pu-slider-img-4.png" alt="玉入れをしている学生"/></div>
            </li>
            <li>
              <div><img src="./img/pu-slider-img-5.png" alt="大人数で肩を組んで楽しそうに写真を撮っている"/></div>
              <div><img src="./img/pu-slider-img-6.png" alt="リレー１位の優勝トロフィーを掲げている"/></div>
            </li>
          </ul>
        </div>
        <div class="pu-wrap" ontouchstart="">
          <ul>
            <li>
              <div><img src="./img/pu-slider-img-11.png" alt="取材チームの集合写真"/></div>
              <div><img src="./img/pu-slider-img-12.png" alt="横断幕を準備している実行委員長"/></div>
            </li>
            <li>
              <div><img src="./img/pu-slider-img-13.png" alt="道具を準備している実行委員"/></div>
              <div><img src="./img/pu-slider-img-14.png" alt="ダルマを頭上で運んでいる生徒"/></div>
            </li>
            <li>
              <div><img src="./img/pu-slider-img-15.png" alt="東京ドームで入場待ちしている大勢の学生"/></div>
              <div><img src="./img/pu-slider-img-16.png" alt="東京ドームの入り口で入場の確認を取っている学生"/></div>
            </li>
          </ul>
          <ul>
            <li>
              <div><img src="./img/pu-slider-img-11.png" alt="取材チームの集合写真"/></div>
              <div><img src="./img/pu-slider-img-12.png" alt="横断幕を準備している実行委員長"/></div>
            </li>
            <li>
              <div><img src="./img/pu-slider-img-13.png" alt="道具を準備している実行委員"/></div>
              <div><img src="./img/pu-slider-img-14.png" alt="ダルマを頭上で運んでいる生徒"/></div>
            </li>
            <li>
              <div><img src="./img/pu-slider-img-15.png" alt="東京ドームで入場待ちしている大勢の学生"/></div>
              <div><img src="./img/pu-slider-img-16.png" alt="東京ドームの入り口で入場の確認を取っている学生"/></div>
            </li>
          </ul>
        </div>
      </section>

    </section>
  );
};

export default App;