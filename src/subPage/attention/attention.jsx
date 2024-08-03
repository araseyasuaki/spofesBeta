import React, { useEffect } from 'react'
import { SectionTitle1 } from '../../common/sectionTitle/sectionTitle'
import { NtTitle2 } from '../../topPage/notes/ntTitle/ntTitle'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './attention.scss'

gsap.registerPlugin(ScrollTrigger);

const Attention = () => {

  useEffect(() => {
    for (let i = 1; i <= 6; i++) {
      const className = `.at-dec-ex-${i}`;
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
            start: 'top 70%',
          }
        }
      );
    }
  }, []);

  return (
    <section className='attention' id='attention'>
      <div className='at-dec-box-1'>
        <img src='./img/at-festival-rules-text.png' alt='festivalRulesのテキスト画像'/>
      <div/>
      </div>
      <SectionTitle1 title={'競技注意事項'}/>
      <section className='at-dec-ex-1'>
        <NtTitle2 classNumber={'1'} titleNumber={'01'} title={'服装について'}/>
        <ul>
          <li>服装は運動に適したもので競技に参加すること。</li>
          <li>委員会での判断により競技に参加できないことがあります。</li>
          <li>接触のある競技では、極力メガネを外したうえで競技に参加してください。</li>
        </ul>
      </section>
      <section className='at-dec-ex-2'>
        <NtTitle2 classNumber={'2'} titleNumber={'02'} title={'コスプレについて'}/>
        <ul>
          <li>危険なもの、風紀的に問題があるものは競技に参加しない場合においても没収となることがあります。アルバイト先等の制服に関しては着用を禁止します。</li>
        </ul>
      </section>
      <section className='at-dec-ex-3'>
        <NtTitle2 classNumber={'3'} titleNumber={'03'} title={'団体競技への参加について'}/>
        <ul>
          <li>人数を数えた上での競技を行います。飛び入り等は行わないこと。</li>
        </ul>
      </section>
      <section className='at-dec-ex-4'>
        <NtTitle2 classNumber={'4'} titleNumber={'04'} title={'選考について'}/>
        <ul>
          <li>基本的に全員参加のだるま運び・大玉を含め、一人が二種目以上に参加すること。多くの学生がだるま運び・大玉＋他の種目に参加となります。人数の割振り上、全員が２種目の競技に参加できない場合もあります。その場合は、だるま運び・大玉（全員参加）に加えて、オープン参加種目・アトラクション種目・エキシビジョン種目への参加をするようにしてください。当日チームを組む必要がある競技に欠席者が出た場合、代理を出せなければ失格になります。クラスの人数により、一人が二種目以上でることがあります。その際にはなるべく均等に割り当ててください。一人が５種目出場などはないように。招集の関係上、二種目以上出場する場合はなるべく連続した競技への参加にならないようにしてください。クラス対抗リレー参加者は色別対抗リレーに参加できません。</li>
        </ul>
      </section>
      <section className='at-dec-ex-5'>
        <NtTitle2 classNumber={'5'} titleNumber={'05'} title={'暴力行為について'}/>
        <ul>
          <li>暴力行為、またはそれに類する行為は禁止します。プレイの上ではフェアプレイを心掛け、競技終了後は NO SIDE の精神を持ちましょう。勝ちたい上でのプレイです。お互いを尊重する精神を持ってください。それでも暴力行為またそれに類する行為があった場合は、競技中であれど強制退場にします。またそういった行為をする傾向のある学生は、接触行為のある種目に出ることを禁止します。</li>
        </ul>
      </section>
      <section className='at-dec-ex-6'>
        <NtTitle2 classNumber={'6'} titleNumber={'06'} title={'当日の運用について'}/>
        <ul>
          <li>大会当日は、実行委員は担当係があるため、クラスの席にいることがありません。当日クラス席にいる学生の内で責任者を決め、だれがどの種目に参加するか把握し、参加選手に声掛けを行ってください。前項にもありますが、当日チームを組む必要がある競技に欠席者が出た場合、代理を出せなければ失格になります。必ず代理を出すようにしてください。またその場合には、前後の種目に参加していない方を選んでください。（競技の招集は前の競技中にかかるため、招集に間に合いません。）またその際も同じ学生が代理をし続けることが無いようにしてください。</li>
        </ul>
      </section>
    </section>
  )
}

export default Attention
