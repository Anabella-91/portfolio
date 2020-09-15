import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={() => scroll.scrollToTop()}>
          @anidarocha
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='bio' smooth={true} duration={1000} className='nav-links' onClick={closeMobileMenu}>
                about
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='projects'
                className='nav-links'
                onClick={closeMobileMenu}
                smooth={true} duration={1000}
              >
                projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='contact'
                className='nav-links'
                onClick={closeMobileMenu}
                smooth={true} duration={1000}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;