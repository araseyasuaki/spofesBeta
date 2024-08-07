import React, { useState, useEffect, useRef } from 'react';
import { SectionTitle1 } from '../../common/sectionTitle/sectionTitle';
import { CompImg1, CompImg2, CompImg3, CompImg4 } from './compImg/compImg';
import { LinkBtn2 } from '../../common/linkBtn/linkBtn';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './compTop.scss';

gsap.registerPlugin(ScrollTrigger);

const CompTop = ({ pageBtn, setPageBtn }) => {
  const [ctRespon, setctRespon] = useState(window.innerWidth <= 800);
  const compTopRef = useRef(null);


  const disableSmoothScroll = () => {
    document.documentElement.style.scrollBehavior = 'auto';
  };

  const enableSmoothScroll = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
  };

  const handlePageChange = () => {
    setPageBtn(!pageBtn);
    disableSmoothScroll();
    setTimeout(() => enableSmoothScroll(), 100);
  };

  useEffect(() => {
    gsap.fromTo(compTopRef.current.querySelectorAll('li'),
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.compTop',
          start: 'top 30%',
        }
      }
    );

    const handleResize = () => setctRespon(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='compTop' id='compTop'>
      <div className='ct-dec-box-1'>
        {ctRespon ?
          <img src='./img/ct-mv-sports-disoiplines-text.png' alt='sportsDisoiplinesのテキスト画像'/>  :
          <img src='./img/ct-pc-sports-disoiplines-text.png' alt='sportsDisoiplinesのテキスト画像'/>
        }
        <div/>
      </div>
      <SectionTitle1 title={'競技種目'}/>
      <ul ref={compTopRef}>
        <CompImg1 classNumber={'1'} titleNumber={'01'} imgNumber={'1'} title={'クラス対抗リレー'} alt={'クラス別のリレーで走っている生徒'}/>
        <CompImg1 classNumber={'2'} titleNumber={'02'} imgNumber={'2'} title={'運命共同体'} alt={'二人三脚で走る生徒'}/>
        <CompImg1 classNumber={'3'} titleNumber={'03'} imgNumber={'3'} title={'だるま運びレース'} alt={'ダルマを運んでレースをしている生徒'}/>
        <CompImg2 classNumber={'4'} titleNumber={'04'} imgNumber={'4'} title={'借りもの競争'} alt={'サングラスを掛けている生徒'}/>
        <CompImg1 classNumber={'5'} titleNumber={'05'} imgNumber={'5'} title={'ウルトラクイズ'} alt={'モニターに表示された二択のクイズに挑戦している生徒'}/>
        <CompImg1 classNumber={'6'} titleNumber={'06'} imgNumber={'6'} title={'THE 決戦!!'} alt={'騎馬戦で頭上にある紙風船を破り合う生徒'}/>
        <CompImg1 classNumber={'7'} titleNumber={'07'} imgNumber={'7'} title={'なわ取り合戦'} alt={'中央にある縄を自分の陣地に向けて引いている生徒'}/>
        <CompImg1 classNumber={'8'} titleNumber={'08'} imgNumber={'8'} title={'だるま神輿'} alt={'だるまを板の上に積みながら四人の生徒で運んでいる'}/>
        <CompImg1 classNumber={'9'} titleNumber={'09'} imgNumber={'9'} title={'一球入魂'} alt={'大勢の生徒が玉入れをしている'}/>
        <CompImg1 classNumber={'10'} titleNumber={'10'} imgNumber={'10'} title={'玉げた'} alt={'大玉を頭上から運んで早さを競っている生徒達'}/>
        <CompImg3 classNumber={'11'} titleNumber={'11'} imgNumber={'11'} title={'Top of fighters'} alt={'対人ゲームをしている二人の生徒'}/>
        <CompImg1 classNumber={'12'} titleNumber={'12'} imgNumber={'12'} title={'色別対抗リレー'} alt={'色別リレーで走っている生徒'}/>
        <CompImg4 classNumber={'13'} titleNumber={'13'} imgNumber={'13'} title={'ベースランニング'} alt={'野球のベースを走っている生徒'}/>
        <CompImg1 classNumber={'14'} titleNumber={'14'} imgNumber={'14'} title={'スピードガン'} alt={'マウンドに立ってボールを投げる生徒'}/>
        <CompImg1 classNumber={'15'} titleNumber={'15'} imgNumber={'15'} title={'応援団長は君だ!'} alt={'色別の旗を振って応援している生徒'}/>
        <CompImg1 classNumber={'16'} titleNumber={'16'} imgNumber={'16'} title={'謎解き'} alt={'謎解きをしている生徒'}/>
      </ul>
      <small>※準決勝と決勝は競技順番が異なりますので、{ctRespon && <br/>}<span>詳細はスケジュールページをご覧ください</span></small>
      <div onClick={handlePageChange}>
        <LinkBtn2 title={'詳しい競技紹介'} imgNumber={'2'}/>
      </div>
    </section>
  );
};

export default CompTop;