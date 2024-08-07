import React, { useEffect } from 'react';
import { SectionTitle1 } from '../../common/sectionTitle/sectionTitle'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NtTitle1 } from './ntTitle/ntTitle'
import './notes.scss'

gsap.registerPlugin(ScrollTrigger);

const Notes = () => {

  useEffect(() => {
    for (let i = 1; i <= 15; i++) {
      const className = `.nt-dec-ex-${i}`;
      gsap.fromTo(className,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power4.out',
          duration: .8,
          scrollTrigger: {
            trigger: className,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section className='notes' id='notes'>
      <div className='nt-dec-box-1'>
        <img className='nt-dec-img-mv' src='./img/nt-mv-festival-rules-text.png' alt='festivalRulesのテキスト画像'/> :
        <img className='nt-dec-img-pc' src='./img/nt-pc-festival-rules-text.png' alt='festivalRulesのテキスト画像'/>
      <div/>
      </div>
      <SectionTitle1 title={'ドーム内注意事項'} />
      <section className='nt-dec-ex-1'>
        <NtTitle1 classNumber={'1'} titleNumber={'01'} title={'入場'}/>
        <ul>
          <li>集合場所は、「22番ゲート」です。ゲートには回転扉が3台あります。警備員の誘導に従って順次並んで入場してください。</li>
          <li>入場したら、女子は更衣室（イベントＢ）で着替え。男子は指定の座席内野席で着替えてください。着替え後は、指示があるまで指定された座席でスタンバイしてください。</li>
          <li>女子更衣室に行くまでの経路で一度グランドに降りますので、あらかじめ運動シューズに履き替えてください。</li>
          <li>メイン会場の準備が整い次第、放送での合図があります。グラウンドにてオープニング及び準備体操が行われます。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-2'>
        <NtTitle1 classNumber={'2'} titleNumber={'02'} title={'セキュリティカードについて'}/>
        <ul>
          <li>不審者侵入防止のため、22番ゲートから入場する時に、セキュリティカードのチェックを行います。</li>
          <li>セキュリティカードを忘れた場合は、ゲート横受付にて学籍番号と氏名のチェックを行います。</li>
          <li>なお、入場時には同時に手荷物チェックが行われます。危険物(ビン、カンほか)を持ち込まないでください。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-3'>
        <NtTitle1 classNumber={'3'} titleNumber={'03'} title={'服装・シューズ'}/>
        <ul>
          <li>服装は体操着が必須です。ジーパン、スラックス、ワイシャツ不可。また、アルバイト先等の制服は着用を禁止します。体操着以外の選手は出場できません。（ウルトラクイズ含む全種目） 召集の時点でチェックがあります。</li>
          <li>シューズは運動用シューズを着用してください。スパイク、ゴムスパイク、トレッキングシューズなど、靴底がデコボコしたものは不可。靴によっては競技参加できない場合があります。</li>
          <li>グランド内において、装飾品（ネックレス、指輪、イヤリング、ピアス、ピン止め等）の着用は禁止です。</li>
          <li>接触のある競技では怪我をする恐れがあるため、極力メガネを外したうえで競技に参加してください。</li>
          <li>コスプレ、着ぐるみに関しては、一般常識に反するものや、尖ったもの等の競技をするうえで危険性がないよう考慮した上で着用してください。実行委員が危険と判断した場合は競技に参加できない場合もあります。ハダカ厳禁。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-4'>
        <NtTitle1 classNumber={'4'} titleNumber={'04'} title={'運動器具の持ち込み'}/>
        <ul>
          <li>野球用バット、ボール、グローブ等の競技に不要な用具の持ち込みは禁止します。</li>
          <li>サッカーボール、バレーボールなどの運動用具を持ち込まないでください。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-5'>
        <NtTitle1 classNumber={'5'} titleNumber={'05'} title={'食事・飲料'}/>
        <ul>
          <li>フェスティバル実施中、一時外出は許可しませんので、昼食は事前に準備してください。</li>
          <li>会場内にも売店(軽食1店舗のみ)がありますが、数に限りがあるため自宅近辺で準備する事をお勧めします。</li>
          <li>飲み物は、ペットボトルまたは水筒で持ち込んでください。(ビン、カンは×)養生シート上の指定場所で飲んでください。</li>
          <li>給水所に水・スポーツドリンクを用意していますが、無くなり次第終了となります。</li>
          <li>昼食時間は定めません。出場競技の合間に各自とるようにしてください。 昼食場所は、養生シート上の指定場所です。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-6'>
        <NtTitle1 classNumber={'6'} titleNumber={'06'} title={'オープニング'}/>
        <ul>
          <li>オープニングには、各クラスの男女「クラス対抗リレー」選手が参加します。</li>
          <li>リレー選手は、メイン会場に移動したらすぐに受付に集合してエントリーを行ってください。5名そろわないと受付できません。受付が終わり次第、実行委員の指示に従い、中央に整列してオープニングに備えてください。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-7'>
        <NtTitle1 classNumber={'7'} titleNumber={'07'} title={'各競技の選手召集'}/>
        <ul>
          <li>原則、2つ前の競技終了後に召集の案内が放送されます。案内され次第召集場所に集合してください。</li>
          <li>選手に欠員がある場合、クラスまたは同色(クラス対抗リレーはクラスのみ)から代理をたててください。</li>
          <li>競技開始時点でメンバーが揃わない場合、失格になることがあります。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-8'>
        <NtTitle1 classNumber={'8'} titleNumber={'08'} title={'応援'}/>
        <ul>
          <li>応援は各色、クラスごとに行ってください。</li>
          <li>応援に必要なツールとして、各色 4 本の応援大旗を提供します。(大会終了後返却)</li>
        </ul>
      </section>
      <section className='nt-dec-ex-9'>
        <NtTitle1 classNumber={'9'} titleNumber={'09'} title={'貴重品'}/>
        <ul>
          <li>貴重品は、原則持ち込まないでください。各自の持ち物は、各自で管理してください。</li>
          <li>盗難にはいっさいの責任を負いかねます。貴重品を座席においたまま競技に参加しないようにしてください。</li>
          <li>女子更衣室(イベントB)に荷物を置かないようにお願いします。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-10'>
        <NtTitle1 classNumber={'10'} titleNumber={'10'} title={'タバコ・ゴミ'}/>
        <ul>
          <li>東京ドーム内は東京ドームの規定により禁煙となっています。</li>
          <li>ゴミは、各自でドーム内にあるゴミ箱に捨ててください。ゴミの分別（ペットボトル、可燃、不燃）に協力してください。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-11'>
        <NtTitle1 classNumber={'11'} titleNumber={'11'} title={'けが・体調不良'}/>
        <ul>
          <li>当日の朝などに体調がすぐれない場合、出席は控えてください。</li>
          <li>競技中の突発事故によるケガなどに対しては、実行委員が対応します。それ以外のケガ、体調不良の学生は「救護係」まで申し出てください。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-12'>
        <NtTitle1 classNumber={'12'} titleNumber={'12'} title={'立入禁止区域'}/>
        <ul>
          <li>本校関係者が立ち入ることができる場所は、22番ゲートから1塁側の1階内野席スタンドおよびその周辺とトイレ、ならびにグランドのみです。</li>
          <li>標識やフェンスで区分し、警備の先生が立ちますので、標識や先生の指示に従い、立入禁止区域には侵入しないようにしてください。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-13'>
        <NtTitle1 classNumber={'13'} titleNumber={'13'} title={'フィナーレ'}/>
        <ul>
          <li>フィナーレには、ファイナル種目「色別対抗リレー」の選手が参加します。</li>
          <li>該当の学生は、競技終了後、実行委員の指示に従いメイン会場中央に集合してください。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-14'>
        <NtTitle1 classNumber={'14'} titleNumber={'14'} title={'終了後の退場'}/>
        <ul>
          <li>終了後、女子は更衣室に移動して着替えます。着替えが済み次第、入場と逆経路で22番ゲートから退場してください。</li>
          <li>男子はクラス別座席で着替えます。速やかに着替えを済ませて、22番ゲートから退場してください。</li>
        </ul>
      </section>
      <section className='nt-dec-ex-15'>
        <NtTitle1 classNumber={'15'} titleNumber={'15'} title={'SNS等での情報の取り扱い'}/>
        <ul>
          <li>写真撮影等は許可しますが、東京ドームや電子学園のイメージを損なうものの撮影、ならびにＳＮＳ等への投稿は禁止です。</li>
          <li>参加者や関係者のプライバシーを尊重し、個人情報を公開しないようにしてください。</li>
          <li>投稿には適度なマナーを持ち、他者の意見・感情・多様性に配慮してください。</li>
        </ul>
      </section>
    </section>
  )
}

export default Notes
