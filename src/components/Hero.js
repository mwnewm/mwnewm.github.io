import React from 'react';
import styled from 'styled-components';
import {DownloadButton} from './DownloadButton';

const Styles = styled.div`
    .hero-container{
        background: #7F949A;
        height: 100vh;
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

export const Hero = () => (
    <Styles>
    <div className='hero-container'>
        <div className='overlay-text'>
            <h2>This page is under construction!</h2>
        </div>
        <div className='overlay-text'> 
        <h4>In the meantime...</h4>
            <DownloadButton variant="secondary">
                Download my resume!
            </DownloadButton>
        </div>
    </div>
    </Styles>
)