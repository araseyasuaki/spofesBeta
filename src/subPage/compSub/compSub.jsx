import React, { useEffect } from 'react';
import { SectionTitle1 } from '../../common/sectionTitle/sectionTitle'
import { Left1, Left2 } from './left/left'
import { Right0, Right1, Right2 } from './right/right'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './compSub.scss'

gsap.registerPlugin(ScrollTrigger);

const CompSub = () => {

  useEffect(() => {
    for (let i = 1; i <= 16; i++) {
      const className = `#cs-content-${i}`;
      gsap.fromTo(className,
        {
          opacity: 0,
          x: -100
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power4.out',
          x: 0,
          scrollTrigger: {
            trigger: className,
            start: 'top 70%',
          }
        }
      );
      gsap.fromTo(`#cs-content-${i} div h3 span`,
        {
          scaleX: 1,
        },
        {
          delay: .2,
          scaleX: 0,
          duration: 0.5,
          transformOrigin: '100% 50%',
          ease: 'power4.out',
          scrollTrigger: {
            trigger: className,
            start: 'top 70%',
          }
        }
      );
    }
  }, []);

  return (
    <section className='compSub' id='compSub'>
      <div className='cs-dec-box-1'>
        <img src='./img/cs-competition-text.png' alt='competitionのテキスト画像'/>
        <div/>
      </div>
      <SectionTitle1 title={'詳しい競技紹介'}/>
      <ol className='cs-list'>
        <Left1
          title={'クラス対抗リレー'}
          titleNumber={'01'}
          text={'スポーツフェスティバルで唯一、色ではなくクラス同士で競うリレー競技です。この競技は男子の部、女子の部それぞれ男女5人ずつに分かれて行われ、男女それぞれの優勝クラスには校長杯が授与されます。足の速い人を揃えて優勝を目指すクラス、パフォーマンスを繰り広げるクラスもあり、多くの競技の中でも一番盛り上がる種目と言えるでしょう!'}
          list1={'走る距離は勝ち抜く毎に増えていきます。'}
          img={'1'}
          alt={'クラス別のリレーで走っている生徒'}
          id={'1'}
          />
        <Right2
          title={'運命共同体'}
          titleNumber={'02'}
          text={'2人の足をバントで結んで障害物を超えていく、2人3脚障害物競走です。各色15組30名が出場します。男子同士、女子同士、カップルでも、︎組み合わせは自由です。この競技がきっかけで永遠のパートナーになれるかも⁉︎'}
          list1={'悪路通過  ふわふわなマットの上を2人で通過します。'}
          list2={'輪くぐり  フラフープをひとつ拾って頭から足先まで通します。'}
          imgNumber={'2'}
          alt={'二人三脚で走る生徒'}
          idNumber={'2'}
        />
        <Left2
          title={'だるま運びレース'}
          titleNumber={'03'}
          text={'「だるま落としのだるま」を運び、立て終わるまでのタイムを競う、全員参加のタイムレースです。 各色の応援席からスタートし、1回目の合図から30秒間で開始位置に並び、2回目の合図からだるまをバケツリレーの要領で手渡しで送ります。全員で協力して素早くダルマを回しましょう!'}
          list1={'だるまを持って歩く、走るなどの移動は禁止'}
          list2={'だるまを投げる行為は禁止'}
          imgNumber={'3'}
          alt={'ダルマを運んでレースをしている生徒'}
          idNumber={'3'}
        />
        <Right0
          title={'借り物競争'}
          titleNumber={'04'}
          text={'借り物競争は先生と学生が協力して行う競技です。先生がジェスチャーをし、学生は先生のジェスチャーから探しているモノを予想して先生に貸します。制限時間1分半以内にゴールできた先生の色の合計得点で順位が決まります。先生と心が通じ合う学生達ならすぐに伝わるかも...⁉︎'}
          list1={'各色先着3名の先生が持ってきたアイテムの合計点数で順位が決まります。'}
          img={'4'}
          alt={'サングラスを掛けている生徒'}
          id={'4'}
        />
        <Left1
          title={'THE 決戦！！'}
          titleNumber={'05'}
          text={'4人1組を1騎とし、各色10騎で行うトーナメント方式の騎馬戦です。試合は30秒の1本勝負で、会場を2箇所に分けて同時進行で行われます。勝敗はヘルメットについている風船が残っている騎馬の数で決まります。白熱が予想されますが、暴力行為はしないように!'}
          list1={'同点の場合はサドンデス方式で勝敗が決まります。'}
          img={'6'}
          alt={'騎馬戦で頭上にある紙風船を破り合う生徒'}
          id={'5'}
        />
        <Right1
          title={'なわ取り合戦'}
          titleNumber={'06'}
          text={'中央にある縄を自分の陣地に多く持ち込んだチームが勝利する各色40人で行うトーナメント方式のなわ取り競技です。この競技は1回戦を30秒2本、2回戦以降は30秒1本行います。リボンを巻いた高得点の縄が一本あり、同点の場合はその縄があるチームの勝利となります。簡単に取れる縄も、取り合いになる縄もあるでしょう。チームで作戦を立てて多くの縄を持ち帰りましょう!'}
          list1={'陣地に入っている縄を奪う行為は禁止です。'}
          imgNumber={'7'}
          alt={'中央にある縄を自分の陣地に向けて引いている生徒'}
          idNumber={'6'}
        />
        <Left2
          title={'だるま神輿'}
          titleNumber={'07'}
          text={'板の上にだるまの頭を含めて合計6段を積み重ねていきながらリレーをする競技です。各色4人10組40名が参加します。だるまのパーツは2、4、6、8、10走に配布され、スタートから徐々に高くなっていきます。4色毎の予選を2回行い、上位レース、下位レースを行って1位から8位までを決定します。かなり崩れやすいのでバランスがとても重要です!'}
          list1={'途中で崩してしまった場合は止まってやり直しです。'}
          list2={'ダルマを手で支える行為は禁止です。'}
          img={'8'}
          alt={'だるまを板の上に積みながら四人の生徒で運んでいる'}
          id={'7'}
        />
        <Right2
          title={'一球入魂'}
          titleNumber={'08'}
          text={'各色45名が出場する、制限時間1分の玉入れ競技です。玉は色を混ぜて各色200個ずつ用意してあります、自分の色の玉をカゴに入れてください。即席のチームですが、玉を持ってくる人、入れる人と、チームワークを発揮して行いましょう!'}
          list1={'暴力行為や強奪行為など、相手の競技の妨げになる行為は禁止です。'}
          list2={'入れた玉の色が異なる場合は1個につき1点減点になります。'}
          imgNumber={'9'}
          alt={'大勢の生徒が玉入れをしている'}
          idNumber={'8'}
        />
        <Left2
          title={'玉げた'}
          titleNumber={'09'}
          text={'各色全員が出場し、大玉を運んでその速さを競う競技です。トラックを一周、スタート地点のコーンに大玉を戻してゴールとなります。トラックの四隅にはだるまが設置されており、その外側を回ります。制限時間2分のタイムレースで、勝敗はゴールした時間で決まります。参加人数は多いですが、トラックすべてをカバーできません。人が少ないところは、急いで補助に向かいましょう!'}
          list1={'大玉を戻してもだるまが倒れている場合はゴール扱いになりません。'}
          list2={'ゴールできない場合は2分として記録します。'}
          imgNumber={'10'}
          alt={'大玉を頭上から運んで早さを競っている生徒達'}
          idNumber={'9'}
        />
        <Right2
          title={'Top of fighters'}
          titleNumber={'10'}
          text={'9月上旬に行われる予選を勝ち抜いた上位2チームが東京ドームで頂上決戦！1チーム 3名とし、順番に1対1の試合を行い先に2勝したチームが優勝の3ストック制で行います。'}
          list1={'試合はエキシビジョンマッチとして行うため、得点はありません。'}
          list2={'予選参加方法についてはクラス実行委員、担任を通じてお知らせします。'}
          imgNumber={'11'}
          alt={'対人ゲームをしている二人の生徒'}
          idNumber={'10'}
        />
        <Left2
          title={'色別対抗リレー'}
          titleNumber={'11'}
          text={'クラス対抗リレーとは異なり、色別に10名選抜メンバーを集めて行う色別対抗のリレーで、1レース決勝です。スポーツフェスティバル最後の種目になり、総合成績にも大きく関わる競技です。'}
          list1={'コースはスタート前の抽選で決定します。'}
          list2={'9走と10走は約1周で走る距離が長くなります。'}
          imgNumber={'12'}
          alt={'色別リレーで走っている生徒'}
          idNumber={'11'}
        />
        <Right0
          title={'ウルトラクイズ'}
          titleNumber={'12'}
          text={'電子学園にまつわる⚪︎×クイズが出題されます。クイズの回答に最後まで正解し続けた人が勝者となります。10人以下になった時点で残っている人の色に得点が入ります。'}
          imgNumber={'5'}
          alt={'モニターに表示された二択のクイズに挑戦している生徒'}
          idNumber={'12'}
        />
        <Left1
          title={'ベースランニング'}
          titleNumber={'13'}
          text={'1塁ベースから3塁ベースまで約50mの距離のタイムを競う競技です。1〜3塁ベースまでを順番に踏んでゴールします。1日を通した記録で順位が決まります。1位から3位までの選手の色には得点が入ります。'}
          list1={'競技へ参加できるのは1回のみです。'}
          imgNumber={'13'}
          alt={'野球のベースを走っている生徒'}
          idNumber={'13'}
        />
        <Right2
          title={'スピードガン'}
          titleNumber={'14'}
          text={'ホームベース前に設置されたスピードガンに向かってボールを投げ、投球速度を競う競技です。マウンドから1人2球ずつ投球し、球速の速かった方の記録が選手の記録となります。1日を通した記録で順位が決まります。1位から3位までの選手の色には得点が入ります。'}
          list1={'競技へ参加できるのは1回のみです。'}
          list2={'希望者が多い場合は受付順となり、参加できない場合もあります。'}
          imgNumber={'14'}
          alt={'マウンドに立ってボールを投げる生徒'}
          idNumber={'14'}
        />
        <Left1
          title={'応援団長は君だ！'}
          titleNumber={'15'}
          text={'競技の合間に不定期に開催されるエキシビジョン種目です。勝利条件は目立つこと!競技が始まったらカメラに向かってアピール開始!アナウンサーの独断と偏見により勝利者が決定します。勝利した選手の色には得点が入ります。'}
          list1={'運動が苦手な人も是非参加してみてください!'}
          imgNumber={'15'}
          alt={'色別の旗を振って応援している生徒'}
          idNumber={'15'}
        />
        <Right0
          title={'謎解き！'}
          titleNumber={'16'}
          text={'東京ドームの通路を利用して行うタイムレースの謎解きです。5人チームでの参加となります。1位から3位までのチームの選手の色には得点が入ります。'}
          imgNumber={'16'}
          alt={'謎解きをしている生徒'}
          idNumber={'16'}
        />
      </ol>
    </section>
  )
}

export default CompSub
