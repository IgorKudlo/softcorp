import styled from 'styled-components';
import iconClock from '../../img/clock.svg';
import iconUser from '../../img/user.svg';

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
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
`

export const TableTd = styled.td`
  padding: 20px 10px;
  line-height: 17px;
  border-top: 1px solid rgba(12, 20, 39, 0.05);
  border-bottom: 1px solid rgba(12, 20, 39, 0.05);

  &:first-child {
    padding-left: 21px;
    border-left: 1px solid rgba(12, 20, 39, 0.05);
    border-radius: 20px 0 0 20px;
  }

  &:last-child {
    border-right: 1px solid rgba(12, 20, 39, 0.05);
    border-radius: 0 20px 20px 0;
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
      }
    }
  }
`