import { bool, string } from 'prop-types';
import React, { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { closePopUp } from '../../redux/actions/listingActions';

function PopUp({ show, officialName, name }) {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closePopUp());

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{officialName}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

PopUp.propTypes = {
  show: bool.isRequired,
  officialName: string.isRequired,
  name: string.isRequired,
};

export default memo(PopUp);
