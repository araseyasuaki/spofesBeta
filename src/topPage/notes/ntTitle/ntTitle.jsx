import React, { useEffect } from 'react';
import './ntTitle.scss'

const NtTitle1 = ({ classNumber, titleNumber, titleName }) => {

  return (
    <h3 className={`nt-title nt-dec-bg-1 nt-title-${classNumber}`}>
      <span className='nt-title-number'>{titleNumber}</span>
      <span className='nt-title-text'>{titleName}</span>
    </h3>
  )
}

const NtTitle2 = ({ classNumber, titleNumber, titleName }) => {

  return (
    <h3 className={`nt-title nt-dec-bg-2 nt-title-${classNumber}`}>
      <span className='nt-title-number'>{titleNumber}</span>
      <span className='nt-title-text'>{titleName}</span>
    </h3>
  )
}

export { NtTitle1, NtTitle2 }