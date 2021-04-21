import React, {useState} from 'react';
import {NAVIGATION_LIST} from './stubs';
import {NavLink, NavItem, NavList, NavStyled} from './NavElements';

const Nav = () => {

  const [activeRoute, setActiveRoute] = useState('dashboard');

  const handleActiveRoute = (e, path) => {
    e.preventDefault();
    setActiveRoute(path)
  }

  return (
    <NavStyled>
      <NavList>
        {
          NAVIGATION_LIST.map((item, index) => {
            return (
              <NavItem key={index + item.icon}>
                <NavLink className={`${item.icon} ${item.path === activeRoute ? 'active' : ''}`}
                         onClick={(e) => handleActiveRoute(e, item.path)} href={item.path}>
                  {item.title}
                </NavLink>
              </NavItem>
            )
          })
        }
      </NavList>
    </NavStyled>
  )
}

export default Nav;