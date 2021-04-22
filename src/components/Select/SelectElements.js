import styled from 'styled-components';
import Select from 'react-select';

export const SelectStyled = styled(Select)`
  min-width: 165px;

  .select__control {
    padding: 0 16px;
    min-height: 45px;
    border-color: #dedfe2;
    border-radius: 6px;
  }

  .select__value-container {
    padding: 0;
  }

  .select__single-value {
    color: var(--black);
  }

  .select__indicator-separator {
    display: none;
  }

  .select__indicator {
    position: relative;
    padding: 0;
    width: 20px;
    height: 20px;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      height: 0;
      width: 0;
      margin: -2px 0 0 -4px;
      border: 4px solid transparent;
      border-top-color: var(--black);
    }

    svg {
      display: none;
    }
  }

  .select__menu {
    border: 1px solid rgba(12, 20, 39, 0.05);
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(12, 20, 39, .1);
  }

  .select__menu-list {
    padding: 0;
    max-height: 291px;
  }

  .select__option {
    padding: 12px 8px 12px 17px;
  }

  .select__option--is-selected {
    color: var(--black);
    background-color: var(--gray);
  }
`;