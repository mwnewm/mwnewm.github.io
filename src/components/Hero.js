import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background.jpeg';

const Styles = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    .hero-container{
        background-image: url(${backgroundImage});
        background-position: center bottom;
        background-size: cover;
        background-repeat: no-repeat;
        height: 300px;
        width: 100%;
        display: flex;
        flex-direction: column;
        object-fit: contain;
        text-align: center;
        z-index: -2;
    }
    .overlay-text {
        color: #ffffff;
        opacity: 0.8;
        font-family: 'Montserrat', sans-serif;
        font-size: 8vw;
        font-weight: 900;
        letter-spacing: 30px;
    }
`

export const Hero = ({
    text,
    children
}) => (
    <Styles>
    <div className='hero-container'>
        <div className='center'>
            <div className='overlay-text'>{text}</div>
            {children}
        </div>
    </div>
    </Styles>
)