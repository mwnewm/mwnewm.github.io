import React from 'react';
import { Jumbotron as Jumbo, Container, Image, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import mountainsImage from '../assets/mountainsImage.jpg';
import headshot from '../assets/headshot.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${mountainsImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }
    .overlay-text {
        vertical-align: center;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 20px;
        z-index: -1;
    }
    .overlay-img {
        opacity: 1.0;
        height: 150px;
        z-index: -1;
        text-align: left;
    }
`;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <Container>
                <Row className='overlay-text'>
                    <Col>
                        <div >
                            <h1>Welcome</h1>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col>
                        <div >
                            <Image className='overlay-img' src={headshot} roundedCircle />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbo>
    </Styles >
)