import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Product from './pages/Product'
import SearchResult from './pages/SearchResult';

const Routes: React.FC = () => {
   return (
    <Router>
        <Route exact path="/" component={App}/>
        <Route path="/product/:slug" component={Product}/>
        <Route path="/search" component={SearchResult}/>
    </Router>
   )
};

export default Routes;