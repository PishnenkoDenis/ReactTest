import React, { memo, useState } from 'react';
import { arrayOf, shape } from 'prop-types';
import { useDispatch } from 'react-redux';

import Table from 'react-bootstrap/Table';

import EyeButton from '../EyeButton/EyeButton';

import './style.css';
import { openPopUp } from '../../redux/actions/listingActions';
import PopUp from '../PopUp/PopUp';

function CountryTable({ listing }) {
  const dispatch = useDispatch();
  const [officialName, setOfficialName] = useState('');
  const [commonName, setCommonName] = useState('');

  const getOfficialName = (name) => {
    const searched = listing.find((item) => item.name.common === name);
    setOfficialName(searched.name.official);
    setCommonName(name);
    dispatch(openPopUp());
    console.log(searched);
  };
  return (
    <>
      <Table
        bordered
        hover
        className="table"
        roll="grid"
      >
        <thead>
          <tr>
            <th>Common name</th>
            <th>Capital</th>
            <th>Cca2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listing.map((item) => (
            <tr key={item.name.common}>
              <td
                role="gridcell"
                onClick={() => getOfficialName(item.name.common)}
                style={{ cursor: 'pointer' }}
              >
                {item.name.common}
              </td>
              <td>{item.capital?.[0]}</td>
              <td>{item.cca2}</td>
              <th>
                <EyeButton />
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
      <PopUp />

    </>
  );
}

CountryTable.propTypes = {
  listing: arrayOf(shape).isRequired,
};

export default memo(CountryTable);
