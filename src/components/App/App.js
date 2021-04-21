import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import {
  AppWrapper,
  AppContent,
  AppNavigation,
} from './AppElements';

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppWrapper>
        <AppNavigation/>
        <AppContent/>
      </AppWrapper>
    </>
  );
}

export default App;
