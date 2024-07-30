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
        y: 80
      },
      {
        opacity: 1,
        y: 0,
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
        <p>今年のキャッチコピー{cpMvIpRespon ? <br/> : ""}<span>「New Challengers」</span>には、</p>
        <p>新しいことにチャレンジする大変さを{cpMvIpRespon ? <br/> : ""}一致団結が必要なスポーツフェスティバルを通して、</p>
        <p>クラスの仲間と{cpMvRespon ? <br/> : ""}共有できるような仲になることで、</p>
        <p>今後の学園生活を{cpMvRespon ? <br/> : ""}より豊かな時間にして欲しいという{cpMvIpRespon ? <br/> : ""}意味が込められています。</p>
      </div>
      <div className='cp-dec-box-2'>
        <div className='cp-dec-line-1'/>
        <div className='cp-dec-bg-1'/>
      </div>
    </section>
  );
}

export default CatchCopy;
