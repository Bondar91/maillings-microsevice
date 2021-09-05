import React, { FC } from 'react';
import { IColumns } from './types';

const Table: FC<IColumns> = (columns) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          {Object.keys(columns).map((columnName, key) => (
            <th key={key}>{columns[columnName].title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Intro to CSS</td>
          <td>Adam</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
