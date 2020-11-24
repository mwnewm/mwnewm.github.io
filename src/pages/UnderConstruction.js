import React from 'react';
import { Hero } from '../components/Hero';
import { Row } from 'react-bootstrap';
import { DownloadButton } from '../components/DownloadButton';


export const UnderConstruction = () => (
    <React.Fragment>
        <Hero text="Under Construction" />
        <div className='page-contents'>
            <Row className='center'>
                This site is currently under construction. In the meantime, check out my resume below.
            </Row>
        </div>
        <div className='center'>
            <DownloadButton variant="secondary">Download My Resume!</DownloadButton>
        </div>
    </React.Fragment>
)