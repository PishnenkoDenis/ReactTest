import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
