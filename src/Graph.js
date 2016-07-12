import React from 'react';
import "./graph.scss";


const Bar = ({value}) => {
 const style = {top: `${value * 100}%`};
 return (
    <div className="bar">
        <div className="full"></div>
        <div className="value" style={style}></div>
    </div>
 )
};


export default ({data}) => <div className="graph">{ data.map((value, index) => <Bar key={index} value={value} />)}</div>
