import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
    z-index: 10;
    position: fixed;
    width: 100%;
    height: 120vh;
    background-color: rgba(5,5,5,.9);
    margin-top: -120px;
`
const ImgWrapper = styled.section`
    padding: 40px;
`

const Close = styled.button`
    float: right;
    font-size: 2.5rem;
    color: white;
    background: none;
    border: none;
`

const FullScreen = (props) => {
    const {image, state} = props;

    let imgStyle = {
        margin: 'auto',
    }

    return (
        <Overlay>
            <ImgWrapper>
                <Close onClick={state}>X</Close>
                <img src={image} style={imgStyle} />
            </ImgWrapper>
        </Overlay>
    )
}

export default FullScreen;