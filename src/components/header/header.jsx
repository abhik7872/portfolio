import React from 'react'
import CTA from './CTA'
import Social from './socials'
import ME from '../../assets/avatar_1.png'
import './header.css'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Abhik Chatterjee</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Social />
        <div className="me">
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  )
}

export default header