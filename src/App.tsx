import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Router>
        <Routes />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
