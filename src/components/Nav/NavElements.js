import styled from 'styled-components';
import dashboard from '../../img/dashboard.svg';
import people from '../../img/people.svg';
import operations from '../../img/operations.svg';
import schedule from '../../img/schedule.svg';
import administration from '../../img/administration.svg';
import tracking from '../../img/tracking.svg';

export const NavStyled = styled.nav`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-bottom: 10px;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  color: var(--black);
  text-decoration: none;
  border-radius: 8px;
  transition: opacity .25s ease-out;

  &:hover {
    opacity: .8;
  }

  @media (max-width: 768px) {
    display: inline-flex;
    padding: 6px 12px;
    font-size: 12px;
  }

  &::before {
    content: '';
    flex-shrink: 0;
    margin-right: 16px;
    width: 20px;
    height: 20px;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.dashboard::before {
    background-image: url(${dashboard});
  }

  &.people::before {
    background-image: url(${people});
  }

  &.operations::before {
    background-image: url(${operations});
  }

  &.schedule::before {
    background-image: url(${schedule});
  }

  &.administration::before {
    background-image: url(${administration});
  }

  &.tracking::before {
    background-image: url(${tracking});
  }

  &.active {
    pointer-events: none;
    background-color: #fff;
  }
`;