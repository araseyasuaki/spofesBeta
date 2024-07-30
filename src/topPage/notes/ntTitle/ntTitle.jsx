import React, { useEffect } from 'react';
import './ntTitle.scss'

const NtTitle = ({ classNumber, titleNumber, titleName }) => {

  return (
    <h3 className={`nt-title nt-title-${classNumber}`}>
      <span className='nt-title-number'>{titleNumber}</span>
      <span className='nt-title-text'>{titleName}</span>
    </h3>
  )
}

export default NtTitle