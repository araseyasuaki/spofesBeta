import React from 'react'
import './ntTitle.scss'

const ntTitle = ({ classNumber, titleNumber, titleName }) => {
  return (
    <h3 className={`nt-title nt-title-${classNumber}`}>
      <span className='nt-title-number'>{titleNumber}</span>
      <span className='nt-title-text'>{titleName}</span>
    </h3>
  )
}

export default ntTitle