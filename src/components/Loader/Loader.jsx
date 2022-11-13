import React, { memo } from 'react';

import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <Spinner
      animation="border"
      style={{
        margin: 'auto',
        display: 'flex',
        marginTop: '10rem',
      }}
    />
  );
}

export default memo(Loader);
