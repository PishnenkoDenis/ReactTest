import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import ErrorAlert from '../../components/ErrorAlert/ErrorAlert';
import FormCard from '../../components/FormCard/FormCard';
import Loader from '../../components/Loader/Loader';
import './style.css';

function LoginPage() {
  const {
    error,
    isLoading,
    show,
    isLoggedIn,
  } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/index');
  }, [isLoggedIn]);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (error && show) {
    return (
      <ErrorAlert message={error} />
    );
  }

  return (
    <div className="container">
      <FormCard />
    </div>
  );
}

export default memo(LoginPage);
