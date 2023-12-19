import React from 'react'
import {useState} from 'react'

const FullScreen = (props) => {
    const {image, state} = props;

    let overlayStyle = {
        zIndex: '10',
        position: 'fixed',
        width: '100%',
        height: '120vh',
        backgroundColor: 'rgba(5,5,5,.9)',
        marginTop: '-120px',
    }
    let secStyle = {
        padding: '40px',
    }
    let closeStyle = {
        float: 'right',
        fontSize: '2.5rem',
        color: 'white',
        cursor: 'pointer',
    }
    let imgStyle = {
        margin: 'auto',
    }

    return (
        <div className="overlay" style={overlayStyle}>
            <section style={secStyle}>
                <div style={closeStyle} onClick={state}>X</div>
                <img src={image} style={imgStyle} />
            </section>
        </div>
    )
}

export default FullScreen;