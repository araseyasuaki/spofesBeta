import React from 'react'
import './compImg.scss'

const CompImg = ({ classNumber, titleNumber, url, title }) => {
  return (
    <li className={`compImg ct-title-${classNumber}`}>
      <h3>{titleNumber}</h3>
      <img src={`/img/ct-content-img-${url}.png`}/>
      <figcaption>{title}</figcaption>
    </li>
  )
}

const NewImageCompImg = ({ classNumber, titleNumber, url, title }) => {
  return (
    <li className={`compImg ct-title-${classNumber}`}>
      <div/>
      <p>＊写真はイメージです</p>
      <h3>{titleNumber}</h3>
      <img src={`/img/ct-content-img-${url}.png`}/>
      <figcaption>{title}</figcaption>
    </li>
  )
}

const NewCompImg = ({ classNumber, titleNumber, url, title }) => {
  return (
    <li className={`compImg ct-title-${classNumber}`}>
      <div/>
      <h3>{titleNumber}</h3>
      <img src={`/img/ct-content-img-${url}.png`}/>
      <figcaption>{title}</figcaption>
    </li>
  )
}

const ImageCompImg = ({ classNumber, titleNumber, url, title }) => {
  return (
    <li className={`compImg ct-title-${classNumber}`}>
      <p>＊写真はイメージです</p>
      <h3>{titleNumber}</h3>
      <img src={`/img/ct-content-img-${url}.png`}/>
      <figcaption>{title}</figcaption>
    </li>
  )
}

export { CompImg, NewImageCompImg, NewCompImg, ImageCompImg }