import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { string } from 'prop-types';
import Alert from 'react-bootstrap/Alert';

import { closeAlert } from '../../redux/actions/authActions';
import './style.css';

function ErrorAlert({ message }) {
  const dispatch = useDispatch();

  const close = () => dispatch(closeAlert());

  const closeCallback = useCallback(() => {
    close();
  }, []);
  return (
    <Alert
      variant="danger"
      className="alert"
      onClose={closeCallback}
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
