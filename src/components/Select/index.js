import React from 'react';
import {SelectStyled} from './SelectElements';

const Select = ({options, handleChange, currentYear}) => {
  return (
    <SelectStyled options={options} defaultValue={options[0]}
                  getOptionLabel={option => `${option.label}, ${currentYear}`}
                  onChange={(value) => handleChange(value.label)} classNamePrefix="select"/>
  )
}

export default Select;