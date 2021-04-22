import styled from 'styled-components';
import Profile from '../Profile';
import Button from '../Button';
import Hamburger from '../Hamburger';

export const AppWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AppNavigation = styled.div`
  flex-shrink: 0;
  width: 247px;
  background-color: var(--gray);

  @media (max-width: 1024px) {
    width: 218px;
  }

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 16px;
    width: 100%;
    height: 56px;
    background-color: var(--black);
  }
`;

export const AppNavigationToggle = styled(Hamburger)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const AppNavigationContent = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 44px 24px 42px 24px;
  height: 100vh;

  @media (max-width: 1024px) {
    padding: 32px 16px;
  }

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column-reverse;
    justify-content: flex-end;
    height: calc(100vh - 56px);
    background-color: #fff;

    &.active {
      display: flex;
    }
  }
`;

export const AppNavigationPerson = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-bottom: 37px;
  }
`;

export const AppNavigationProfile = styled(Profile)`
  margin-left: 11px;

  @media (max-width: 768px) {
    margin-right: 30px;
    max-width: 134px;
  }
`;

export const AppNavigationSign = styled(Button)`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const AppContent = styled.div`
  flex-grow: 1;
  padding: 44px 42px 44px 60px;
  min-height: 100vh;
  min-width: 0;
  background-color: #fff;

  @media (max-width: 1024px) {
    padding: 32px 16px;
  }
`;

export const AppContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 44px;

  @media (max-width: 1024px) {
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;