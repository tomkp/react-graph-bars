import React from 'react';
import Color from 'color';
import "./graph.scss";


const Bar = ({value}) => {
    const from = Color('#f00').alpha(.5);
    const to = from.mix(Color('#00f').alpha(.5), value);
    const style = {top: `${value * 100}%`, background: `${to.rgbString()}`};
    //console.log(`${JSON.stringify(style)}`)
    return (
    <div className="bar">
        <div className="full"></div>
        <div className="value" style={style}></div>
    </div>
 )
};


export default ({name, data}) => <div className={`graph ${name}`}>{ data.map((value, index) => <Bar key={index} value={value} />)}</div>
