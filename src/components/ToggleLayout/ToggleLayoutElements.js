import styled from 'styled-components';
import chevron from '../../img/chevron-left.svg';

export const ToggleLayoutStyled = styled.button`
  padding: 0;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent url(${chevron}) center no-repeat;
  outline: none;
  cursor: pointer;
  transition: opacity .25s ease-out;

  &:hover {
    opacity: .8;
  }
  
  &.active {
    transform: rotate(180deg);
  }
`;