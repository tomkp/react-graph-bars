import './application.scss';

import React from 'react';
import {render} from 'react-dom';

import Graph from '../src/Graph';

const data = [];
for (let i = 0; i < 50; i++) {
    data.push(Math.random());
}

render(<Graph data={data} />, document.getElementById('root'));
