import styled from 'styled-components';

export const HamburgerStyled = styled.button`
  position: relative;
  padding: 2px 1px;
  width: 22px;
  height: 17px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 1px;
  }

  span {
    position: absolute;
    left: 0;
    top: 7px;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 1px;
  }

  &::before {
    transition: transform 0.5s, top 0.2s;
  }

  span {
    transition: transform 0.5s, top 0.2s;
    transition-delay: 0.2s, 0s;
  }

  &::after {
    transition: all 0.5s;
    transition-delay: 0.1s;
  }

  &.active {
    &::before {
      top: 9px;
      transform: rotate(135deg);
    }

    span {
      top: 9px;
      transform: rotate(-135deg);
    }

    &::after {
      opacity: 0;
      top: 0;
      transform: rotate(180deg);
    }
  }
`