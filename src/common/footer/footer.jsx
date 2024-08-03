import React from 'react'
import TopBtn from '../../common/topBtn/topBtn'
import './footer.scss'

const Footer1 = () => {
  return (
    <section className='footer ft-dec-bg-1'>
      <div/>
      <p>
        <small>©2024 Japan Electronics College</small>
      </p>
      <TopBtn colorNumber={'1'}/>
    </section>
  )
}

const Footer2 = () => {
  return (
    <section className='footer ft-dec-bg-2'>
      <div/>
      <p>
        <small>©2024 Japan Electronics College</small>
      </p>
      <TopBtn colorNumber={'2'}/>
    </section>
  )
}

export { Footer1, Footer2 }