// トップページ
import React from 'react'
import { PageChangeTop } from '../common/pageChange/pageChange'
import MenuTop from '../common/menuTop/menuTop'
import FirstViewTop from './firstViewTop/firstViewTop'
import CatchCopy from './catchCopy/catchCopy'
import PickUp from './pickUp/pickUp'
import OpenTime from './openTime/openTime'
import AdmissionTime from './admissionTime/admissionTime'
import CompTop from './compTop/compTop'
import DomeMap from './domeMap/domeMap'
import WarmUp from './warmUp/warmUp'
import Access from './access/access'
import Notes from './notes/notes'
import { Footer1 } from '../common/footer/footer'
import './topPage.scss'

const TopPage = () => {
  return (
    <>
      <PageChangeTop/>
      <MenuTop/>
      <FirstViewTop/>
      <CatchCopy/>
      <PickUp/>
      <OpenTime/>
      <AdmissionTime/>
      <CompTop/>
      <DomeMap/>
      <WarmUp/>
      <Access/>
      <Notes/>
      <Footer1/>
    </>
  )
}

export default TopPage