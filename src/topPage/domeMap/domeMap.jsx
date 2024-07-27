// 場内マップ
import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../../common/sectionTitle/sectionTitle'
import './domeMap.scss'

const DomeMap = () => {

  const [dmRespon, setDmRespon] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setDmRespon(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='domeMap' id='domeMap'>
      {dmRespon ?
        <img className='dm-dec-text' src='/img/dm-mv-tokyo-dome-text.png'/> :
        <img className='dm-dec-text' src='/img/dm-pc-tokyo-dome-text.png'/>
      }
      <SectionTitle title={'ドーム内地図'}/>
      {dmRespon ?
        <img className='dm-dec-bg' src="/img/dm-mv-map-img.png"/> :
        <img className='dm-dec-bg' src="/img/dm-pc-map-img.png"/>
      }
    </section>
  )
}

export default DomeMap