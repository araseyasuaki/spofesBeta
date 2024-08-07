import React from 'react'
import FirstViewSub from './firstViewSub/firstViewSub'
import Schedule from './schedule/schedule'
import CompSub from './compSub/compSub'
import Attention from './attention/attention'
import { Footer2 } from '../common/footer/footer'
import './subPage.scss'

const subPage = () => {

  return (
    <>
      <FirstViewSub/>
      <Schedule/>
      <CompSub/>
      <Attention/>
      <Footer2/>
    </>
  )
}

export default subPage