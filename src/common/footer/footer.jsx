// フッター
import React from 'react'
import TopBtn from '../../common/topBtn/topBtn'
import './footer.scss'

const footer = () => {
  return (
    <section className='footer'>
      <div/>
      <a className='ft-Copywriter' href="#">
        <small>©2024 Japan Electronics College</small>
      </a>
      <TopBtn/>
    </section>
  )
}

export default footer