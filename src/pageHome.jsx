import React, { useState, useEffect } from 'react';
import PageChange from './common/pageChange/pageChange';
import TopPage from './topPage/topPage';
import SubPage from './subPage/subPage';
import MenuTop from './common/menuTop/menuTop'
import MenuSub from './common/menuSub/menuSub'

const PageHome = () => {
  const [pageBtn, setPageBtn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageBtn]);

  return (
    <>
      <div onClick={() => { setPageBtn(!pageBtn) }}>
        {pageBtn ?
          <PageChange text1={'TOP'} text2={'に戻ります'} />
          :
          <PageChange text1={'当日'} text2={'スケジュール'} />
        }
      </div>
      {pageBtn ?
        <>
          <MenuSub pageBtn={pageBtn} setPageBtn={setPageBtn}/>
          <SubPage />
        </>
        :
        <>
          <MenuTop pageBtn={pageBtn} setPageBtn={setPageBtn}/>
          <TopPage pageBtn={pageBtn} setPageBtn={setPageBtn}/>
        </>
      }
    </>
  );
}

export default PageHome;
