import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
} from 'react-router-dom'

import Routers from './Routes'

import './assets/css/App.css';

ReactDOM.render(
    <Router>
        <Routers/>
    </Router>,
    document.getElementById('root')
);