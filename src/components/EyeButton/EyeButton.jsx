import { func } from 'prop-types';
import React, { memo } from 'react';
import Button from 'react-bootstrap/Button';

function EyeButton({ getData }) {
  return (
    <Button
      className="d-flex align-items-center justify-content-between"
      onClick={getData}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
      </svg>
      <span style={{ marginLeft: '3px' }}>Details</span>
    </Button>
  );
}

EyeButton.propTypes = {
  getData: func.isRequired,
};

export default memo(EyeButton);
