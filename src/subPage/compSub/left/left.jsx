import React from 'react'
import './left.scss'

const Left1 = ({ idNumber, imgNumber, alt, title, titleNumber, text, list1 }) => {
  return (
    <li className='lt' id={`cs-content-${idNumber}`}>
      <div className='lt-img'>
        <img src={`./img/cs-content-img-${imgNumber}.jpg`} alt={alt}/>
        <div/>
      </div>
      <div className='lt-text'>
        <h3>{title}<span/></h3>
        <span className='lt-dec-text-1'>{titleNumber}</span>
        <p className='lt-dec-text-2'>{text}</p>
        <div>
          <p>{list1}</p>
        </div>
      </div>
    </li>
  )
}

const Left2 = ({ idNumber, imgNumber, alt, title, titleNumber, text, list1, list2 }) => {
  return (
    <li className='lt' id={`cs-content-${idNumber}`}>
      <div className='lt-img'>
        <img src={`./img/cs-content-img-${imgNumber}.jpg`} alt={alt}/>
        <div/>
      </div>
      <div className='lt-text'>
        <h3>{title}<span/></h3>
        <span className='lt-dec-text-1'>{titleNumber}</span>
        <p className='lt-dec-text-2'>{text}</p>
        <div>
          <p>{list1}</p>
          <p>{list2}</p>
        </div>
      </div>
    </li>
  )
}

const Left3 = ({ idNumber, imgNumber, alt, title, titleNumber, text, list1, list2, list3 }) => {
  return (
    <li className='lt' id={`cs-content-${idNumber}`}>
      <div className='lt-img'>
        <img src={`./img/cs-content-img-${imgNumber}.jpg`} alt={alt}/>
        <div/>
      </div>
      <div className='lt-text'>
        <h3>{title}<span/></h3>
        <span className='lt-dec-text-1'>{titleNumber}</span>
        <p className='lt-dec-text-2'>{text}</p>
        <div>
          <p>{list1}</p>
          <p>{list2}</p>
          <p>{list3}</p>
        </div>
      </div>
    </li>
  )
}

export { Left1, Left2, Left3 }