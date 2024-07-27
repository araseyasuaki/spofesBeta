import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './pageChange.scss'

function PageChange() {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className='pageChange'>
      {currentPath !== '/' && (
        <Link to="/">
          <p>TOP<br/><span>に戻ります</span></p>
          <img src='/img/page-btn.png'/>
        </Link>
      )}
      {currentPath !== '/subPage' && (
        <Link to="/subPage">
          <p>当日<br/><span>スケジュール</span></p>
          <img src='/img/page-btn.png'/>
        </Link>
      )}
      <div className='pc-box-1'/>
    </nav>
  );
}

export default PageChange;



// 100 60 58 53
//メニュー 10 10  25 22
// rinnku　10 10 30 30
// import React, { useState } from 'react';

// const AnimatedButton = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleButtonClick = () => {
//     setIsVisible(false); // ボタンを非表示にする

//     // 2秒後にボタンを再表示する
//     setTimeout(() => {
//       setIsVisible(true);
//     }, 2000);
//   };

//   return (
//     <div>
//       {isVisible && (
//         <button
//           style={{
//             width: '100px',
//             height: '100px',
//             borderRadius: '50%',
//             backgroundColor: 'blue',
//             color: 'white',
//             fontSize: '16px',
//             cursor: 'pointer',
//             display: 'block',
//             margin: '20px auto',
//           }}
//           onClick={handleButtonClick}
//         >
//           Click me
//         </button>
//       )}
//     </div>
//   );
// };

// export default AnimatedButton;
