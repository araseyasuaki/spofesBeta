import React from 'react'
import { PageChangeSub } from '../common/pageChange/pageChange'
import MenuSub from '../common/menuSub/menuSub'
import FirstViewSub from './firstViewSub/firstViewSub'
import Schedule from './schedule/schedule'
import CompSub from './compSub/compSub'
import Attention from './attention/attention'
import { Footer2 } from '../common/footer/footer'
import './subPage.scss'

const subPage = () => {

  return (
    <>
      {/* <PageChangeSub/> */}
      <MenuSub/>
      <FirstViewSub/>
      <Schedule/>
      <CompSub/>
      <Attention/>
      <Footer2/>
    </>
  )
}

export default subPage