// キャッチコピー
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './catchCopy.scss';

gsap.registerPlugin(ScrollTrigger);

const CatchCopy = () => {
  const [cpMvRespon, setcpMvRespon] = useState();
  const [cpMvIpRespon, setcpMvIpRespon] = useState();

  useEffect(() => {
    const cpMvNewLine = () => setcpMvRespon(window.innerWidth <= 800);
    const cpMvIpNewLine = () => setcpMvIpRespon(window.innerWidth <= 1300);

    gsap.fromTo('.cp-dec-box-1 p',
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.cp-dec-box-1 p',
          start: 'top 70%',
        }
      }
    );

    window.addEventListener('resize', cpMvNewLine);
    window.addEventListener('resize', cpMvIpNewLine);

    return () => {
      window.removeEventListener('resize', cpMvNewLine);
      window.removeEventListener('resize', cpMvIpNewLine);
    };
  }, []);

  return (
    <section className="catchCopy" id='catchCopy'>
      <div className='cp-dec-box-1'>
        <div className='cp-pc-box'>
          <p>今年のキャッチフレーズ<span>「New Challengers」</span>には、</p>
          <p>当日を楽しんでもらいたいという願いが込められています。</p>
          <p>そのために、</p>
          <p>スポーツフェスティバルに参加する全員が楽しめるように新しい取り組みを積極的に取り入れています。</p>
          <p>実行委員が一体となってイベントを作り上げることで、スポーツフェスティバル当日を皆で挑戦し、</p>
          <p>成功させる喜びを共有したいと考えています。</p>
        </div>
        <div className='cp-ip-box'>
          <p>今年のキャッチフレーズ</p>
          <p><span>「New Challengers」</span>には、</p>
          <p>当日を楽しんでもらいたいという願いが込められています。</p>
          <p>そのために、</p>
          <p>スポーツフェスティバルに参加する全員が楽しめるように</p>
          <p>新しい取り組みを積極的に取り入れています。</p>
          <p>実行委員が一体となってイベントを作り上げることで、</p>
          <p>スポーツフェスティバル当日を皆で挑戦し、</p>
          <p>成功させる喜びを共有したいと考えています。</p>
        </div>
        <div className='cp-mv-box'>
          <p>今年のキャッチフレーズ</p>
          <p><span>「New Challengers」</span>には、</p>
          <p>当日を楽しんでもらいたいという</p>
          <p>願いが込められています。</p>
          <p>そのために、</p>
          <p>スポーツフェスティバルに参加する全員が</p>
          <p>楽しめるように</p>
          <p>新しい取り組みを積極的に取り入れています。</p>
          <p>実行委員が一体となって</p>
          <p>イベントを作り上げることで、</p>
          <p>スポーツフェスティバル当日を皆で挑戦し、</p>
          <p>成功させる喜びを共有したいと考えています。</p>
        </div>
      </div>
      <div className='cp-dec-box-2'>
        <div className='cp-dec-line-1'/>
        <div className='cp-dec-bg-1'/>
      </div>
    </section>
  );
}

export default CatchCopy;
