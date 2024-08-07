import React from 'react'
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

const TopPage = ({ pageBtn, setPageBtn }) => {
  return (
    <>
      <FirstViewTop/>
      <CatchCopy/>
      <PickUp/>
      <OpenTime/>
      <AdmissionTime/>
      <CompTop pageBtn={pageBtn} setPageBtn={setPageBtn}/>
      <DomeMap/>
      <WarmUp/>
      <Access/>
      <Notes/>
      <Footer1/>
    </>
  )
}

export default TopPage