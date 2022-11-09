import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import CountryListingPage from './pages/CountryListingPage/CountryListingPage';
import CountryDetailsPage from './pages/CountryDetailsPage/CountryDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<CountryListingPage />} />
          <Route path="/details/:id" element={<CountryDetailsPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
