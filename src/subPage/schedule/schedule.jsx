import React, { useEffect } from 'react';
import { SectionTitle1 } from '../../common/sectionTitle/sectionTitle'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './schedule.scss'

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {

  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      const className = `.sd-dec-title-${i}`;
      const classNameNumber = `.sd-dec-title-${i} div`;
      gsap.fromTo(className,
        {
          opacity: 0,
          x: -100
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: className,
            start: 'top 70%',
          }
        }
      );
      gsap.fromTo(classNameNumber,
        {
          scaleX: 1,
        },
        {
          stagger: 0.2,
          delay: .4,
          scaleX: 0,
          duration: 0.5,
          transformOrigin: '100% 50%',
          scrollTrigger: {
            trigger: classNameNumber,
            start: 'top 70%',
          }
        }
      );
    }
    gsap.fromTo('.schedule ol li',
      {
        x: '-100%',
        opacity: 0,
      },
      {
        stagger: 0.05,
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.schedule ol li',
          start: 'top 70%',
        }
      }
    );
    gsap.fromTo('.sd-dec-box-2 section',
      {
        x: '-100%',
        opacity: 0,
      },
      {
        stagger: 0.2,
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.sd-dec-box-2',
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section className='schedule' id='schedule'>
      <div className='sd-dec-box-1'>
        <img src='./img/sd-schedule-text.png' alt='scheduleのテキスト画像'/>
        <div/>
      </div>
      <SectionTitle1 title={'スケジュール'}/>
      <div className='sd-dec-title-1'>
        <dl>
          <dt>オープニングセレモニー</dt>
          <dd>10:00〜</dd>
        </dl>
        <div />
      </div>
      <div className='sd-dec-title-2'>
        <dl>
          <dt>競技開始</dt>
          <dd>10:30〜</dd>
        </dl>
        <div/>
      </div>
      <ol>
        <li><a href="#cs-content-1"><span className='sd-dec-text-1'>01</span>クラス対抗リレー<span>(予選)</span></a></li>
        <li><a href="#cs-content-2"><span className='sd-dec-text-1'>02</span>運命共同体：二人三脚障害物競走</a></li>
        <li><a href="#cs-content-3"><span className='sd-dec-text-1'>03</span>だるま運びレース：色別対抗だるま運び</a></li>
        <li><a href="#cs-content-1"><span className='sd-dec-text-1'>04</span>クラス対抗リレー<span>(準決勝)</span></a></li>
        <li><a href="#cs-content-4"><span className='sd-dec-text-1'>05</span>借り物競争<span>(教員参加種目)</span></a></li>
        <li><a href="#cs-content-12"><span className='sd-dec-text-1'>06</span>ウルトラクイズ<span>(オープン参加)</span></a></li>
        <li><a href="#cs-content-5"><span className='sd-dec-text-1'>07</span>THE決戦！！：色別対抗騎馬戦</a></li>
        <li><a href="#cs-content-6"><span className='sd-dec-text-1'>08</span>なわ取り合戦：色別対抗縄取り</a></li>
        <li><a href="#cs-content-7"><span className='sd-dec-text-1'>09</span>だるま神輿：色別対抗だるま運びリレー</a></li>
        <li><a href="#cs-content-8"><span className='sd-dec-text-1'>10</span>一球入魂：色別対抗玉入れ</a></li>
        <li><a href="#cs-content-9"><span className='sd-dec-text-1'>11</span>玉げた：色別対抗大玉運び</a></li>
        <li><a href="#cs-content-10"><span className='sd-dec-text-1'>12</span>Top of fighters</a></li>
        <li><a href="#cs-content-1"><span className='sd-dec-text-1'>13</span>クラス対抗リレー<span>(決勝)</span></a></li>
        <li><a href="#cs-content-11"><span className='sd-dec-text-1'>14</span>色別対抗リレー</a></li>
      </ol>
      <div className='sd-dec-box-2'>
        <section className='sd-dec-box-3'>
          <h3>アトラクション種目</h3>
          <ul>
            <li><a href="#cs-content-13">・ベースランニング</a></li>
            <li><a href="#cs-content-14">・スピードガン</a></li>
          </ul>
        </section>
        <section className='sd-dec-box-4'>
          <h3>エキシビジョン種目</h3>
          <ul>
            <li><a href="#cs-content-15">・応援団長は君だ！</a></li>
            <li><a href="#cs-content-16">・謎解き</a></li>
          </ul>
        </section>
      </div>
      <div className='sd-dec-title-3'>
        <dl>
          <dt>エンディングセレモニー</dt>
          <dd>15:30〜</dd>
        </dl>
        <div/>
      </div>
    </section>
  )
}

export default Schedule