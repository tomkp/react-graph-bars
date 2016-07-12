import React from 'react';
import Color from 'color';
import "./graph.scss";


const Bar = ({value}) => {
    const from = Color('blue').alpha(0.75);
    const to = from.mix(Color('hotpink').alpha(0.75), value);
    const style = {top: `${value * 100}%`, background: `${to.rgbString()}`};
    //console.log(`${JSON.stringify(style)}`)
    return (
    <div className="bar">
        <div className="full"></div>
        <div className="value" style={style}></div>
    </div>
 )
};


export default ({data}) => <div className="graph">{ data.map((value, index) => <Bar key={index} value={value} />)}</div>
