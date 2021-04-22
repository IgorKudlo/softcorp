import React, {useState} from 'react';
import {GlobalStyle} from './GlobalStyle';
import {
  AppWrapper,
  AppContent,
  AppNavigation,
  AppNavigationContent,
  AppNavigationProfile,
  AppContentTop,
} from './AppElements';
import Nav from '../Nav';
import Button from '../Button';
import Dashboard from '../Dashboard';
import ToggleLayout from "../ToggleLayout";

function App() {

  const [isShowNavBar, setIsShowNavBar] = useState(true);
  const handleShowNavBar = () => {
    setIsShowNavBar(!isShowNavBar);
  }

  return (
    <>
      <GlobalStyle/>
      <AppWrapper>
        {
          isShowNavBar &&
          <AppNavigation>
            <AppNavigationContent>
              <Nav/>
              <AppNavigationProfile/>
            </AppNavigationContent>
          </AppNavigation>
        }
        <AppContent>
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
