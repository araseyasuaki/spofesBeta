import React from 'react'
import './linkBtn.scss'

const LinkBtn = ({ link, title, imgNumber }) => {
  return (
    <div className='linkBtn'>
      <a href={link}>
        {title}
        <span>
          <img src={`/img/link-btn-img-${imgNumber}.png`} alt='リンクボタンの装飾画像'/>
        </span>
      </a>
    </div>
  )
}

export default LinkBtn