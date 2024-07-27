import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './linkBtn.scss'

const LinkBtn = ({ link, title, imgNumber }) => {
  return (
    <a href={link} className='link-btn'>
      {title}
      <span>
        <img src={`/img/link-btn-img-${imgNumber}.png`}/>
      </span>
    </a>
  )
}

const LinkBtnPageChange = ({ link, title, imgNumber }) => {
  return (
    <Link to={link} className='link-btn'>
      {title}
      <span>
        <img src={`/img/link-btn-img-${imgNumber}.png`}/>
      </span>
    </Link>
  )
}

export { LinkBtn, LinkBtnPageChange }