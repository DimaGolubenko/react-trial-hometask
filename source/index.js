// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Theme
import './theme/init';

import Portfolio from './pages/Portfolio';

const start = (
    <>
        <Portfolio />
    </>
);

ReactDOM.render(start, document.getElementById('app'));
