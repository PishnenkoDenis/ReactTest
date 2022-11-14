import React, { memo } from 'react';
import { arrayOf, shape } from 'prop-types';

import Table from 'react-bootstrap/Table';

function DetailsTable({ details }) {
  return (
    <Table
      bordered
      className="table"
    >
      <tbody>
        <tr>
          <th>Common Name</th>
          <td>{details[0]?.name.common}</td>
        </tr>
        <tr>
          <th>Official Name</th>
          <td>{details[0]?.name.official}</td>
        </tr>
        <tr>
          <th>Currencies</th>
          <td>
            <ul style={{ paddingLeft: 0 }}>
              {details[0]?.currencies && Array
                .from(Object.values(Object.values(details[0]?.currencies)))
                .map((item) => (
                  <li
                    style={{ listStyle: 'none' }}
                  >
                    {item.name}
                    {' '}
                    -
                    {' '}
                    {item.symbol}

                  </li>
                ))}
            </ul>
          </td>
        </tr>
        <tr>
          <th>Languages</th>
          <td>
            {details[0]?.languages && Array.from(Object.values(details[0]?.languages))
              .map((item, index, array) => (
                index === array.length - 1 ? ` ${item} ` : ` ${item} |`
              ))}
          </td>
        </tr>
        <tr>
          <th>Flag</th>
          <td>{details[0]?.flag}</td>
        </tr>
      </tbody>
    </Table>
  );
}

DetailsTable.propTypes = {
  details: arrayOf(shape).isRequired,
};

export default memo(DetailsTable);
