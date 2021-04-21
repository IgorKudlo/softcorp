import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import {
  AppWrapper,
  AppContent,
  AppNavigation,
  AppNavigationContent,
  AppNavigationProfile,
} from './AppElements';
import Nav from '../Nav';

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppWrapper>
        <AppNavigation>
          <AppNavigationContent>
            <Nav/>
            <AppNavigationProfile/>
          </AppNavigationContent>
        </AppNavigation>
        <AppContent/>
      </AppWrapper>
    </>
  );
}

export default App;
