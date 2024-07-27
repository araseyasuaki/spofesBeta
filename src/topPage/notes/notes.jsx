// 注意事項
import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../../common/sectionTitle/sectionTitle'
import NtTitle from './ntTitle/ntTitle'

import './notes.scss'

const Notes = () => {

  const [ntRespon, setNtRespon] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setNtRespon(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='notes' id='notes'>
      <div className='nt-dec-box-1'>
        {ntRespon ?
        <img src='/img/nt-mv-festival-rules-text.png'/> :
        <img src='/img/nt-pc-festival-rules-text.png'/>
        }
        <div/>
      </div>
      <SectionTitle title={'ドーム内注意事項'} />
      <section>
        <NtTitle classNumber={'1'} titleNumber={'01'} titleName={'入場'}/>
        <ul>
          <li>集合場所は、「22番ゲート」です。集合後、順次並んで入場して下さい。</li>
          <li>入場したら、女子は更衣室（イベントＢ）で着替え。男子は指定の座席内野席で着替えて下さい。</li>
          <li>不審者侵入防止のため、22番ゲートから入場する時に、セキュリティカードのチェックを行います。</li>
        </ul>
      </section>
      <section>
        <NtTitle classNumber={'2'} titleNumber={'02'} titleName={'服装・シューズ'}/>
        <ul>
          <li>服装は体操着が必須です。ジーパン、スラックス、ワイシャツ不可。また、アルバイト先等の制服は着用を禁止します。体操着以外の選手は出場できません。（ウルトラクイズ含む全種目） 召集の時点でチェックがあります。</li>
          <li>シューズは運動用シューズを着用して下さい。スパイク、ゴムスパイク、トレッキングシューズなど、靴底がデコボコしたものは不可。靴によっては競技参加できない場合があります。</li>
          <li>グランド内において、装飾品（ネックレス、指輪、イヤリング、ピアス、ピン止め等）の着用は禁止です。</li>
          <li>接触のある競技では怪我をする恐れがあるため、極力メガネを外したうえで競技に参加してください。</li>
        </ul>
      </section>
      <section>
        <NtTitle classNumber={'3'} titleNumber={'03'} titleName={'運動器具の持ち込み'}/>
        <ul>
          <li>野球用バット、ボール、グローブ等の競技に不要な用具の持ち込みは禁止します。</li>
          <li>サッカーボール、バレーボールなどの運動用具を持ち込まないでください。</li>
        </ul>
      </section>
      <section>
        <NtTitle classNumber={'4'} titleNumber={'04'} titleName={'食事・飲料'}/>
        <ul>
          <li>フェスティバル実施中、一時外出は許可しませんので、昼食は事前に準備して下さい。</li>
          <li>飲み物は、ペットボトルまたは水筒で持ち込んで下さい。（ビン、カンは×）養生シート上の指定場所で飲んで下さい。</li>
          <li>会場内にも売店(軽食1店舗のみ)がありますが、数に限りがあるため自宅近辺で準備する事をお勧めします。</li>
        </ul>
      </section>
      <section>
        <NtTitle classNumber={'5'} titleNumber={'05'} titleName={'応援'}/>
        <ul>
          <li>応援に必要なツールとして、メガホン、各色4本の応援大旗を提供します。（大会終了後返却）</li>
        </ul>
      </section>
      <section>
        <NtTitle classNumber={'6'} titleNumber={'06'} titleName={'貴重品'}/>
        <ul>
          <li>貴重品は、原則持ち込まないでください。各自の持ち物は、各自で管理して下さい。</li>
        </ul>
      </section>
      <section>
        <NtTitle classNumber={'7'} titleNumber={'07'} titleName={'タバコ・ゴミ'}/>
        <ul>
          <li>東京ドーム内は東京ドームの規定により禁煙となっています。</li>
          <li>ゴミは、各自でドーム内にあるゴミ箱に捨ててください。ゴミの分別（ペットボトル、可燃、不燃）に協力して下さい。</li>
        </ul>
      </section>
      <section>
        <NtTitle classNumber={'8'} titleNumber={'08'} titleName={'けが・体調不良'}/>
        <ul>
          <li>当日の朝などに体調がすぐれない場合、出席は控えて下さい。</li>
          <li>競技中の突発事故によるケガなどに対しては、実行委員が対応します。それ以外のケガ、体調不良の学生は「救護係」まで申し出て下さい。</li>
        </ul>
      </section>
      <section>
        <NtTitle classNumber={'9'} titleNumber={'09'} titleName={'立入禁止区域'}/>
        <ul>
          <li>本校関係者が立ち入ることができる場所は、22番ゲートから1塁側の1階内野席スタンドおよびその周辺とトイレ、ならびにグランドのみです。</li>
          <li>標識やフェンスで区分し、警備の先生が立ちますので、標識や先生の指示に従い、立入禁止区域には侵入しないようにして下さい。</li>
        </ul>
      </section>
      <section>
        <NtTitle classNumber={'10'} titleNumber={'10'} titleName={'終了後の退場'}/>
        <ul>
          <li>終了後、女子は更衣室に移動して着替えます。着替えが済みしだい、入場と逆経路で22番ゲートから退場して下さい。</li>
          <li>男子はクラス別座席で着替えます。速やかに着替えを済ませて、22番ゲートから退場して下さい。</li>
        </ul>
      </section>
      <section>
        <NtTitle classNumber={'11'} titleNumber={'11'} titleName={'SNS等での情報の取り扱い'}/>
        <ul>
          <li>写真撮影等は許可しますが、東京ドームや電子学園のイメージを損なうものの撮影、ならびにＳＮＳ等への投稿は禁止です。</li>
          <li>参加者や関係者のプライバシーを尊重し、個人情報を公開しないようにして下さい。</li>
          <li>投稿には適度なマナーを持ち、他者の意見・感情・多様性に配慮して下さい。</li>
        </ul>
      </section>
    </section>
  )
}

export default Notes