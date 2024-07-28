import React from 'react'
import './right.scss'

const Right0 = ({ title, titleNumber, text, img, imgAlt, id }) => {
  return (
    <li className='rt' id={`cs-content-${id}`}>
      <div className='rt-text'>
        <h3>{title}<span>{titleNumber}</span></h3>
        <p>{text}</p>
      </div>
      <div className='rt-img'>
        <img src={`/img/ct-content-img-${img}.jpg`} alt={imgAlt}/>
        <div/>
      </div>
    </li>
  )
}

const Right1 = ({ title, titleNumber, text, list1, img, imgAlt, id }) => {
  return (
    <li className='rt' id={`cs-content-${id}`}>
      <div className='rt-text'>
        <h3>{title}<span>{titleNumber}</span></h3>
        <p>{text}</p>
        <ul>
          <li>{list1}</li>
        </ul>
      </div>
      <div className='rt-img'>
        <img src={`/img/ct-content-img-${img}.jpg`} alt={imgAlt}/>
        <div/>
      </div>
    </li>
  )
}

const Right2 = ({ title, titleNumber, text, list1, list2, img, imgAlt, id }) => {
  return (
    <li className='rt' id={`cs-content-${id}`}>
      <div className='rt-text'>
        <h3>{title}<span>{titleNumber}</span></h3>
        <p>{text}</p>
        <ul>
          <li>{list1}</li>
          <li>{list2}</li>
        </ul>
      </div>
      <div className='rt-img'>
        <img src={`/img/ct-content-img-${img}.jpg`} alt={imgAlt}/>
        <div/>
      </div>
    </li>
  )
}

export { Right0, Right1, Right2 }