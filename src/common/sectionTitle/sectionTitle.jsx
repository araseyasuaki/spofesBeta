import React from 'react'
import './sectionTitle.scss'

const SectionTitle1 = ({ title }) => {
  return (
    <div className='st-title'>
      <h2>{title}</h2>
    </div>
  )
}

const SectionTitle2 = ({ url, alt, title }) => {
  return (
    <div className='st-icon-title'>
      <div>
        <img src={url} alt={alt}/>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export { SectionTitle1, SectionTitle2 };