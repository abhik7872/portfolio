import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

function socials() {
  return (
    <div className='header__socials'>
        <a href="http://linkdin.com" target="_blank"><BsLinkedin /></a>
        <a href="http://github.com" target="_blank"><BsGithub /></a>
        <a href="http://facebook.com" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default socials