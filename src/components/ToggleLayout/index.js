import React, {useState} from 'react';
import {ToggleLayoutStyled} from './ToggleLayoutElements';

const ToggleLayout = ({handleShowNavBar}) => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    handleShowNavBar()
  }

  return (
    <ToggleLayoutStyled className={isActive ? 'active' : ''} onClick={handleClick}/>
  )
}

export default ToggleLayout;