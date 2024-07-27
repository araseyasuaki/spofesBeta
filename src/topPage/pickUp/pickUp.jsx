import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
import { SectionTitle } from '../../common/sectionTitle/sectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './pickUp.scss';

export default function App() {
  const [swiperView, setSwiperView] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => setSwiperView(window.innerWidth <= 1000);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='pickUp'>
      <div className='pk-dec-box-1'>
        <img src='/img/pu-pick-up-text.png'/>
        <div/>
      </div>
      <SectionTitle title={'ピックアップ'}/>
      <Swiper
        key={swiperView}
        navigation={true}
        loop={true}
        slidesPerView={swiperView ? 2 : 4}
        spaceBetween={0}
        pagination={{ clickable: true }}
        allowTouchMove={true}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        speed={1000}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        centeredSlides={true}
        keyboard={{ enabled: true }}
      >
        <SwiperSlide className='pu-img-fram-1'>
          <div>
            <a href='#warmUp'><img src='/img/pu-img-1.jpg' alt='Image 1'/><p>#スポフェス前に運動しよう</p></a>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-2'>
          <div>
            <a href='#access'><img src='/img/pu-img-2.jpg' alt='Image 2'/><p>#東京ドームに楽々到着</p></a>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-1'>
          <div>
            <a href='#domeMap'><img src='/img/pu-img-3.jpg' alt='Image 3'/><p>#事前に知る東京ドーム</p></a>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-2'>
          <div>
            <a href='#openTime'><img src='/img/pu-img-4.jpg' alt='Image 4'/><p>#入場時間10時じゃない！</p></a>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-1'>
          <div>
            <a href='#compTop'><img src='/img/pu-img-5.jpg' alt='Image 5'/><p>#新競技の注目ポイント</p></a>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pu-img-fram-2'>
          <div>
            <a href='#notes'><img src='/img/pu-img-6.jpg' alt='Image 6'/><p>#出場禁止！！なんで〜</p></a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}