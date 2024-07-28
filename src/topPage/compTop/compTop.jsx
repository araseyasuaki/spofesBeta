// 競技紹介（トップページ）
import React, { useState, useEffect, useRef } from 'react';
import { SectionTitle } from '../../common/sectionTitle/sectionTitle'
import { CompImg, NewImageCompImg, NewCompImg,ImageCompImg } from './compImg/compImg';
import { LinkBtnPageChange } from '../../common/linkBtn/linkBtn'
import { gsap } from 'gsap'
import './compTop.scss'

const CompTop = () => {

  const [ctRespon, setctRespon] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setctRespon(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='compTop' id='compTop'>
      <div className='ct-dec-box-1'>
        {ctRespon ?
        <img src='/img/ct-mv-sports-disoiplines-text.png'/>  :
        <img src='/img/ct-pc-sports-disoiplines-text.png'/>
        }
        <div/>
      </div>
      <SectionTitle title={'競技種目'}/>
      <ul>
        <CompImg classNumber={'1'} titleNumber={'01'} url={'1'} title={'クラス対抗リレー'}/>
        <CompImg classNumber={'2'} titleNumber={'02'} url={'2'} title={'運命共同体'}/>
        <CompImg classNumber={'3'} titleNumber={'03'} url={'3'} title={'だるま運びレース'}/>
        <NewImageCompImg classNumber={'4'} titleNumber={'04'} url={'4'} title={'借りもの競争'}/>
        <CompImg classNumber={'5'} titleNumber={'05'} url={'5'} title={'ウルトラクイズ'}/>
        <CompImg classNumber={'6'} titleNumber={'06'} url={'6'} title={'THE 決戦!!'}/>
        <CompImg classNumber={'7'} titleNumber={'07'} url={'7'} title={'なわ取り合戦'}/>
        <CompImg classNumber={'8'} titleNumber={'08'} url={'8'} title={'だるま神輿'}/>
        <CompImg classNumber={'9'} titleNumber={'09'} url={'9'} title={'一球入魂'}/>
        <CompImg classNumber={'10'} titleNumber={'10'} url={'10'} title={'玉げた'}/>
        <NewCompImg classNumber={'11'} titleNumber={'11'} url={'11'} title={'ゲーム対戦'}/>
        <CompImg classNumber={'12'} titleNumber={'12'} url={'12'} title={'色別対抗リレー'}/>
        <ImageCompImg classNumber={'13'} titleNumber={'13'} url={'13'} title={'ベースランニング'}/>
        <CompImg classNumber={'14'} titleNumber={'14'} url={'14'} title={'スピードガン'}/>
        <CompImg classNumber={'15'} titleNumber={'15'} url={'15'} title={'応援団長は君だ!'}/>
        <ImageCompImg classNumber={'16'} titleNumber={'16'} url={'16'} title={'謎解き'}/>
      </ul>
      <small>※準決勝と決勝は競技順番が異なりますので、{ctRespon ? <br/> : ''}<span>詳細はスケジュールページをご覧ください</span></small>
      <LinkBtnPageChange link={'subPage'} title={'詳しい競技紹介'} imgNumber={'2'}/>
    </section>
  )
}

export default CompTop