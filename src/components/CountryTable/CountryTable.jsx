import React, { memo, useState } from 'react';
import { arrayOf, shape } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import PopUp from '../PopUp/PopUp';
import { openPopUp } from '../../redux/actions/listingActions';
import { getShow } from '../../redux/selectors/selectors';
import './style.css';

function CountryTable({ listing }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [officialName, setOfficialName] = useState('');
  const [commonName, setCommonName] = useState('');

  const show = useSelector(getShow);

  const getOfficialName = (name) => {
    const searched = listing.find((item) => item.name.common === name);
    setOfficialName(searched.name.official);
    setCommonName(name);
    dispatch(openPopUp());
  };

  const getDetailsPage = (param) => {
    navigate(`/details/${param}`);
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
                <Button
                  onClick={() => getDetailsPage(item.cca3)}
                >
                  Details

                </Button>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
      <PopUp
        officialName={officialName}
        name={commonName}
        show={show}
      />
    </>
  );
}

CountryTable.propTypes = {
  listing: arrayOf(shape).isRequired,
};

export default memo(CountryTable);
