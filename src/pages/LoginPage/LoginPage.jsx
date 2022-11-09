import React, { memo } from 'react';

import './style.css';
import FormCard from '../../components/FormCard/FormCard';

function LoginPage() {
  return (
    <div className="container">
      <FormCard />
    </div>
  );
}

export default memo(LoginPage);
