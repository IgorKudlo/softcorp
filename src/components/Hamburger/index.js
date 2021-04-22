import React, {useState} from 'react';
import {HamburgerStyled} from './HamburgerElements';

const Hamburger = ({handleMobileMenu, className}) => {

  const [isActive, setIsActive] = useState(false);

  const handleHamburger = () => {
    setIsActive(!isActive);
    handleMobileMenu();
  };

  return (
    <HamburgerStyled className={`${className} ${isActive ? 'active' : ''}`} onClick={handleHamburger}>
      <span/>
    </HamburgerStyled>
  )
}


export default Hamburger;