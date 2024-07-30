import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import TopPage from './topPage/topPage';
import SubPage from './subPage/subPage';
import PageChange from './common/pageChange/pageChange';
import { gsap } from 'gsap'
import './fonts.scss';
import './App.scss';

function App() {
  const location = useLocation();
  const [btn, setBtn] = useState(false);

  // useEffect(() => {
  //   setBtn(false);
  //   gsap.to(".load",
  //     {
  //       delay: 3.7,
  //       duration: 1,
  //       opacity: 0,
  //       ease: 'power4.out',
  //       onComplete: () => setBtn(true),
  //     }
  //   );
  //   gsap.fromTo(".ld-dec-img-1",
  //     {
  //       scale: 0,
  //       y: '-50%',
  //       x: '-50%',
  //     },
  //     {
  //       scale: 1,
  //       delay: 0.6,
  //       ease: 'bounce',
  //       rotationY: 180,
  //       duration: 1.5,
  //       y: '-30%',
  //       x: '-180%',
  //     },
  //   );
  //         gsap.to(".ld-dec-img-1",
  //       {
  //         delay: 3.7,
  //         ease: 'power4.out',
  //         duration: 1,
  //         opacity: 0,
  //       }
  //     );
  //   gsap.fromTo(".ld-dec-img-2",
  //     {
  //       scale: 0,
  //       y: '-50%',
  //       x: '-50%',
  //     },
  //     {
  //       delay: 0.8,
  //       scale: 1,
  //       rotationY: 180,
  //       ease: 'bounce',
  //       duration: 1.5,
  //       y: '0%',
  //       x: '-60%',
  //     },
  //   );
  //   gsap.to(".ld-dec-img-2",
  //     {
  //       delay: 3.7,
  //       ease: 'power4.out',
  //       duration: 1,
  //       opacity: 0,
  //     }
  //   );
  //   gsap.fromTo(".ld-dec-img-3",
  //     {
  //       scale: 0,
  //       y: '-50%',
  //       x: '-50%',
  //     },
  //     {
  //       delay: 1,
  //       scale: 1,
  //       ease: 'bounce',
  //       rotationY: 180,
  //       duration: 1.5,
  //       y: '-130%',
  //       x: '-170%',
  //     },
  //   )
  //   gsap.to(".ld-dec-img-3",
  //     {
  //       delay: 3.7,
  //       duration: 1,
  //       opacity: 0,
  //       ease: 'power4.out',
  //     }
  //   );
  // }, []);

  return (
    <>
      {/* <div className={`load ${btn ? 'load-off' : ''}`}>
        <img src="/img/ld-content-img-1.jpg" alt="" className='ld-dec-img-1'/>
        <img src="/img/ld-content-img-2.jpg" alt="" className='ld-dec-img-2'/>
        <img src="/img/ld-content-img-3.jpg" alt="" className='ld-dec-img-3'/>
      </div> */}
      <PageChange/>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TopPage />} />
        <Route path="/subPage" element={<SubPage />} />
      </Routes>
    </>
  );
}

export default App;