import React from 'react'
import {useState} from 'react'
import FullScreen from './FullScreen Image'
import styled from 'styled-components'

const Image = data => {
    let image = data.data.url
    
    let imgStyle = {
        maxHeight: '40vh',
        margin: 'auto',
    }

    const [fullScreen, setFullScreen] = useState(false)
    const expand = () => {
        setFullScreen(!fullScreen)
    };

    return (
        <>
        {fullScreen ? <FullScreen image={image} state={expand} /> : null}
        <img src={image} style={imgStyle} onClick={expand} />
        </>
    )
}

export default Image;