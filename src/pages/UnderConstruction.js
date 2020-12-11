import React from 'react';
import { Hero } from '../components/Hero';
import Button from 'react-bootstrap/Button';

export const UnderConstruction = () => (
    <>
        <Hero text="This page is under construction!">
            <Button variant="primary" onClick= {() => {
                    window.location.href='mailto:mwnewman21@gmail.com';
                }}>Contact Me!</Button>
        </Hero>
    </>
)