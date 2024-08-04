  import React from 'react';
import './right.scss'

const Right0 = ({ idNumber, title, titleNumber, text, imgNumber, alt }) => {

  return (
    <li className='rt' id={`cs-content-${idNumber}`}>
      <div className='rt-text'>
        <h3>{title}<span/></h3>
        <p className='rt-dec-text-1'>{titleNumber}</p>
        <p className='rt-dec-text-2'>{text}</p>
      </div>
      <div className='rt-img'>
        <img src={`./img/ct-content-img-${imgNumber}.jpg`} alt={alt}/>
        <div/>
      </div>
    </li>
  )
}

const Right1 = ({ idNumber, title, titleNumber, text, list1, imgNumber, alt }) => {
  return (
    <li className='rt' id={`cs-content-${idNumber}`}>
      <div className='rt-text'>
        <h3>{title}<span/></h3>
        <p className='rt-dec-text-1'>{titleNumber}</p>
        <p className='rt-dec-text-2'>{text}</p>
        <ul>
          <li>{list1}</li>
        </ul>
      </div>
      <div className='rt-img'>
        <img src={`./img/ct-content-img-${imgNumber}.jpg`} alt={alt}/>
        <div/>
      </div>
    </li>
  )
}

const Right2 = ({ idNumber, title, titleNumber, text, list1, list2, imgNumber, alt }) => {
  return (
    <li className='rt' id={`cs-content-${idNumber}`}>
      <div className='rt-text'>
        <h3>{title}<span/></h3>
        <p className='rt-dec-text-1'>{titleNumber}</p>
        <p className='rt-dec-text-2'>{text}</p>
        <div>
          <p>{list1}</p>
          <p>{list2}</p>
        </div>
      </div>
      <div className='rt-img'>
        <img src={`./img/ct-content-img-${imgNumber}.jpg`} alt={alt}/>
        <div/>
      </div>
    </li>
  )
}

export { Right0, Right1, Right2 }