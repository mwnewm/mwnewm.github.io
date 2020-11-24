import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    .hero-container{
        background-image: url("https://cdn.pixabay.com/photo/2019/11/09/17/36/fjord-4614096_1280.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        height: 400px;
        width: 100%;
        display: flex;
        flex-direction: column;
        object-fit: contain;
        text-align: center;
        z-index: -2;
    }
    .overlay-text {
        color: #00000;
        opacity: 0.9;
        font-family: 'Montserrat', sans-serif;
        font-size: 70px;
        letter-spacing: 10px;
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