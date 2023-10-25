import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';



const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(true);
  }

  const closeMenu = () => {
    setNavActive(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize)
      };
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav 
      className={classNames(
        'navbar',
        { 'active': navActive}
    )}>
       <div>
        <img src="./img/logo.svg" alt="Logoipsum" />
       </div>

       <a 
        className={classNames(
          'nav__hamburger',
          {navActive: 'active'}
        )}
        onClick={toggleNav}
       >
        <span className='nav__hamburger__line'></span>
        <span className='nav__hamburger__line'></span>
        <span className='nav__hamburger__line'></span>
       </a>

       <div 
        className={classNames(
          'navbar--items',
          {navActive: 'active'}
        )}>
          <ul>
            <li>
              <Link 
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                Home
              </Link>
            </li>

            <li>
              <Link 
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="navbar--content"
              >
                Portfolio
              </Link>
            </li>
          </ul>
       </div>

    </nav>
  )
}

export default Navbar
