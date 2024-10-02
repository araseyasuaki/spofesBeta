import React from 'react'
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
      <div>
        {title}
        <span>
          <img src={`./img/link-btn-img-${imgNumber}.png`} alt='リンクボタンの装飾画像'/>
        </span>
      </div>
    </div>
  )
}

export { LinkBtn1, LinkBtn2 }