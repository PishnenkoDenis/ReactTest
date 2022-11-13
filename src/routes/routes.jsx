import React from 'react';
import { Navigate } from 'react-router';
import CountryDetailsPage from '../pages/CountryDetailsPage/CountryDetailsPage';
import CountryListingPage from '../pages/CountryListingPage/CountryListingPage';

import LoginPage from '../pages/LoginPage/LoginPage';

export const publicRoutes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <LoginPage />,
  },
];

export const authRoutes = [
  {
    path: '/details/:alphaCode',
    element: <CountryDetailsPage />,
  },
  {
    path: '/index',
    element: <CountryListingPage />,
  },
  {
    path: '*',
    element: <Navigate to="/index" />,
  },
];
