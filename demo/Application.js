import './application.scss';

import React from 'react';
import {render} from 'react-dom';

import Graph from '../src/Graph';




const Application = () => {
    const generateData = (count) => {
        const data = [];
        for (let i = 0; i < count; i++) {
            data.push(Math.random());
        }
        return data;
    };
    return (
        <div className="application">
            <Graph name="xxx" data={generateData(50)} />
        </div>
    );
};

render(<Application />, document.getElementById('root'));
