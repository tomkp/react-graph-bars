import './application.scss';

import React from 'react';
import {render} from 'react-dom';

import Graph from '../src/Graph';
import "./graph.scss";



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
            <Graph name="xxx" data={generateData(50)} minColor="black" maxColor="yellow" />
            <Graph name="xxx" data={generateData(50)} minColor="red" maxColor="yellow" />
            <Graph name="xxx" data={generateData(50)} minColor="red" maxColor="green" />
            <Graph name="xxx" data={generateData(50)} minColor="blue" maxColor="green" />
            <Graph name="xxx" data={generateData(50)} minColor="blue" maxColor="red" />
            <Graph name="xxx" data={generateData(50)} minColor="rgba(0,0,0,.5)" maxColor="red" />
            <Graph name="xxx" data={generateData(50)} minColor="rgba(0,0,0,.8)" maxColor="green" />
            <Graph name="xxx" data={generateData(50)} minColor="rgba(0,0,255,.5)" maxColor="rgba(255,0,0,.5)" />
            <Graph name="xxx" data={generateData(50)} minColor="rgba(255,0,100,1)" maxColor="rgba(0,0,255,.5)" />
        </div>
    );
};

render(<Application />, document.getElementById('root'));
