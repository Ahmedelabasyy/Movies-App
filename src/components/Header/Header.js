import React from 'react'
import { Link } from 'react-router-dom'
import userImage from '../../images/me.jpg';
import './header.scss';

export default function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <h2 className="logo">Cinema 2Go</h2>
      </Link>
      <div className="user-image">
        <img src={userImage} alt="user" />
      </div>
    </div>
  )
}
