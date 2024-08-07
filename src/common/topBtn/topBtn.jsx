import React from 'react'
import './topBtn.scss'

const TopBtn = ({ colorNumber }) => {
  return (
    <a href='#' className={`topBtn tb-dec-bg-${colorNumber}`}>
      <img src='./img/ft-top-btn.png' alt='TOPボタンの画像'/>
    </a>
  )
}

export default TopBtn