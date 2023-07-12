import React, { useContext, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { LoginContext } from '../context/login-context';

import '../navbar/navbar.css';

function Navbar() {
  const { loggedin, account, Signout } = useContext(LoginContext);
  const navRef = useRef();

  const shownavBar = () => {
    navRef.current.classList.toggle('responsive_navbar');
  };

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    shownavBar();
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ['main-menu menu-right menuq1'];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ['sub__menus'];
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }

  return (
    <header>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <nav className="navi" ref={navRef}>
        <div className="navib">
          
          <NavLink className="home" to="/" onClick={shownavBar}>
            Home
          </NavLink>

          <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
            <Link to="#">
              Shop <FiChevronDown />
            </Link>
            <ul className={boxClassSubMenu.join(' ')}>
              <li>
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to={`/buy`}
                >
                  Buy Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to={`/O`}
                >
                  Sell Products
                </NavLink>
              </li>
            </ul>
          </li>
        </div>
        <button className="nav-btn nav-btn-close" onClick={shownavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={shownavBar}>
        <FaBars />
      </button>
      <div className="right">
        <NavLink className="sign-in" to="/login" onClick={shownavBar}>
          {() => {
            if (!loggedin) {
              return 'Sign Up';
            } else if (loggedin) {
              return (
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link to="#">
                    {account.accountname} <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(' ')}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/myads`}
                      >
                        My Ads
                      </NavLink>
                    </li>
                    <li>
                      <Link onClick={Signout} to={`/`}>
                        Sign out;
                      </Link>
                    </li>
                  </ul>
                </li>
              );
            }
          }}
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
