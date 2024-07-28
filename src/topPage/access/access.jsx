// アクセス
import React, { useState, useEffect } from 'react';
import { IconSectionTitle } from '../../common/sectionTitle/sectionTitle'
import { LinkBtn } from '../../common/linkBtn/linkBtn'
import './access.scss'

const Access = () => {

  const [acRespon, setAcRespon] = useState(window.innerWidth <= 800);

  useEffect(() => {
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
          <p>丸の内線・南北線<span>後楽園駅</span></p>
          <p>三田線<span>水道橋駅</span></p>
          <p>JR総武線<span>水道橋駅</span></p>
          <LinkBtn link={'https://maps.app.goo.gl/ZHz6B4DvxReGH7Yn7'} title={'Google Map'} imgNumber={'2'}/>
        </li>
      </ul>
    </section>
  )
}

export default Access