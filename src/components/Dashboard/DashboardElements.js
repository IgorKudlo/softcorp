import styled from 'styled-components';

export const DashboardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DashboardTitle = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  span {
    color: var(--accent);
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 29px;
  }
`;