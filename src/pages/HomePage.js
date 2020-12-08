import React from 'react';
import { Hero } from '../components/Hero';
import { Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import headshot from '../assets/headshot.jpg';
import styled from 'styled-components';

const Styles = styled.div`   
p {
    text-indent: 3em;
}
.intro-text {
    margin-top: 25px;
    padding: 1em;
}
`

export const HomePage = () => (
    <Styles>
        <Hero text="Welcome" />
        <div className='page-contents'>
            <Row>
                <div className='body'>
                        <Image className='profile-img' src={headshot} roundedCircle /> 
                        <div className='intro-text'>
                            <p>
                                Hi there! My name is Maeve Newman and I am an undergraduate student at the University of Massachusetts, Amherst studying computer science. 
                                I have significant coursework in the social sciences, as well as a history of work in public service, and I'm looking to apply my technical skills to projects focused on the intersection of computing and social change. 
                                If you're interested in seeing what I'm working on, please check out my GitHub or add me on LinkedIn.
                            </p>
                            <p>
                                This website is a work in progress and I'll be updating it periodically. In the meantime, don't hesitate to reach out!
                            </p>
                        </div>
                </div>
            </Row>
        </div>
        <div className='center'>
            <Button variant="primary" onClick= {() => {
                window.location.href='mailto:mwnewman21@gmail.com';
            }}>Contact Me</Button>
        </div>
    </Styles>
)