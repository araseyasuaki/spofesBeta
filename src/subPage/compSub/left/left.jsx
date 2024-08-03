import React from 'react'
import './left.scss'

const Left1 = ({ idNumber, imgNumber, alt, title, titleNumber, text, list1 }) => {
  return (
    <li className='lt' id={`cs-content-${idNumber}`}>
      <div className='lt-img'>
        <img src={`./img/ct-content-img-${imgNumber}.jpg`} alt={alt}/>
        <div/>
      </div>
      <div className='lt-text'>
        <h3>{title}<span/></h3>
        <span className='lt-dec-text-1'>{titleNumber}</span>
        <p className='lt-dec-text-2'>{text}</p>
        <ul>
          <li>{list1}</li>
        </ul>
      </div>
    </li>
  )
}

const Left2 = ({ idNumber, imgNumber, alt, title, titleNumber, text, list1, list2 }) => {
  return (
    <li className='lt' id={`cs-content-${idNumber}`}>
      <div className='lt-img'>
        <img src={`./img/ct-content-img-${imgNumber}.jpg`} alt={alt}/>
        <div/>
      </div>
      <div className='lt-text'>
        <h3>{title}<span/></h3>
        <span className='lt-dec-text-1'>{titleNumber}</span>
        <p className='lt-dec-text-2'>{text}</p>
        <ul>
          <li>{list1}</li>
          <li>{list2}</li>
        </ul>
      </div>
    </li>
  )
}

export { Left1, Left2 }