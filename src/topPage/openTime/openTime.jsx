  // 開催日
import React, { useState, useEffect } from 'react';
import { IconSectionTitle } from '../../common/sectionTitle/sectionTitle'
import { LinkBtn } from '../../common/linkBtn/linkBtn'
import './openTime.scss'

const OpenTime = () => {

  const [otMvRespon, setOtMvRespon] = useState();

  useEffect(() => {
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
          <p>日時<span>024年9月20日(金)</span></p>
        </li>
        <li>
          <p>競技開始時間<span>午前10:00</span></p>
          <small>※入場時間は色別で異なります</small>
        </li>
        <li>
          <p>終了時間<span>午後03:00</span></p>
        </li>
        <li>
          <p>会場<span>東京ドーム・22番ゲート</span>{otMvRespon ? <br/> : ""}<span>東京都文京区後楽1-3-61</span></p>
        </li>
      </ul>
      <LinkBtn link={'#access'} title={'詳しいアクセス'} imgNumber={'1'}/>
    </section>
  )
}

export default OpenTime