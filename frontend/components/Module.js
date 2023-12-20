import React from 'react'
import Image from './Image.js'
import styled from 'styled-components'

const Wrapper = styled.div`
    text-align: center;
    width: 100%;
`
const Content = styled.div`
    max-width: 800px;
    margin: auto;
`

const Module = rawData => {
    const {data} = rawData;

    return (
        <Wrapper>
            <Image data={data} />
            <Content>
                <h3>{data.title}</h3>
                <p>{data.date}</p>
                <p>{data.explanation}</p>
            </Content>
        </Wrapper>
    );
    
};

export default Module