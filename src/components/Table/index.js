import React from 'react';
import {TableHead, TableStyled, TableTd, TableTh, TableTr, TableWrapper} from './TableElements';
import {TD, TH} from './stubs';

const Table = () => {
  return (
    <TableWrapper>
      <TableStyled>
          <TableHead>
            <tr>
              {
                TH.map((item) => {
                  return (
                    <TableTh key={item.text}>{item.text}</TableTh>
                  )
                })
              }
            </tr>
          </TableHead>
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
    </TableWrapper>
  )
};

export default Table;