import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
import { SectionTitle1 } from '../../common/sectionTitle/sectionTitle';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './pickUp.scss';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const stickySections = useRef([]);
  const [swiperView, setSwiperView] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    gsap.fromTo('.swiper',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.swiper',
          start: 'top 70%',
        }
      }
    );
    gsap.fromTo('.pu-slider',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.pu-slider',
          start: 'top 70%',
        }
      }
    );

    const handleScroll = () => {
      stickySections.current.forEach((section) => {
        transform(section);
      });
    };
    const transform = (section) => {
    const offsetTop = section.parentElement.offsetTop;
    console.log(offsetTop)
    const scrollSection = section.querySelector(".pu-scroll-box-2");
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage = Math.max(0, Math.min(percentage, 250));
      scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => setSwiperView(window.innerWidth <= 1000);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);

  return (
    <section className='pickUp' id='pickUp'>
      <div className='pu-dec-box-1'>
        <div className='pu-dec-box-2'>
          <img src='./img/pu-pick-up-text.png' alt='pickUpのテキスト画像'/>
          <div/>
        </div>
      </div>
      <SectionTitle1 title={'ピックアップ'}/>
      <Swiper
        key={swiperView}
        navigation={true}
        loop={true}
        slidesPerView={swiperView ? 2 : 4}
        spaceBetween={0}
        pagination={{ clickable: true }}
        allowTouchMove={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={600}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper swiper1"
        centeredSlides={true}
        keyboard={{ enabled: true }}
      >
        <SwiperSlide className='pu-img-fram-1'>
          <div><div>
            <img src='./img/pu-img-1.jpg' alt='談笑している生徒'/>
            <p id='pu-font-size'>#実行委員で打ち合わせ中</p>
          </div></div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-2'>
          <div><div>
            <img src='./img/pu-img-2.jpg' alt='東京ドームの外観の写真'/>
            <p id='pu-font-size'>#後は頼みます</p>
          </div></div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-1'>
          <div><div>
            <img src='./img/pu-img-3.jpg' alt='ドーム内のグランドの写真'/>
            <p id='pu-font-size'>#ゆっくり〜ゆっくり〜</p>
          </div></div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-2'>
          <div><div>
            <img src='./img/pu-img-4.jpg' alt='集合写真を撮っている生徒達'/>
            <p id='pu-font-size'>#最後の１ピース</p>
          </div></div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-1'>
          <div><div>
            <img src='./img/pu-img-5.jpg' alt='コスプレをした生徒達'/>
            <p id='pu-font-size'>#よーい、スタート！</p>
          </div></div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-2'>
          <div><div>
            <img src='./img/pu-img-6.jpg' alt='客席から見たドーム内の景色'/>
            <p id='pu-font-size'>#１位おめでとう</p>
          </div></div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-1'>
          <div><div>
            <img src='./img/pu-img-7.jpg' alt='客席から見たドーム内の景色'/>
            <p id='pu-font-size'>#落とさないように頑張れー</p>
          </div></div>
        </SwiperSlide>
      </Swiper>
      <section className='pu-slider'>
        <div class="pu-wrap" ontouchstart="">
          <ul>
            <li>
              <img src="./img/pu-slider-img-1.png" alt="大玉送りをしている学生"/>
              <img src="./img/pu-slider-img-2.png" alt="頭上に紙風船をつけている騎馬戦"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-3.png" alt="一斉に走り出す学生"/>
              <img src="./img/pu-slider-img-4.png" alt="玉入れをしている学生"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-5.png" alt="大人数で肩を組んで楽しそうに写真を撮っている"/>
              <img src="./img/pu-slider-img-6.png" alt="リレー１位の優勝トロフィーを掲げている"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-7.png" alt="リレーでバトンを渡す瞬間"/>
              <img src="./img/pu-slider-img-8.png" alt="肩車をしている学生"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-9.png" alt="紙風船の騎馬戦の準備中"/>
              <img src="./img/pu-slider-img-10.png" alt="騎馬戦で上の人がピースをしている"/>
            </li>
          </ul>
          <ul>
          <li>
              <img src="./img/pu-slider-img-1.png" alt="大玉送りをしている学生"/>
              <img src="./img/pu-slider-img-2.png" alt="頭上に紙風船をつけている騎馬戦"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-3.png" alt="一斉に走り出す学生"/>
              <img src="./img/pu-slider-img-4.png" alt="玉入れをしている学生"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-5.png" alt="大人数で肩を組んで楽しそうに写真を撮っている"/>
              <img src="./img/pu-slider-img-6.png" alt="リレー１位の優勝トロフィーを掲げている"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-7.png" alt="リレーでバトンを渡す瞬間"/>
              <img src="./img/pu-slider-img-8.png" alt="肩車をしている学生"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-9.png" alt="紙風船の騎馬戦の準備中"/>
              <img src="./img/pu-slider-img-10.png" alt="騎馬戦で上の人がピースをしている"/>
            </li>
          </ul>
        </div>
        <div class="pu-wrap" ontouchstart="">
          <ul>
            <li>
              <img src="./img/pu-slider-img-11.png" alt="取材チームの集合写真"/>
              <img src="./img/pu-slider-img-12.png" alt="横断幕を準備している実行委員長"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-13.png" alt="道具を準備している実行委員"/>
              <img src="./img/pu-slider-img-14.png" alt="人工芝の上にシートを引く実行委員"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-15.png" alt="東京ドームで入場待ちしている大勢の学生"/>
              <img src="./img/pu-slider-img-16.png" alt="東京ドームの入り口で入場の確認を取っている学生"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-17.png" alt="野球場でボールを投げるコスプレイヤー"/>
              <img src="./img/pu-slider-img-18.png" alt="ダルマを運んでいる学生"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-19.png" alt="リレーのカーブで競っている学生"/>
              <img src="./img/pu-slider-img-20.png" alt="縄取りで倒れている学生"/>
            </li>
          </ul>
          <ul>
          <li>
              <img src="./img/pu-slider-img-11.png" alt="取材チームの集合写真"/>
              <img src="./img/pu-slider-img-12.png" alt="横断幕を準備している実行委員長"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-13.png" alt="道具を準備している実行委員"/>
              <img src="./img/pu-slider-img-14.png" alt="人工芝の上にシートを引く実行委員"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-15.png" alt="東京ドームで入場待ちしている大勢の学生"/>
              <img src="./img/pu-slider-img-16.png" alt="東京ドームの入り口で入場の確認を取っている学生"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-17.png" alt="野球場でボールを投げるコスプレイヤー"/>
              <img src="./img/pu-slider-img-18.png" alt="ダルマを運んでいる学生"/>
            </li>
            <li>
              <img src="./img/pu-slider-img-19.png" alt="リレーのカーブで競っている学生"/>
              <img src="./img/pu-slider-img-20.png" alt="縄取りで倒れている学生"/>
            </li>
          </ul>
        </div>
      </section>


    </section>
  );
};

export default App;