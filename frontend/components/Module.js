import React from 'react'
import Image from './Image.js'

const Module = rawData => {
    const {data} = rawData;
    let potdStyle = {
        textAlign: 'center',
        width: '100%',
    }
    let infoStyle = {
        maxWidth: '800px',
        margin: 'auto',
    }


    return (
        <div className="potd-wrapper" style={potdStyle}>
            <Image data={data} />
            <div className="infoContainer" style={infoStyle}>
                <h3>{data.title}</h3>
                <p>{data.date}</p>
                <p>{data.explanation}</p>
            </div>
        </div>
    );
    
};

export default Module