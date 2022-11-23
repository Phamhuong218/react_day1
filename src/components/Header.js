import React from 'react'

import './Header.css';
export default function Header() {
  return (
    <header>
        <div>
            <p>mindX School</p>
        </div>
        <div className="right">
            <a href="">About</a>
            <a href="">Project</a>
            <a href="">Contact</a>
            <a href="">Log In</a>
            <a href="">Sign Up</a>
        </div>
    </header>
  )
}
