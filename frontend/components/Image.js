import React from 'react'
import {useState} from 'react'
import FullScreen from './FullScreen Image'

const Image = data => {
    let image = data.data.url
    
    let imgStyle = {
        //width: '100%',
        maxHeight: '40vh',
        margin: 'auto',
    }

    const [fullScreen, setFullScreen] = useState(false)
    const expand = () => {
        setFullScreen(!fullScreen)
    };

    //fullScreen ? <FullScreen image={image} state={expand} /> : null
    <FullScreen image={image} state={expand} />

    return (
        <>
        {fullScreen ? <FullScreen image={image} state={expand} /> : null}
        <img src={image} style={imgStyle} onClick={expand} />
        </>
    )
}

export default Image;