import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const AppNavigation = styled.div`
  flex-shrink: 0;
  width: 247px;
  background-color: var(--gray);
`;

export const AppContent = styled.div`
  flex-grow: 1;
  min-height: 100vh;
  background-color: #fff;
`;