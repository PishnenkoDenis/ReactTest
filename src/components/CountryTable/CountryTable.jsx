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
  const [nativeName, setNativeName] = useState({});

  const show = useSelector(getShow);

  const getOfficialName = (name) => {
    const searched = listing.find((item) => item.name.common === name);
    setOfficialName(searched.name.official);
    setCommonName(name);
    setNativeName(searched.name?.nativeName);
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
                  className="d-flex align-items-center justify-content-between"
                  onClick={() => getDetailsPage(item.cca3)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                  <span style={{ marginLeft: '3px' }}>Details</span>

                </Button>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
      <PopUp
        officialName={officialName}
        name={commonName}
        nativeName={nativeName}
        show={show}
      />
    </>
  );
}

CountryTable.propTypes = {
  listing: arrayOf(shape).isRequired,
};

export default memo(CountryTable);
