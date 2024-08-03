import React from 'react'
import './topBtn.scss'

const TopBtn = ({ colorNumber }) => {
  return (
    <a href='#' className='topBtn'>
      <img src='./img/ft-top-btn.png' alt='TOPボタンの画像'/>
      <div className={`tb-dec-bg-${colorNumber}`}/>
    </a>
  )
}

export default TopBtn