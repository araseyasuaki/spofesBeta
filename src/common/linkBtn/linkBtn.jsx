import React from 'react'
import { Link } from 'react-router-dom';
import './linkBtn.scss'

const LinkBtn1 = ({ link, title, imgNumber }) => {
  return (
    <div className='linkBtn'>
      <a href={link}>
        {title}
        <span>
          <img src={`./img/link-btn-img-${imgNumber}.png`} alt='リンクボタンの装飾画像'/>
        </span>
      </a>
    </div>
  )
}

const LinkBtn2 = ({ link, title, imgNumber }) => {
  return (
    <div className='linkBtn'>
      <Link to={link}>
        {title}
        <span>
          <img src={`./img/link-btn-img-${imgNumber}.png`} alt='リンクボタンの装飾画像'/>
        </span>
      </Link>
    </div>
  )
}

export { LinkBtn1, LinkBtn2 }