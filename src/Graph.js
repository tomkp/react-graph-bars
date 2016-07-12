import React from 'react';
import Color from 'color';
import "./graph.scss";


const Bar = ({value, minColor = 'rgba(0, 0, 255, .75)', maxColor = 'rgba(255, 0, 0, .75)'}) => {
    const from = Color(minColor);
    const to = from.mix(Color(maxColor), value);
    const style = {top: `${value * 100}%`, background: `${to.rgbString()}`};
    return (
    <div className="bar">
        <div className="full"></div>
        <div className="value" style={style}></div>
    </div>
 )
};


export default ({name, data, minColor = 'rgba(0, 0, 255, .75)', maxColor = 'rgba(255, 0, 0, .75)'}) => {
 return <div className={`graph ${name}`}>{ data.map((value, index) => <Bar key={index} value={value} minColor={minColor} maxColor={maxColor} />)}</div>
}
