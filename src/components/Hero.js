import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .hero-container{
        background: #7F949A;
        height: 700px;
        width: 100%;
        display: flex;
        flex-direction: column;
        object-fit: contain;
        text-align: center;
        z-index: -2;
    }
    .overlay-text {
        color: #ffffff;
        padding: 100px;
    }
`

export const Hero = ({
    text,
    children
}) => (
    <Styles>
    <div className='hero-container'>
        <div className='overlay-text'>
            <h2>{text}</h2>
            {children}
        </div>
    </div>
    </Styles>
)