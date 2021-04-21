import styled from 'styled-components';
import Profile from '../Profile';

export const AppWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const AppNavigation = styled.div`
  flex-shrink: 0;
  width: 247px;
  background-color: var(--gray);
`;

export const AppNavigationContent = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 44px 24px 42px 24px;
  height: 100vh;
`;

export const AppNavigationProfile = styled(Profile)`
  margin-left: 11px;
`;

export const AppContent = styled.div`
  flex-grow: 1;
  min-height: 100vh;
  background-color: #fff;
`;