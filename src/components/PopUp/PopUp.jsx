import { bool, string, shape } from 'prop-types';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'react-bootstrap/Modal';

import { closePopUp } from '../../redux/actions/listingActions';

function PopUp({
  show, officialName, name, nativeName,
}) {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closePopUp());

  const names = nativeName && Object.values(nativeName);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {name}
          {' '}
          -
          {officialName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {names.map((item) => (
          <p>{`${item?.common} - ${item?.official}`}</p>
        ))}
      </Modal.Body>
    </Modal>
  );
}

PopUp.propTypes = {
  show: bool.isRequired,
  officialName: string.isRequired,
  name: string.isRequired,
  nativeName: shape().isRequired,
};

export default memo(PopUp);
