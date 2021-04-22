import styled from 'styled-components';
import iconClock from '../../img/clock.svg';
import iconUser from '../../img/user.svg';

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;

  @media (max-width: 960px) {
    min-width: 700px;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const TableHead = styled.thead`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TableTh = styled.th`
  padding: 0 10px;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.03em;
  text-align: left;
  text-transform: uppercase;
  color: var(--gray-dark);

  &:first-child {
    padding-left: 21px;
  }
`;

export const TableTr = styled.tr`
  border-radius: 20px;
  box-shadow: 0 2px 2px rgba(12, 20, 39, 0.1);

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 16px;
    padding: 16px;
    border: 1px solid rgba(12, 20, 39, 0.05);
  }
`;

export const TableTd = styled.td`
  padding: 20px 10px;
  line-height: 17px;
  border-top: 1px solid rgba(12, 20, 39, 0.05);
  border-bottom: 1px solid rgba(12, 20, 39, 0.05);

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    padding: 0;
    border: none;

    &::before {
      content: attr(data-label);
      font-weight: 500;
      font-size: 10px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: var(--gray-dark);
    }
  }

  &:first-child {
    padding-left: 21px;
    border-left: 1px solid rgba(12, 20, 39, 0.05);
    border-radius: 20px 0 0 20px;

    @media (max-width: 768px) {
      padding-left: 0;
      border: none;
    }
  }

  &:last-child {
    border-right: 1px solid rgba(12, 20, 39, 0.05);
    border-radius: 0 20px 20px 0;

    @media (max-width: 768px) {
      margin-bottom: 0;
      border: none;
    }
  }

  &[data-label="Period"] {
    span {
      display: flex;
      align-items: center;

      &::before {
        content: '';
        flex-shrink: 0;
        margin-right: 8px;
        width: 18px;
        height: 18px;
        background: url(${iconClock}) no-repeat;

        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }

  &[data-label="Date"] {
    span {
      display: flex;
      align-items: center;

      &::before {
        content: '';
        flex-shrink: 0;
        margin-right: 8px;
        width: 17px;
        height: 15px;
        background: url(${iconUser}) no-repeat;

        @media (max-width: 768px) {
          display: none;
        }
      }
    }
  }
`;