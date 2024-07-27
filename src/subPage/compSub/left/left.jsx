import React from 'react'
import './left.scss'

const Left0 = ({ title, titleNumber, text, img, imgAlt }) => {
  return (
    <li className='lt'>
      <div className='lt-img'>
        <img src={`/img/ct-content-img-${img}.png`} alt={imgAlt}/>
        <div/>
      </div>
      <div className='lt-text'>
        <h3>{title}<span>{titleNumber}</span></h3>
        <p>{text}</p>
      </div>
    </li>
  )
}

const Left1 = ({ title, titleNumber, text, list1, img, imgAlt }) => {
  return (
    <li className='lt'>
      <div className='lt-img'>
        <img src={`/img/ct-content-img-${img}.png`} alt={imgAlt}/>
        <div/>
      </div>
      <div className='lt-text'>
        <h3>{title}<span>{titleNumber}</span></h3>
        <p>{text}</p>
        <ul>
          <li>{list1}</li>
        </ul>
      </div>
    </li>
  )
}

const Left2 = ({ title, titleNumber, text, list1, list2, img, imgAlt }) => {
  return (
    <li className='lt'>
      <div className='lt-img'>
        <img src={`/img/ct-content-img-${img}.png`} alt={imgAlt}/>
        <div/>
      </div>
      <div className='lt-text'>
        <h3>{title}<span>{titleNumber}</span></h3>
        <p>{text}</p>
        <ul>
          <li>{list1}</li>
          <li>{list2}</li>
        </ul>
      </div>
    </li>
  )
}

export { Left0, Left1, Left2 }