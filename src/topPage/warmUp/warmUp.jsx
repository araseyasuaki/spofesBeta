// 準備体操動画
import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../../common/sectionTitle/sectionTitle'
import { LinkBtn } from '../../common/linkBtn/linkBtn'
import './warmUp.scss'

const WarmUp = () => {

  const [wuRespon, setWuRespon] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setWuRespon(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='warmUp' id='warmUp'>
      <div className='wu-dec-box-1'>
        <img src='/img/wu-warm-up-video-text.png'/>
        <div/>
      </div>
      <SectionTitle title={'準備体操動画'}/>
      <p>スポフェス前に体を動かして{wuRespon ? <br/> : ''}怪我を予防しよう！！</p>
      <iframe src="https://www.youtube-nocookie.com/embed/mh93A87stAY?si=HjEc_G5KKaOGmuuc&amp;start=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
      <LinkBtn link={'https://youtu.be/mh93A87stAY?si=Jmlhe7dX5Fmz-QfL'} title={'YouTube'} imgNumber={'2'}/>
    </section>
  )
}

export default WarmUp