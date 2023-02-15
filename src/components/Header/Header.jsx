import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleLinkClick = () => {
    setIsNavOpen(false)
  }

  return (
    <header className='header'>
      <nav className='nav'>
        <h1 className='nav__logo'>My Site</h1>
        <button
          className={`nav__toggle ${isNavOpen ? 'nav__toggle--open' : ''}`}
          onClick={handleToggleNav}
        >
          <span className='nav__icon'></span>
        </button>
        <ul className={`nav__list ${isNavOpen ? 'nav__list--open' : ''}`}>
          <li className='nav__item'>
            <a href='#about' className='nav__link' onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li className='nav__item'>
            <a href='#services' className='nav__link' onClick={handleLinkClick}>
              Services
            </a>
          </li>
          <li className='nav__item'>
            <a href='#blog' className='nav__link' onClick={handleLinkClick}>
              Blog
            </a>
          </li>
          <li className='nav__item'>
            <a href='#contact' className='nav__link' onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
