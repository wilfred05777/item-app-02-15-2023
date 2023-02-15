import React, { useState } from 'react'
// import './Header.css'
import './header.css'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const handleLinkClick = () => {
    setIsNavOpen(false)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='header-navigation'>
      <nav className='nav'>
        <a href='/' className='nav__logo'>
          Logo
        </a>
        <ul className={`nav__list ${isMenuOpen ? 'nav__list--open' : ''}`}>
          <li className='nav__item'>
            <a href='/' className='nav__link'>
              Home
            </a>
          </li>
          <li className='nav__item'>
            <a href='/' className='nav__link'>
              About
            </a>
          </li>
          <li className='nav__item'>
            <a href='/' className='nav__link'>
              Services
            </a>
          </li>
          <li className='nav__item'>
            <a href='/' className='nav__link'>
              Contact
            </a>
          </li>
        </ul>
        <button
          className={`nav__toggle ${isMenuOpen ? 'nav__toggle--open' : ''}`}
          onClick={toggleMenu}
        >
          <span className='nav__icon'></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
