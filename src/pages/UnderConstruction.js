import React from 'react';
import { Hero } from '../components/Hero';
import { DownloadButton } from '../components/DownloadButton';


export const UnderConstruction = () => (
    <>
        <Hero text="This page is under construction!">
            <DownloadButton variant="secondary">Download My Resume!</DownloadButton>
        </Hero>
    </>
)