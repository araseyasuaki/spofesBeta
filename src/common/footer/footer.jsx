// フッター
import React from 'react'
import TopBtn from '../../common/topBtn/topBtn'
import './footer.scss'

const Footer1 = () => {
  return (
    <section className='footer ft-dec-bg-1'>
      <div/>
      <a href="#">
        <small>©2024 Japan Electronics College</small>
      </a>
      <TopBtn/>
    </section>
  )
}

const Footer2 = () => {
  return (
    <section className='footer ft-dec-bg-2'>
      <div/>
      <a href="#">
        <small>©2024 Japan Electronics College</small>
      </a>
      <TopBtn/>
    </section>
  )
}

export { Footer1, Footer2 }