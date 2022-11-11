import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { string } from 'prop-types';
import Alert from 'react-bootstrap/Alert';

import { closeAlert } from '../../redux/actions/authActions';
import './style.css';

function ErrorAlert({ message }) {
  const dispatch = useDispatch();
  return (
    <Alert
      variant="danger"
      className="alert"
      onClose={() => dispatch(closeAlert())}
      dismissible
    >
      {message}

    </Alert>
  );
}

ErrorAlert.propTypes = {
  message: string.isRequired,
};

export default memo(ErrorAlert);
