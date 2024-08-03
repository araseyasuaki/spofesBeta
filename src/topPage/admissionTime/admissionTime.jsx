import React, { useEffect } from 'react';
import { SectionTitle1 } from './../../common/sectionTitle/sectionTitle'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './admissionTime.scss'

gsap.registerPlugin(ScrollTrigger);

const AdmissionTime = () => {

  useEffect(() => {
    gsap.fromTo('.at-dec-section-1',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.at-dec-section-1',
          start: 'top 70%',
        }
      }
    );
    gsap.fromTo('.at-dec-section-2',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.at-dec-section-2',
          start: 'top 70%',
        }
      }
    );
    gsap.fromTo('.at-dec-section-3',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.at-dec-section-3',
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section className='admissionTime' id='admissionTime'>
      <div className='at-dec-box-1'>
        <img src='./img/at-entry-time-text.png' alt='entryTimeのテキスト画像'/>
        <div/>
      </div>
      <SectionTitle1 title={'色別集合時間'}/>
      <section className='at-dec-section-1'>
        <h3>8:30</h3>
        <ul className='at-dec-text-color-1'>
          <li><h4 className='at-dec-text-bg-1'>赤</h4></li>
          <li>ゲーム制作科</li>
        </ul>
        <ul className='at-dec-text-color-2'>
          <li><h4 className='at-dec-text-bg-2'>黄</h4></li>
          <li>情報システム開発科</li>
          <li>ネットワークセキュリティ科</li>
          <li>電気工学科</li>
          <li>電子応用工学科</li>
        </ul>
      </section>
      <section className='at-dec-section-2'>
        <h3>8:45</h3>
        <ul className='at-dec-text-color-3'>
          <li><h4 className='at-dec-text-bg-3'>白</h4></li>
          <li>コンピュータグラフィックス研究科</li>
          <li>アニメーション研究科</li>
          <li>アニメーション科</li>
          <li>グラフィックデザイン科</li>
          <li>高度電気工学科</li>
        </ul>
        <ul className='at-dec-text-color-4'>
          <li><h4 className='at-dec-text-bg-4'>緑</h4></li>
          <li>ゲーム制作研究科</li>
          <li>電気工事技術科</li>
        </ul>
        <ul className='at-dec-text-color-5'>
          <li><h4 className='at-dec-text-bg-5'>紫</h4></li>
          <li>コンピュータグラフィックス科</li>
          <li>DXスペシャリスト科</li>
        </ul>
      </section>
      <section className='at-dec-section-3'>
        <h3>9:00</h3>
        <ul className='at-dec-text-color-6'>
          <li><h4 className='at-dec-text-bg-6'>橙</h4></li>
          <li>AIシステム科</li>
          <li>CG映像制作科</li>
          <li>iU専門職大学</li>
        </ul>
        <ul className='at-dec-text-color-7'>
          <li><h4 className='at-dec-text-bg-7'>桃</h4></li>
          <li>高度情報処理科</li>
          <li>ゲーム企画科</li>
          <li>モバイルアプリケーション開発科</li>
          <li>Webデザイン科</li>
        </ul>
        <ul className='at-dec-text-color-8'>
          <li><h4 className='at-dec-text-bg-8'>青</h4></li>
          <li>情報処理科</li>
        </ul>
      </section>
    </section>
  );
};

export default AdmissionTime