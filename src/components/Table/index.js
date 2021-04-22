import React from 'react';
import {TableStyled, TableTd, TableTh, TableTr} from './TableElements';
import {TD, TH} from './stubs';

const Table = () => {
  return (
    <TableStyled>
        <thead>
          <tr>
            {
              TH.map((item) => {
                return (
                  <TableTh key={item.text}>{item.text}</TableTh>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
        {
          TD.map(({row}, index) => {
            return (
              <TableTr key={index}>
                {
                  row.map((item) => {
                    return (
                      <TableTd key={item.label} data-label={item.label}>
                        <span>{item.text}</span>
                      </TableTd>
                    )
                  })
                }
              </TableTr>
            )
          })
        }
        </tbody>
      </TableStyled>
  )
};

export default Table;