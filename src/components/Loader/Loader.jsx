import React, { memo } from 'react';

import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return <Spinner animation="border" />;
}

export default memo(Loader);
