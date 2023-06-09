import React from 'react';

function Table({ classname, columns, data }) {
  return (
    <table className={classname}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th className="base-color" key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
