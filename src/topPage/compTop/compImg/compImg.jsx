import React from 'react'
import './compImg.scss'

const CompImg1 = ({ classNumber, titleNumber, imgNumber, alt, title, }) => {
  return (
    <li className={`compImg ct-title-${classNumber}`}>
      <h3>{titleNumber}</h3>
      <img src={`./img/ct-content-img-${imgNumber}.jpg`} alt={alt}/>
      <figcaption>{title}</figcaption>
    </li>
  )
}

const CompImg2 = ({ classNumber, titleNumber, imgNumber, alt, title, }) => {
  return (
    <li className={`compImg ct-title-${classNumber}`}>
      <div/>
      <p>＊写真はイメージです</p>
      <h3>{titleNumber}</h3>
      <img src={`./img/ct-content-img-${imgNumber}.jpg`} alt={alt}/>
      <figcaption>{title}</figcaption>
    </li>
  )
}

const CompImg3 = ({ classNumber, titleNumber, imgNumber, alt, title, }) => {
  return (
    <li className={`compImg ct-title-${classNumber}`}>
      <div/>
      <h3>{titleNumber}</h3>
      <img src={`./img/ct-content-img-${imgNumber}.jpg`} alt={alt}/>
      <figcaption>{title}</figcaption>
    </li>
  )
}

const CompImg4 = ({ classNumber, titleNumber, imgNumber, alt, title, }) => {
  return (
    <li className={`compImg ct-title-${classNumber}`}>
      <p>＊写真はイメージです</p>
      <h3>{titleNumber}</h3>
      <img src={`./img/ct-content-img-${imgNumber}.jpg`} alt={alt}/>
      <figcaption>{title}</figcaption>
    </li>
  )
}

export { CompImg1, CompImg2, CompImg3, CompImg4, }