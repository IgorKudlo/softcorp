import React, {useState} from 'react';
import {GlobalStyle} from './GlobalStyle';
import {
  AppWrapper,
  AppContent,
  AppContentTop,
  AppNavigation,
  AppNavigationToggle,
  AppNavigationContent,
  AppNavigationPerson,
  AppNavigationProfile,
  AppNavigationSign
} from './AppElements';
import Nav from '../Nav';
import ToggleLayout from '../ToggleLayout';
import Button from '../Button';
import Dashboard from '../Dashboard';

function App() {

  const [isShowNavBar, setIsShowNavBar] = useState(true);
  const handleShowNavBar = () => {
    setIsShowNavBar(!isShowNavBar);
  }

  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setIsActiveMobileMenu(!isActiveMobileMenu);
  }

  return (
    <>
      <GlobalStyle overflow={isActiveMobileMenu}/>
      <AppWrapper>
        {
          isShowNavBar &&
          <AppNavigation>
            <AppNavigationToggle handleMobileMenu={handleMobileMenu}/>
            <AppNavigationContent className={isActiveMobileMenu ? 'active' : ''}>
              <Nav/>
              <AppNavigationPerson>
                <AppNavigationProfile/>
                <AppNavigationSign>Sign out</AppNavigationSign>
              </AppNavigationPerson>
            </AppNavigationContent>
          </AppNavigation>
        }
        <AppContent visible={isShowNavBar}>
          <AppContentTop>
            <ToggleLayout handleShowNavBar={handleShowNavBar}/>
            <Button>Sign out</Button>
          </AppContentTop>
          <Dashboard/>
        </AppContent>
      </AppWrapper>
    </>
  );
}

export default App;
