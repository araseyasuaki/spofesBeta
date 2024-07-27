// キャッチコピー
import React, { useState, useEffect } from 'react';
import './catchCopy.scss';

const CatchCopy = () => {

  const [cpMvRespon, setcpMvRespon] = useState();
  const [cpMvIpRespon, setcpMvIpRespon] = useState();

  useEffect(() => {
    const cpMvNewLine = () => setcpMvRespon(window.innerWidth <= 800);
    const cpMvIpNewLine = () => setcpMvIpRespon(window.innerWidth <= 1300);

    window.addEventListener('resize', cpMvNewLine);
    window.addEventListener('resize', cpMvIpNewLine);

    return () => {
      window.removeEventListener('resize', cpMvNewLine);
      window.removeEventListener('resize', cpMvIpNewLine);
    };
  }, []);

  return (
    <section className="catch-copy">
      {/* <h2><span>「New Challengers」</span>には{cpMvIpRespon ? <br/> : ""}当日を楽しんでもらいたいという{cpMvRespon ? <br/> : ""}願いが込められています。</h2>
      <h2>そのために、準備の段階から{cpMvRespon ? <br/> : ""}楽しむことを大切にし、{cpMvIpRespon ? <br/> : ""}新しい取り組みを積極的に取り入れています。</h2>
      <h2>本部では競技を提案したり、{cpMvRespon ? <br/> : ""}Googleチャットを導入して実行委員が{cpMvIpRespon ? <br/> : ""}コミュニケーションを取りながら{cpMvRespon ? <br/> : ""}一緒に作業を進めています。</h2>
      <h2>このように、実行委員が一体となって{cpMvRespon ? <br/> : ""}イベントを作り上げることで、{cpMvIpRespon ? <br/> : ""}<span>スポーツフェスティバル当日を皆で挑戦し、</span></h2>
      <h2>成功させる喜びを共有したいと考えています。テスト</h2> */}
      <p>今年のキャッチコピー{cpMvIpRespon ? <br/> : ""}<span>「New Challengers」</span>には、</p>
      <p>新しいことにチャレンジする大変さを{cpMvIpRespon ? <br/> : ""}一致団結が必要なスポーツフェスティバルを通して、</p>
      <p>クラスの仲間と{cpMvRespon ? <br/> : ""}共有できるような仲になることで、</p>
      <p>今後の学園生活を{cpMvRespon ? <br/> : ""}より豊かな時間にして欲しいという{cpMvIpRespon ? <br/> : ""}意味が込められています。</p>
      <div className='cp-dec-box-1'>
        <div className='cp-dec-line-1'/>
        <div className='cp-dec-bg-1'/>
      </div>
    </section>
  );
}

export default CatchCopy;
