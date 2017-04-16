import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
} from 'react-router-dom'

import Routers from './Routes'

ReactDOM.render(
    <Router>
        <Routers/>
    </Router>,
    document.getElementById('root')
);