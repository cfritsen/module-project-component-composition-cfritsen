import React from 'react'

const Module = data => {
    return (
        <div>
            <img src={data.url} />
            <h3>{data.title}</h3>
            <p>{data.date}</p>
            <p>{data.explanation}</p>
        </div>
    );
    
};

export default Module