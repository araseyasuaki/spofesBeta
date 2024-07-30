// サブページ
import React from 'react'
import MenuSub from '../common/menuSub/menuSub'
import FirstViewSub from './firstViewSub/firstViewSub'
import Schedule from './schedule/schedule'
import CompSub from './compSub/compSub'
import Footer from '../common/footer/footer'
import './subPage.scss'

const subPage = () => {

  return (
    <>
      <MenuSub/>
      <FirstViewSub/>
      <Schedule/>
      <CompSub/>
      <Footer/>
    </>
  )
}

export default subPage