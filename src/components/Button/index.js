import React from 'react';
import {ButtonStyled} from './ButtonElements';

const Button = ({className, children}) => {
  return (
    <ButtonStyled className={className}>{children}</ButtonStyled>
  )
}

export default Button;